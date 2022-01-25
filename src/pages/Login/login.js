import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <>
      <div className="loginHeaderWrapper">
        <div className="loginHead">
          <div className="loginHeadTop">
            <button className="loginHeadTop backButton">
              <img src="images/backBotton.png" alt="뒤로가기"></img>
            </button>
          </div>
          <div className="loginHeadBottom">
            <h1 className="loginHeadBottom title">로그인</h1>
          </div>
        </div>
      </div>
      <div className="loginBodyWrapper">
        <div className="loginBodyWrapper loginWrapper">
          <header className="loginBodyWrapper loginWrapper header">
            <h2 className="loginBodyWrapper loginWrapper header title">
              <strong>어서오세요</strong>
              <span>닥터마틴에 오신걸 환영합니다.</span>
            </h2>
          </header>
          <div className="loginBody">
            <div className="loginBody loginColumn">
              <h3 className="formTitle">로그인</h3>
              <from className="loginFrom">
                <div className="loginInput">
                  <div className="loginInput container">
                    <input
                      name="userid"
                      type="text"
                      placeholder="아이디"
                    ></input>
                  </div>
                </div>
                <div className="loginInput">
                  <div className="loginInput container">
                    <input
                      name="userpw"
                      type="password"
                      placeholder="비밀번호"
                    ></input>
                  </div>
                </div>
              </from>
              <div className="utilContainer">
                <div className="saveId">
                  <input type="checkbox"></input>
                  <span>아이디 자동저장</span>
                </div>
                <div className="findId">
                  <span>아이디/비밀번호 찾기</span>
                </div>
              </div>
              <div className="loginButton">
                <button>로그인</button>
              </div>
              <div className="signUpButton">
                <span>회원가입</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
