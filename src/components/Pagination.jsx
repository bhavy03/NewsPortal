/* eslint-disable react/prop-types */
import Pagination from '@mui/material/Pagination';

export default function PaginationRounded({ cardsPerPage, totalCards, handlePageChange }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <div className='flex justify-center md:mb-10 mb-5'>
        <Pagination count={5} variant="outlined" shape="rounded" onChange={handlePageChange} />
      </div>
    </>
  );
}