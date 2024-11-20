# forum

# Настройка postgresql

sudo -u postgres psql
create database forum;
sudo -u postgres psql -d forum -f database_backups/release_plain.sql

## Запуск

poetry install
cd src
poetry run gunicorn main:app --bind 0.0.0.0:8002

poetry run ./run_with_reload.sh

# Webpack optimization

docker build -f Dockerfile.webpack -t forum_webpack .
docker run --name forum_webpack_container -p 8080:8080 -v ./optimized:/app/optimized -v ./webpack.config.js:/app/webpack.config.js -d forum_webpack
sudo docker exec -it forum_webpack_container bash

npx webpack

sudo docker stop forum_webpack_container
sudo docker rm forum_webpack_container
sudo docker rmi forum_webpack