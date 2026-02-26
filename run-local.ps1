# Stop any container already using port 8123
$existing = docker ps --filter "publish=8123" -q
if ($existing) {
    Write-Host "Stopping existing container on port 8123..."
    docker stop $existing | Out-Null
}

Write-Host "Building full image..."
docker build -t psychology-notes-local .
docker run --rm -p 8123:8080 psychology-notes-local