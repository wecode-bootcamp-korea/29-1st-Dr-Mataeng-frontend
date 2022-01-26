import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login/Login.scss';

const Login = () => {
  const [id, setId] = useState(' ');
  const [pw, setPw] = useState(' ');

  const handleIdInput = event => {
    setId(event.target.value);
  };

  const handlePwInput = event => {
    setPw(event.target.value);
  };

  const idValidation = () => {
    return id.length > 0;
  };

  const pwValidation = () => {
    return pw.length > 0;
  };

  const navigate = useNavigate();
  const goToMain = event => {
    navigate('/Main');
  };

  return (
    <>
      <div className="loginHeaderWrapper">
        <div className="loginHead">
          <div className="loginHeadTop">
            <button className="loginHeadTop backButton" onClick={goToMain}>
              <img src="images/backBotton.png" alt="뒤로가기" />
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
              <form className="loginFrom">
                <div className="loginInput">
                  <div className={idValidation() ? 'container' : 'redBorder'}>
                    <input
                      name="userid"
                      type="text"
                      placeholder={
                        idValidation() ? '아이디' : '아이디는 필수 사항입니다.'
                      }
                      onChange={handleIdInput}
                      onInput={idValidation}
                    />
                  </div>
                </div>
                <div className="loginInput">
                  <div className={pwValidation() ? 'container' : 'redBorder'}>
                    <input
                      name="userpw"
                      type="password"
                      placeholder={
                        pwValidation()
                          ? '비밀번호'
                          : '비밀번호는 필수 사항입니다.'
                      }
                      onChange={handlePwInput}
                      onInput={pwValidation}
                    />
                  </div>
                </div>
              </form>
              <div className="utilContainer">
                <div className="saveId">
                  <input type="checkbox" />
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
                <button onClick={goToMain}>
                  <span>회원가입</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
