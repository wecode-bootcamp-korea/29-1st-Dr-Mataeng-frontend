import React from 'react';

const Login = () => {
  return (
    <>
      <div className="loginHeaderWapper">
        <div className="loginHead">
          <div className="loginHeadTop">
            <img
              className="loginHeadTop backButton"
              src="images/backBotton.png"
              alt="뒤로가기"
            ></img>
          </div>
          <div className="loginHeadBottom">
            <h1 className="loginHeadBottom title">로그인</h1>
          </div>
        </div>
      </div>
      <div className="loginBodyWapper">
        <div className="loginBodyWapper loginWapper">
          <header className="loginBodyWapper loginWapper header">
            <h2 className="loginBodyWapper loginWapper header title">
              <strong>어서오세요</strong>
              <span>닥터마틴에 오신걸 환영합니다.</span>
            </h2>
          </header>
          <div className="loginBody">
            <div className="loginBody loginColumn">
              <h3 className="formTitle">로그인</h3>
              <from className="loginFrom">
                <div className="loginInput">
                  <label>아이디</label>
                  <div className="inputContainer">
                    <input name="userid" type="text"></input>
                  </div>
                </div>
                <div className="loginInput">
                  <label>비밀번호</label>
                  <div className="inputContainer">
                    <input name="userpw" type="password"></input>
                  </div>
                </div>
              </from>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
