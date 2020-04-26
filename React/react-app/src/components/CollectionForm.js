import React, { useState } from "react";

function CollectionForm(props) {
  const [ratingState, setRating] = useState(5);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");

  function increment() {
    if (ratingState < 5) setRating((value) => value + 1);
  }

  function decrement() {
    if (ratingState > 1) setRating((value) => value - 1);
  }

  function reset() {
    setRating(5);
    setName("");
    setDescription("");
    setImageURL("");
  }

  return (
    <div className="collection-item">
      <img src={imageURL} />
      <div className="item-content">
        <input
          placeholder="Name (required)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          placeholder="Image URL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
        <div>
          Rating:
          <button className="small-button" onClick={decrement}>
            -
          </button>
          {ratingState}
          <button className="small-button" onClick={increment}>
            +
          </button>
          <br />
          <button
            disabled={!name}
            onClick={() => {
              props.add({ name, description, imageURL, rating: ratingState });
              reset();
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default CollectionForm;
