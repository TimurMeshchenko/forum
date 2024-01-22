from flask import Flask, render_template, request, send_from_directory

from database import Base, engine, get_db
from models import Article
from slugify import slugify
import html

app = Flask(__name__)

Base.metadata.create_all(engine)

def create_articles_slugs():
    with get_db() as db:
        for article in db.query(Article).all():
            if article.slug is None:
                article.slug = slugify(article.title)
                db.add(article)
                db.commit()    

create_articles_slugs()

@app.get("/")
def catalog():
    with get_db() as db:
        articles = db.query(Article).all()
    
    return render_template('catalog.html', articles=articles)

@app.get('/article/<slug>')
def article(slug):
    with get_db() as db:
        article = db.query(Article).filter(Article.slug == slug).first()

    return render_template('article.html', article=article)

@app.get('/media/<filename>')
@app.get('/media/<folder>/<filename>')
def media(folder=None, filename=None):
    if folder is not None:
        return send_from_directory(f'media/{folder}', filename)
    else:
        return send_from_directory('media', filename)