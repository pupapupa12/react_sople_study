import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';

const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval(() => {
// root.render(
//   <React.StrictMode>
//     {/* <Library /> */}
//     <Clock />
//   </React.StrictMode>
// );
// }, 1000); 챕터04 시계돌아가는 코드 

// root.render (
//   <React.StrictMode>
//     <CommentList />
//   </React.StrictMode>
// ); 챕터05 댓글 형식 컴포넌트 코드

// /* < 챕터 06 알림 형식 컴포넌트 코드 > */
// root.render(
//   <React.StrictMode>
//     <NotificationList />
//   </React.StrictMode>
// ); 

/* < 챕터 07 훅 컴포넌트 > */
root.render(
  <React.StrictMode>
    <Accommodate />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
