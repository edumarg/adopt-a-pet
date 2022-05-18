import React, { useState, useContext, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";
import { PaginationContext } from "../context/PaginationContext";

const MyPagination = () => {
  const [paginationData, setPaginationData] = useContext(PaginationContext);
  const { numberOfResults, startIndex, hasNext } = paginationData;
  const pages = Math.floor(numberOfResults / 10 + 1);
  const [activePage, setActivePage] = useState(startIndex / 10 + 1);

  const handleClick = (number) => {
    setActivePage(number);
    setPaginationData({ ...paginationData, page: number - 1 });
  };

  const handleNext = () => {
    if (activePage < pages) {
      setActivePage(activePage + 1);
      setPaginationData({ ...paginationData, page: activePage });
    }
  };

  const handlePrevious = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
      setPaginationData({ ...paginationData, page: activePage - 2 });
    }
  };

  const handleFirst = () => {
    if (activePage > 1) {
      setActivePage(1);
      setPaginationData({ ...paginationData, page: 0 });
    }
  };

  const handleLast = () => {
    if (activePage < pages) {
      setActivePage(pages);
      setPaginationData({ ...paginationData, page: pages - 1 });
    }
  };

  let items = [];
  for (let number = 1; number <= pages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        onClick={() => handleClick(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Pagination className="my-pagination">
      <Pagination.First
        onClick={() => handleFirst()}
        disabled={activePage === 0}
      />
      <Pagination.Prev
        onClick={() => handlePrevious()}
        disabled={activePage === 0}
      />
      {items}
      <Pagination.Next
        onClick={() => handleNext()}
        disabled={activePage === pages}
      />
      <Pagination.Last
        onClick={() => handleLast()}
        disabled={activePage === pages}
      />
    </Pagination>
  );
};

export default MyPagination;
