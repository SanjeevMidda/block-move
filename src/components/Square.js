import React from "react";

const Square = ({ gridColumn, gridRow }) => {
  let styles = {
    gridColumn: gridColumn,
    gridRow: gridRow,
  };

  return <div className="square" style={styles}></div>;
};

export default Square;
