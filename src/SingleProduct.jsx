import React from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  return <div> SingleProduct id is {id}</div>;
};

export default SingleProduct;
