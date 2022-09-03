import React from "react";
import axios from "axios";
import "./Main.css";
import { Route, Routes } from 'react-router-dom';
import uuid from 'react-uuid';

// function Main() {
//   var fileNo = 0;
//   var filesArr = new Array();
//   var name_uuid;

//   const uploadModule = async (e) =>
//   {
//     e.preventDefault();
//     var filesArr_ = filesArr.filter(function(l) {
//       return l != null;
//     });
//     const formData = new FormData();
//     name_uuid = uuid();
//     formData.append("folder_name", name_uuid);
//     for (let i=0; i < filesArr_.length; i++) {

//       //폼 데이터 생성
//       formData.append("files", filesArr_[i]);

//       // const p_URL = "http://127.0.0.1:8000/main";

//       // axios({
//       //   method: "post",
//       //   url: p_URL,
//       //   data: formData,
//       //   headers: {
//       //     "content-Type": "multipart/form-data",
//       //   },
//       //   params: {f_name: name_uuid}
//       // }).then(function (response) {
//       //   console.log(response)
//       // })
//     }
//     const p_URL = "http://127.0.0.1:8000/main";
//     axios({
//       method: "post",
//       url: p_URL,
//       data: formData,
//       headers: {
//         "content-Type": "multipart/form-data",
//       },
//       params: {f_name: name_uuid}
//     }).then(function (response) {
//       console.log(response)
//     })
//   }
  
//   function deleteFile(e) {
//     var num = e.currentTarget.getAttribute('id');
//     document.querySelector("#file" + num).remove();
//     delete filesArr[num];
//   }

//   function a(e) {
//     var maxFileCnt = 5;   // 첨부파일 최대 개수
//     var attFileCnt = document.querySelectorAll('.filebox').length;    // 기존 추가된 첨부파일 개수
//     var remainFileCnt = maxFileCnt - attFileCnt;    // 추가로 첨부가능한 개수
//     var curFileCnt = e.target.files.length;  // 현재 선택된 첨부파일 개수

//     // 첨부파일 개수 확인
//     if (curFileCnt > remainFileCnt) {
//         alert("첨부파일은 최대 " + maxFileCnt + "개 까지 첨부 가능합니다.");
//     }

//     for(var i = 0; i < Math.min(curFileCnt, remainFileCnt); i++) {
//       const file = e.target.files[i];
//       filesArr.push(file);
//       let d = document.createElement('div');
//       d.setAttribute('class',"filebox");
//       d.setAttribute('id', "file"+fileNo);
//       let p = document.createElement('p');
//       p.append(file.name);
//       let a = document.createElement('button');
//       a.setAttribute('class', "delete");
//       a.setAttribute('id', fileNo);
//       a.addEventListener('click', (e)=>{deleteFile(e)});
//       // let i_tag = document.createElement('i');
//       // i_tag.append('삭제');
//       // a.append(i_tag);
//       a.append("삭제");
//       d.append(p,a);
//       // document.querySelector('form').after(d);
//       document.querySelector(".file-list").append(d);
//       fileNo++;
//     }
//     document.querySelector("input[type=file]").value = '';
//   }
  
//   function imgprocessModule() {
//     const g_URL = "/process";
//     axios.get(g_URL).then(function (response) {
//       console.log(response);
//     })
//   }

//   function move_result() {
//     // window.location.href = "/result"
//     if (!filesArr) {
//       alert("파일을 첨부해주세요.");
//     }
//     else {
//       var i = 0;
//       var tf = true;
//       while (tf && i<filesArr.length) {
//         if (filesArr[i]) {
//           tf = false;
//         }
//         i++;
//       }
//       if (tf) {
//         alert("파일을 첨부해주세요.");
//       }
//       else {
//         if (document.getElementById("upload").style.display=="block") {
//           document.getElementById("upload").style.display="none";
//           document.getElementById("download").style.display="block";
//           document.getElementById("downbutton").href = "https://testpapergan.s3.ap-northeast-2.amazonaws.com/"+name_uuid;
//         }
//         else {
//           window.location.replace("/");
//         }
//       }
//     }
//   }

//   return (
//     <>
//       <div id="upload" style={{display: "block"}}>
//         <h1>File Upload Test</h1>
//         <form onSubmit={uploadModule} encType="multipart/form-data">
//           files<input type="file" name="files" onChange={a} multiple/>
//           <input type="submit" value="SUBMIT" />
//         </form>
//         <div className="file-list"></div>
//         <button onClick={move_result}>change</button>
//       </div>
//       <div id="download" style={{display: "none"}}>
//         <button onClick={move_result}>처음으로</button>
//         <a id="downbutton">다운로드</a>
//       </div>
//     </>
//   );
// }

// function Result() {
//   return (
//     <div>다운버튼화면</div>
//   )
// }

function ImageUpload() {
  var fileNo = 0;
  var filesArr = new Array();
  var name_uuid;

  const uploadModule = async (e) =>
  {
    e.preventDefault();
    var filesArr_ = filesArr.filter(function(l) {
      return l != null;
    });
    const formData = new FormData();
    name_uuid = uuid();
    formData.append("folder_name", name_uuid);
    for (let i=0; i < filesArr_.length; i++) {

      //폼 데이터 생성
      formData.append("files", filesArr_[i]);

      // const p_URL = "http://127.0.0.1:8000/main";

      // axios({
      //   method: "post",
      //   url: p_URL,
      //   data: formData,
      //   headers: {
      //     "content-Type": "multipart/form-data",
      //   },
      //   params: {f_name: name_uuid}
      // }).then(function (response) {
      //   console.log(response)
      // })
    }
    const p_URL = "http://127.0.0.1:8000/main";
    axios({
      method: "post",
      url: p_URL,
      data: formData,
      headers: {
        "content-Type": "multipart/form-data",
      },
      params: {f_name: name_uuid}
    }).then(function (response) {
      console.log(response)
    })
  }
  
  function deleteFile(e) {
    var num = e.currentTarget.getAttribute('id');
    document.querySelector("#file" + num).remove();
    delete filesArr[num];
  }

  function a(e) {
    var maxFileCnt = 5;   // 첨부파일 최대 개수
    var attFileCnt = document.querySelectorAll('.filebox').length;    // 기존 추가된 첨부파일 개수
    var remainFileCnt = maxFileCnt - attFileCnt;    // 추가로 첨부가능한 개수
    var curFileCnt = e.target.files.length;  // 현재 선택된 첨부파일 개수

    // 첨부파일 개수 확인
    if (curFileCnt > remainFileCnt) {
        alert("첨부파일은 최대 " + maxFileCnt + "개 까지 첨부 가능합니다.");
    }

    for(var i = 0; i < Math.min(curFileCnt, remainFileCnt); i++) {
      const file = e.target.files[i];
      filesArr.push(file);
      let d = document.createElement('div');
      d.setAttribute('class',"filebox");
      d.setAttribute('id', "file"+fileNo);
      let p = document.createElement('p');
      p.append(file.name);
      let a = document.createElement('button');
      a.setAttribute('class', "delete");
      a.setAttribute('id', fileNo);
      a.addEventListener('click', (e)=>{deleteFile(e)});
      // let i_tag = document.createElement('i');
      // i_tag.append('삭제');
      // a.append(i_tag);
      a.append("삭제");
      d.append(p,a);
      // document.querySelector('form').after(d);
      document.querySelector(".file-list").append(d);
      fileNo++;
    }
    document.querySelector("input[type=file]").value = '';
  }
  
  function imgprocessModule() {
    const g_URL = "/process";
    axios.get(g_URL).then(function (response) {
      console.log(response);
    })
  }

  function move_result() {
    // window.location.href = "/result"
    if (!filesArr) {
      alert("파일을 첨부해주세요.");
    }
    else {
      var i = 0;
      var tf = true;
      while (tf && i<filesArr.length) {
        if (filesArr[i]) {
          tf = false;
        }
        i++;
      }
      if (tf) {
        alert("파일을 첨부해주세요.");
      }
      else {
        if (document.getElementById("upload").style.display=="block") {
          document.getElementById("upload").style.display="none";
          document.getElementById("download").style.display="block";
          document.getElementById("downbutton").href = "https://testpapergan.s3.ap-northeast-2.amazonaws.com/"+name_uuid;
        }
        else {
          window.location.replace("/");
        }
      }
    }
  }

  return (
    <>
      <div id="upload" style={{display: "block"}}>
        <h1>File Upload Test</h1>
        <form onSubmit={uploadModule} encType="multipart/form-data">
          files<input type="file" name="files" onChange={a} multiple/>
          <input type="submit" value="SUBMIT" />
        </form>
        <div className="file-list"></div>
        <button onClick={move_result}>change</button>
      </div>
      <div id="download" style={{display: "none"}}>
        <button onClick={move_result}>처음으로</button>
        <a id="downbutton">다운로드</a>
      </div>
    </>
  );
  // return (
  //   <Routes>
  //     <Route path="/" element={<Main />} />
  //     <Route path="/result" element={<Result />} />
  //   </Routes>
  // )
}

export default ImageUpload;