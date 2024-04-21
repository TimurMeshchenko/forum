# forum

# Настройка postgresql

sudo -u postgres psql
create database forum;
sudo -u postgres psql -d forum -f database_backups/release_plain.sql

## Запуск

sudo poetry install
cd src
sudo poetry run gunicorn main:app

sudo poetry run ./run_with_reload.sh