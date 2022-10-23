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