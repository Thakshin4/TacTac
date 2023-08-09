import heartIcon from './assets/likes.png'; // Import your heart icon image

const Post = ({ title, imageSrc, likes }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="post-image" />
      <h4>{title}</h4>
      <div className="likes-container">
        <img src={heartIcon} alt="Heart" className="heart-icon" />
        {likes} likes
      </div>      
    </div>
  );
};

export default Post;
