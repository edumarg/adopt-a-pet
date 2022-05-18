import React from "react";
import Pagination from "react-bootstrap/Pagination";

const MyPagination = () => {
  return (
    <Pagination className="my-pagination">
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item active>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Item disabled>{6}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
};

export default MyPagination;
