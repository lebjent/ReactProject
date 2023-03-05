import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BoardList from '../board/BoardList';
import BoardWrite from '../board/BoardWrite';

function Board() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<BoardList />} />
        <Route path="/boardWrite" element={<BoardWrite />} />
      </Routes>  
    </div>
  )
}

export default Board;