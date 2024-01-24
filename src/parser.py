import requests
from slugify import slugify
import os
import psycopg2

def connect_to_database() -> None:
    db_connection = psycopg2.connect(
        database='forum',
        user='postgres',
        password='Qewads',
        host='localhost',
        port=5432
    )

    return db_connection

def mkdir(new_directory):
    if not os.path.exists(new_directory):
        os.makedirs(new_directory)

def download_images(article_object, article_media_folder):
    for i in range(len(article_object['imgs'])):
        image_url = article_object['imgs'][i]
        file_name = image_url.split('/')[-1]
        destination_file = f"{article_media_folder}/{file_name}"
        
        article_object['content'] = article_object['content'].replace(image_url, f"/{destination_file}") 
        download_image(image_url, destination_file)
        add_article_img(article_object, destination_file, i)

def download_image(url, destination_path):
    try:
        response = requests.get(url, stream=True)
        response.raise_for_status()

        with open(destination_path, 'wb') as file:
            for chunk in response.iter_content(chunk_size=8192):
                file.write(chunk)

    except requests.exceptions.RequestException as e:
        print(f"Error downloading image: {e}")

def add_article_img(article_object, destination_file, i):
    if i == 0:
        db_file_path = destination_file.split("/")[1:]
        article_object['img'] = '/'.join(db_file_path)

articles_objects = []
db_connection = connect_to_database()
cursor = db_connection.cursor() 

for article_object in articles_objects:
    article_object['slug'] = slugify(article_object['title'])
    article_media_folder = f"media/articles_images/{article_object['slug']}"
    
    mkdir(article_media_folder)
    
    download_images(article_object, article_media_folder)

    cursor.execute(
        "INSERT INTO articles (title, content, slug, image) VALUES (%s, %s, %s, %s)", 
        (article_object['title'], article_object['content'], article_object['slug'], article_object['img'])
    )

db_connection.commit()
