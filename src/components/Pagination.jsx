import React, { useState, useContext } from "react";
import Pagination from "react-bootstrap/Pagination";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PaginationContext } from "../context/PaginationContext";
import { PetsContext } from "./../context/PetsContext";

const MyPagination = () => {
  const [paginationData, setPaginationData] = useContext(PaginationContext);
  const [pets, setPets] = useContext(PetsContext);
  const { numberOfResults, startIndex, endIndex, hasNext } = paginationData;
  const pages = Math.floor(numberOfResults / 10 + 1);
  const [activePage, setActivePage] = useState(startIndex / 10 + 1);

  const handleClick = (number) => {
    setPets(undefined);
    setActivePage(number);
    setPaginationData({ ...paginationData, page: number - 1 });
  };

  const handleNext = (e) => {
    if (hasNext) {
      e.target.blur();
      setPets(undefined);
      setActivePage(activePage + 1);
      setPaginationData({ ...paginationData, page: activePage });
    }
  };

  const handlePrevious = (e) => {
    if (activePage > 1) {
      console.log("previous");
      setPets(undefined);
      e.target.blur();
      setActivePage(activePage - 1);
      setPaginationData({ ...paginationData, page: activePage - 2 });
    }
  };

  const handleFirst = () => {
    if (activePage > 1) {
      setPets(undefined);
      setActivePage(1);
      setPaginationData({ ...paginationData, page: 0 });
    }
  };

  const handleLast = () => {
    if (hasNext) {
      setPets(undefined);
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
    <Container>
      <Row className="pagination-row">
        <Col sm={12} md={4} lg={3}>
          <p>
            {`Showing ${startIndex + 1} to ${
              endIndex + 1
            } of ${numberOfResults} Results`}
          </p>
        </Col>
        <Col fluid>
          <Pagination className="my-pagination">
            <Pagination.First
              onClick={() => handleFirst()}
              disabled={activePage === 1}
            />
            <Pagination.Prev
              onClick={(e) => handlePrevious(e)}
              disabled={activePage === 1}
            />
            {items}
            <Pagination.Next
              onClick={(e) => handleNext(e)}
              disabled={!hasNext}
            />
            <Pagination.Last onClick={() => handleLast()} disabled={!hasNext} />
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
};

export default MyPagination;
