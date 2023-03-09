import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BoardDetail from '../board/BoardDetail';
import BoardList from '../board/BoardList';
import BoardModify from '../board/BoardModify';
import BoardWrite from '../board/BoardWrite';

function Board() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<BoardList />} />
        <Route path="/boardWrite" element={<BoardWrite />} />
        <Route path="/boardDetail/:bno" element={<BoardDetail />} />
        <Route path="/boardModify/:bno" element={<BoardModify />} />
      </Routes>  
    </div>
  )
}

export default Board;