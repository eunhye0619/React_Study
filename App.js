import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [title,cha] = useState(['남자코트 추천','React 스터디', 'Python 독학']);
  let [good, good변경] = useState(0);
  let [bad, bad변경] = useState(0);

  function orderTitle() {
    let newOrder = [...title].sort();
    cha(newOrder);
  }

  return (
    <div className="App">
      <div className="nav">
        <h4>Blog</h4>
      </div>

      <button onClick={() => { 
        let newOrder = [...title].sort();
        cha(newOrder);
      }}>가나다순 정렬</button>

      <button onClick={() => {
        let copy = [...title];
        copy[0] = '여자코트 추천';
        cha(copy);
        }}>수정</button>

      <div className="list">
        <h4>{ title[0] } <span onClick={() => { good변경(good+1) }}>👍</span> {good} <span onClick={()=>{bad변경(bad+1)}}>👎</span> {bad} </h4>
        <p className='date'>9월 13일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[1] } <span onClick={() => { good변경(good+1) }}>👍</span> {good} </h4>
        <p className='date'>9월 13일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[2] } <span onClick={() => { good변경(good+1) }}>👍</span> {good} </h4>
        <p className='date'>9월 13일 발행</p>
      </div>

      <div className="modal">
        <h3>제목</h3>
        <p className='date'>날짜</p>
        <p className='left'>내용</p>
      </div>

    </div>
  );
}


export default App;
