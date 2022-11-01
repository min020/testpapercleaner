//first
import './Main.css';
import React, { useState } from "react";

function First() {
    return(
      <body>
        <header className="bg-dark py-5">
        <h1 className="display-4 fw-bold">PC USER's GUIDE</h1>
        </header>
        <h3>　</h3> <h3>　</h3>
        <h3 className='display-6 fw-light'>1. 필기 된 시험지를 스캔 및 촬영으로 이미지 파일(JPGE, PNG, …) 형식으로 준비합니다.</h3>
        <img src="img/a(1).png" className = 'img-fluid'/>
        <h3>　</h3> <h3>　</h3> <h3>　</h3>
        <h3 className='display-6 fw-light'>2. '시험지 복원' 탭으로 이동해 '업로드' 버튼을 클릭하여 복원할 이미지 파일을 첨부합니다.</h3>
        <img src="img/a(2).png" className = 'img-fluid'/>
       <h3>　</h3> <h3>　</h3> <h3>　</h3>
        <h3 className='display-6 fw-light'>3. 파일 첨부가 완료되었다면 '변환하기' 버튼을 눌러주세요.</h3>
        <h3 className='display-6 fw-light'>(크기에 따라 시간이 오래 걸릴 수 있습니다.)</h3>
        <img src="img/a(3).png" className = 'img-fluid'/>
        <h3>　</h3> <h3>　</h3> <h3>　</h3>
        <h3 className='display-6 fw-light'>4. 복원 완료된 파일을 다운로드해주세요.</h3>
        <img src="img/a(4).png" className = 'img-fluid'/>
        <h3>　</h3>
      </body>
    )
}
  
export default First;