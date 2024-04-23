from flask import Flask, render_template, send_from_directory, request, jsonify
from database import Base, engine, get_db
from models import Article, Comment
from slugify import slugify

app = Flask(__name__, static_url_path='/forum/static')

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
        comments = article.comments

    return render_template('article.html', article=article, comments=comments)

@app.post('/api/create_comment')
def create_comment():
    data = request.json
    content = data.get('content')
    author_name = data.get('author_name')
    articles_id = data.get('articles_id')

    with get_db() as db:
        new_comment = Comment(content=content, author_name=author_name, articles_id=articles_id)
        db.add(new_comment)
        db.commit()
    return jsonify({'status': 'success'})

@app.get('/api/get_articles_page')
def get_articles_page():
    offset = int(request.args.get('offset', 0))
    limit = int(request.args.get('limit', 30))

    with get_db() as db:
        articles_page_objects = db.query(Article).order_by(Article.id).offset(offset).limit(limit).all()
    
    articles_html = render_template('article_template.html', articles=articles_page_objects)

    return jsonify({"articles": articles_html})

@app.get('/forum/media/<filename>')
@app.get('/forum/media/<parent_folder>/<filename>') 
@app.get('/forum/media/<parent_folder>/<article_folder>/<filename>') 
def media(parent_folder=None, article_folder=None, filename=None):
    if parent_folder is None:
        return send_from_directory('media', filename)

    if article_folder is None:
        return send_from_directory(f'media/{parent_folder}', filename)    
    
    return send_from_directory(f'media/{parent_folder}/{article_folder}', filename)
    