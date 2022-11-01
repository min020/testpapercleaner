/*
import React, { Component } from "react";
import './style.css';
import First from './First';
import Restore from './Restore';


const menuList = {
  0: <First />,
  1: <Restore />
};

class App extends React.Component{
  constructor(props) {
    super();

    this.state = {
      menu: 0,
    };
  }

  changeMenu = (menuIndex) =>{
    this.setState({menu : menuIndex});
  }

  render(){
    return(
      <div className="wrap">
        <div className="menuBar">
          <ul className="tabs">
            <li className={`${this.state.menu === 0? 'active': ''}`} 
            onClick={() => this.changeMenu(0)}>사용 설명</li>
            <li className={`${this.state.menu === 1? 'active': ''}`} 
            onClick={() => this.changeMenu(1)}>시험지 복원</li>
          </ul>
        </div>
        <div className="contentArea">
          {menuList[this.state.menu]}
        </div>
      </div>
    )
  }
}


export default App;
*/

import React, {useState} from 'react';
import First from './First';
import ImageUpload from './ImageUpload';
import './style.css';

export default function Orgchart() {
    const [activeIndex, setActiveIndex]=useState(0);

    const tabClickHandler=(index)=>{
        setActiveIndex(index);
    };

    const tabContArr=[
        {
            tabTitle:(
                <li className={activeIndex===0 ? "is-active" : ""} onClick={()=>tabClickHandler(0)}> 시험지 복원 </li>
            ),
            tabCont:(
                <div className="contentArea">
                  <ImageUpload/>
                </div>
                
            )
        },
        {
            tabTitle:(
                <li className={activeIndex===1 ? "is-active" : ""} onClick={()=>tabClickHandler(1)}> 사용 설명 </li>
            ),
            tabCont:(
              <div className="contentArea">
                <First/>
              </div>
            )
        }
    ];

    return (
        <div>
          <ul className="tabs is-boxed">
          <img src="img/PCicon2.png" style = {{paddingLeft:"0.53rem", paddingRight:"0.6rem", paddingBottom:"0.03rem"}}/>
            {tabContArr.map((section, index)=>{
                return section.tabTitle
            })}
          </ul>
          <div>
          	{tabContArr[activeIndex].tabCont}
          </div>
        </div>
    );
}