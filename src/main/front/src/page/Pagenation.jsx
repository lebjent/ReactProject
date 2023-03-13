import React from "react";
import '../css/reactPage.css'

function Pagenation({ currentPage, pageMaker, onPageChange }) {

    const { startPage, endPage, prev, next } = pageMaker;

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

  return (
    <div>
      <ul className="pagination">
        {prev && (
          <li onClick={() => onPageChange(startPage-1)}>
            <span>이전</span>
          </li>
        )}
        {pageNumbers.map((page) => (
            <li key={page} className={currentPage === page ? "active" : ""}
            onClick={() => onPageChange(page)}>
            <span>{page}</span>    
            </li>  
        ))}
        {next  && (
          <li onClick={() => onPageChange(endPage+1)}>
            <span>다음</span>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Pagenation;
