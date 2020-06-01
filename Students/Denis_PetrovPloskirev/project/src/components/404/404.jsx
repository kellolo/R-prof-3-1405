import React from'react';
import {Link} from 'react-router-dom';
import './404.css';

export default ({ type }) => {
  let content = (type == 'exit') ? 'By, by. See you later..' : 'Page does not exist ¯\\_(ツ)_/¯';
  return (
    <div className = "wrapper404">
      <p className = "text404"> { content } </p>
      <Link to = '/chat/1/'>
        <span className = "link404">main</span>
      </Link>
    </div>
  )
}