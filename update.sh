echo "Updating..."
git pull
echo "Building..."
if command -v docker-compose >/dev/null 2>&1; then
  docker-compose build
else
  docker compose build
fi
echo "Starting..."
if command -v docker-compose >/dev/null 2>&1; then
  docker-compose up -d
else
  docker compose up -d
fi
