import image from "../assets/news.jpg"
const NewsItem = ({ title, description, src, url }) => {
    return (
      <div className="card mb-3 "data-bs-theme="dark">
        {src && <img src={image} className="card-img-top" alt={title} />}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
        </div>
      </div>
    );
  };
export default NewsItem