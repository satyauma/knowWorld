import NewsItem from "./NewsItem"


import React, { useState, useEffect } from 'react';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=07a39995ad69447aaa0c667b35f704da`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [category]);
    
    
    return(
        
     <div className="container mt-4 bg">
        
      <h2 className="text-center mb-4">Latest <span className="badge bg-danger">News</span></h2>
      
      <div className="row">
        {articles.map((news, index) => (
          <div className="col-md-4" key={index}>
            <NewsItem 
              title={news.title} 
              description={news.description} 
              src={news.urlToImage} 
              url={news.url} 
            />
          </div>
        ))}
      </div>
      
    </div>
    )
}

export default NewsBoard;