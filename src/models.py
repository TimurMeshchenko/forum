from sqlalchemy import Column, ForeignKey, Integer, String, BigInteger, Float, Table, Text, TIMESTAMP, Boolean
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from database import Base

class Article(Base):
    __tablename__ = 'articles'

    id = Column(Integer, primary_key=True)
    title = Column(String(250), nullable=False)
    content = Column(Text, nullable=False)
    slug = Column(String(250), unique=True, nullable=True)
    image = Column(String(250), nullable=False)
    category = Column(String(250), nullable=True)

    comments = relationship('Comment', back_populates='articles')

class Comment(Base):
    __tablename__ = 'comment'

    id = Column(Integer, primary_key=True)
    author_name = Column(String(250), nullable=False)
    articles_id = Column(BigInteger, ForeignKey('articles.id'))
    content = Column(Text)
    created_at = Column(TIMESTAMP(timezone=True), default=func.now())

    articles = relationship('Article', back_populates='comments')
