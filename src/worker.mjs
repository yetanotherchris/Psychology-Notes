// Passthrough Worker for static assets.
//
// Cloudflare serves matching files from the `ASSETS` binding before this
// script runs. The fetch handler is the documented fallback for requests that
// don't resolve to a static asset (and honours `not_found_handling` in
// wrangler.jsonc). Keeping the handler lets us add dynamic routes later
// without changing the deployment model.
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
