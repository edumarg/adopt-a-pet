import React, { useState, useContext, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";
import { PaginationContext } from "../context/PaginationContext";

const MyPagination = () => {
  const [paginationData, setPaginationData] = useContext(PaginationContext);
  const { numberOfResults, startIndex, hasNext } = paginationData;
  const pages = Math.floor(numberOfResults / 10);
  const [activePage, setActivePage] = useState(startIndex / 10 + 1);

  useEffect(() => setActivePage(startIndex / 10 + 1), [paginationData]);

  let items = [];
  for (let number = 1; number <= pages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === activePage}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Pagination className="my-pagination">
      <Pagination.First />
      <Pagination.Prev />
      {items}
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
};

export default MyPagination;
