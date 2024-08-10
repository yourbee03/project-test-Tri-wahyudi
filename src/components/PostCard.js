import React from 'react';
import './PostCard.css';

const PostCard = ({ post }) => {
  const {
    title,
    small_image: smallImage,
    medium_image: mediumImage,
    published_at: publishedAt,
  } = post;

  return (
    <div className="post-card">
      <img
        className="post-card__image"
        src={mediumImage}
        alt={title}
        loading="lazy"
      />
      <div className="post-card__info">
        <h3 className="post-card__title">{title}</h3>
        <p className="post-card__date">Published: {new Date(publishedAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default PostCard;