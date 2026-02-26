# Stop any container already using port 8123
$existing = docker ps --filter "publish=8123" -q
if ($existing) {
    Write-Host "Stopping existing container on port 8123..."
    docker stop $existing | Out-Null
}

docker run --rm -it -p 8123:8000 -v ${PWD}:/docs zensical/zensical