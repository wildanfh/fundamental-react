import React from 'react';
import PropTypes, { bool, string } from 'prop-types';

function News({ title, description, image, isFeatured, tags, bookmark, style }) {
  return (
    <article style={style}>
      <img src={image} alt={title} />
      {isFeatured && (
        <p>
          <strong>Hot News!</strong>
        </p>
      )}
      <h2>{title}</h2>
      <p>{description}</p>
      <br />
      <p>{tags.map((tag) => `#${tag} `)}</p>
      <button onClick={bookmark}>Bookmark</button>
    </article>
  );
}

// TODO: definisikan propTypes untuk komponen News
News.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isFeatured: PropTypes.bool.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  bookmark: PropTypes.func.isRequired,
  style: PropTypes.object
}

export default News;