import ReactPaginate from "react-paginate";
import styled from "styled-components";

interface PaginateProps {
  limit: number;
  offset: number;
  count: number;
  onPageChange: (offset: number) => unknown;
}

const MyPaginate = styled(ReactPaginate).attrs({
  // You can redefine classes here, if you want.
  activeClassName: "active", // default to "selected"
})`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  padding: 0 5rem;

  li a {
    border-radius: 7px;
    padding: 0.1rem 1rem;
    border: gray 1px solid;
    cursor: pointer;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: #0366d6;
    border-color: transparent;
    color: white;
    min-width: 32px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;

const Paginate = ({
  limit,
  offset,
  count,
  onPageChange,
}: PaginateProps): JSX.Element => {
  const pageCount = Math.ceil(count / limit);
  const currentPage = Math.trunc(offset / limit) + 1;

  const handlePageChange = ({ selected }: { selected: number }) => {
    const newOffset = selected * (limit - 1);

    onPageChange(newOffset);
  };

  return (
    <MyPaginate
      pageCount={pageCount}
      renderOnZeroPageCount={null}
      pageRangeDisplayed={11}
      onPageChange={handlePageChange}
      forcePage={currentPage}
      breakLabel="..."
      nextLabel="Вперед"
      previousLabel="Назад"
    />
  );
};

export default Paginate;
