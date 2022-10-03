import React, {useState} from "react";
import axios from "axios";
import "./Main.css";
import uuid from 'react-uuid';
import Loading from "./Loading";


function ImageUpload() {
  var fileNo = 0;
  var filesArr = new Array();
  var name_uuid;
  const [loading, setLoading] = useState(false);

  const uploadModule = async (e) =>
  {
    if (!filesArr) {
      alert("파일을 첨부해주세요.");
      return 0;
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
        return 0;
      }
    }
    setLoading(true);
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
    }
    const p_URL = "http://121.200.112.145:8000/main";
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
      setLoading(false);
      move_result();
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
      a.append("삭제");
      d.append(p,a);
      document.querySelector(".file-list").append(d);
      fileNo++;
    }
    document.querySelector("input[type=file]").value = '';
  }
  

  function move_result() {
    if (document.getElementById("upload").style.display=="none") {
      window.location.replace("/");
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

  return (
    <body>
      {loading ? <Loading /> : null}
      <div id="upload" style={{display: "block"}}>
        <header className="bg-dark py-5">
          <div className="container px-4 px-lg-5">
            <div className="text-center text-white">
              <h1 className="display-4 fw-bolder">시험지 Cleaner</h1>
            </div>
          </div>
        </header>
        <section className="py-5">
          <div className="px-4 px-lg-5 mt-5">
            <div className="justify-content-center">
              <div className="f-m">
                <div>
                  <label className="btn-custom mt-auto" for="input-file">업로드</label>
                  <div className="file-list"></div>
                </div>
                <form className="f" onSubmit={uploadModule} encType="multipart/form-data">
                  <input type="file" id="input-file" name="files" onChange={a} style={{display:"none"}} multiple/>
                  <input className="btn-custom fs-200" type="submit" value="변환하기" />
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="download" style={{display: "none"}}>
        <div className="f-c">
          <a className="btn-custom fs-400" id="downbutton">다운로드</a>
          <button className="btn btn-outline-dark" onClick={move_result}>처음으로</button>
        </div>
      </div>
    </body>
  );
}

export default ImageUpload;