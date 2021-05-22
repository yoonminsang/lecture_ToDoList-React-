import React from 'react';

const Header = ({ date }) => {
  return (
    <div className="content_head">
      <h1>To Do List</h1>
      <div className="clock">{date}</div>
    </div>
  );
};

export default Header;
