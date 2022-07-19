import React from "react";

const Cardsn = () => {
  return (
    <div className="card mx-auto" style={{ width: "17rem" }}>
      <img
        src="https://picsum.photos/500/325"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title text-center">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Finf Out More!
        </a>
      </div>
    </div>
  );
};
export default Cardsn;
