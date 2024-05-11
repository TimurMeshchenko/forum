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