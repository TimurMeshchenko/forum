from sqlalchemy import Column, Integer, String, Text
from database import Base

class Article(Base):
    __tablename__ = 'articles'

    id = Column(Integer, primary_key=True)
    title = Column(String(250), nullable=False)
    content = Column(Text, nullable=False)
    slug = Column(String(250), unique=True, nullable=True)
    image = Column(String(250), nullable=False)
    category = Column(String(250), nullable=True)