// Assemble the Cloudflare Workers static asset bundle in dist/.
//
// This mirrors the production Dockerfile:
//   1. Build the Zensical/MkDocs site        -> site/
//   2. Build the cs2-flicker-paradigm app    -> tools/cs2-flicker-paradigm/dist
//   3. Merge the built site + static tools into dist/, replacing the
//      cs2 source with its compiled output
//   4. Copy Cloudflare-specific files (_headers, robots.txt) into dist/
//
// Usage: node scripts/build.mjs

import { execSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, rmSync, cpSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const siteDir = join(root, 'site');
const distDir = join(root, 'dist');
const toolsDir = join(root, 'tools');
const cs2Dir = join(toolsDir, 'cs2-flicker-paradigm');
const cs2Out = join(cs2Dir, 'dist');

const log = (msg) => console.log(`\n\u001b[36m[build]\u001b[0m ${msg}`);

function run(cmd, cwd = root) {
  console.log(`\u001b[90m$ ${cmd}\u001b[0m`);
  execSync(cmd, { cwd, stdio: 'inherit' });
}

function commandExists(bin) {
  const probe =
    process.platform === 'win32'
      ? `where ${bin} >NUL 2>NUL`
      : `command -v ${bin} >/dev/null 2>&1`;
  try {
    execSync(probe, { cwd: root, stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

// Copy the *contents* of srcDir into destDir (Node's cpSync is ambiguous about
// whether an existing dest is merged or nested, so be explicit).
function copyContents(srcDir, destDir, filter) {
  mkdirSync(destDir, { recursive: true });
  for (const entry of readdirSync(srcDir)) {
    cpSync(join(srcDir, entry), join(destDir, entry), { recursive: true, filter });
  }
}

function buildSite() {
  log('Building site with Zensical...');
  // Tried in order; the first available wins. `python3 -m zensical` is the
  // most portable in CI images (Cloudflare Workers Builds has python3 + pip
  // but no uv), while uvx is the fast path for local development.
  const attempts = [
    { bin: 'uvx', cmd: 'uvx --from zensical zensical build' },
    { bin: 'zensical', cmd: 'zensical build' },
    { bin: 'python3', cmd: 'python3 -m zensical build' },
    { bin: 'python', cmd: 'python -m zensical build' },
  ];
  const attempt = attempts.find((a) => commandExists(a.bin));
  if (!attempt) {
    throw new Error(
      'Zensical not found. Install it with `uv tool install zensical` (https://docs.astral.sh/uv) ' +
        'or `pip install zensical`.',
    );
  }
  run(attempt.cmd);
  if (!existsSync(join(siteDir, 'index.html'))) {
    throw new Error(`Zensical did not produce ${siteDir}/index.html`);
  }
}

function buildCs2() {
  log('Building cs2-flicker-paradigm...');
  run('npm ci', cs2Dir);
  run('npm run build', cs2Dir);
  if (!existsSync(join(cs2Out, 'index.html'))) {
    throw new Error(`cs2-flicker-paradigm build did not produce ${cs2Out}/index.html`);
  }
}

function assemble() {
  log('Assembling dist/...');
  rmSync(distDir, { recursive: true, force: true });
  mkdirSync(distDir, { recursive: true });

  // 1. Built documentation site.
  copyContents(siteDir, distDir);

  // 2. Static tools, excluding node_modules and the cs2 source/build output
  //    (its compiled dist is copied separately below).
  copyContents(toolsDir, join(distDir, 'tools'), (src) => {
    const rel = src.slice(toolsDir.length + 1);
    if (!rel) return true;
    const [first] = rel.split(/[\\/]/);
    if (first === 'cs2-flicker-paradigm') return false;
    if (rel.split(/[\\/]/).includes('node_modules')) return false;
    return true;
  });

  // 3. Compiled cs2-flicker-paradigm app.
  copyContents(cs2Out, join(distDir, 'tools', 'cs2-flicker-paradigm'));

  // 4. Cloudflare + misc passthrough files.
  for (const file of ['_headers', '_redirects', 'robots.txt']) {
    const src = join(root, file);
    if (existsSync(src)) cpSync(src, join(distDir, file));
  }
}

function report() {
  let files = 0;
  let bytes = 0;
  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, entry.name);
      if (entry.isDirectory()) walk(p);
      else {
        files += 1;
        bytes += statSync(p).size;
      }
    }
  };
  walk(distDir);
  log(`dist/ ready: ${files} files, ${(bytes / 1024 / 1024).toFixed(2)} MB`);
}

buildSite();
buildCs2();
assemble();
report();
