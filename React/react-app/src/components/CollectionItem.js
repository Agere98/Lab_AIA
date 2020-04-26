import React, { useState } from "react";

function CollectionItem(props) {
  const { id, name, description, imageURL, rating } = props.item;
  const [ratingState, setRating] = useState(rating);

  function increment() {
    if (ratingState < 5) setRating((value) => value + 1);
  }

  function decrement() {
    if (ratingState > 1) setRating((value) => value - 1);
  }

  return (
    <div className="collection-item">
      <img src={imageURL} />
      <div className="item-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <div>
          Rating:
          <button className="small-button" onClick={decrement}>
            -
          </button>
          {ratingState}
          <button className="small-button" onClick={increment}>
            +
          </button>
        </div>
        <button onClick={() => props.remove(id)}>Remove</button>
      </div>
    </div>
  );
}

export default CollectionItem;
