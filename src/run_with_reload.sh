#!/bin/bash

# Function to restart Gunicorn
restart_gunicorn() {
    echo "Restarting Gunicorn..."
    pkill -f gunicorn
    gunicorn main:app --bind 0.0.0.0:8002 &
}

# Start Gunicorn
gunicorn main:app --bind 0.0.0.0:8002 &

# Watch for changes in the project directory and restart Gunicorn when necessary
while inotifywait -r -e modify,move,create,delete /python/pet_projects/forum; do 
    restart_gunicorn
done