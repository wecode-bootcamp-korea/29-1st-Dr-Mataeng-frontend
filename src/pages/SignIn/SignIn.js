import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../SignIn/SignIn.scss';
import END_POINT from '../../config';

const SignIn = () => {
  const [loginInput, setLoginInput] = useState({
    id: '',
    pw: '',
  });

  const { id, pw } = loginInput;
  const [check, setCheck] = useState();

  const handleInput = event => {
    const { name, value } = event.target;
    const nextInput = {
      ...loginInput,
      [name]: value,
    };
    setLoginInput(nextInput);
  };

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main');
  };

  const goToSignUp = () => {
    navigate('/signUp');
  };

  const reset = () => {
    if (check) {
      setLoginInput({
        id: loginInput.id,
        pw: '',
      });
    } else {
      setLoginInput({
        id: '',
        pw: '',
      });
    }
  };

  const isCheck = event => {
    setCheck(event.target.checked);
  };

  const loginValidation = () => {
    fetch(END_POINT.signIn, {
      method: 'POST',
      body: JSON.stringify({
        username: loginInput.id,
        password: loginInput.pw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'INVALID_USER(PASSWORD)') {
          alert('비밀번호가 틀렸습니다.');
          reset();
        } else if (result.message === 'INVALID_USER(USERNAME)') {
          alert('존재하지 않는 아이디입니다.');
          reset();
        } else {
          goToMain();
          localStorage.setItem('id', result.username);
          localStorage.setItem('token', result.access_token);
        }
      });
  };

  return (
    <>
      <div className="loginHeaderWrapper">
        <div className="loginHead">
          <div className="loginHeadTop">
            <button className="loginHeadTop backButton" onClick={goToMain}>
              <img
                src="/images/productList/icon-left-arrow.png"
                alt="뒤로가기"
              />
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
                  <div className="container">
                    <input
                      name="id"
                      value={id}
                      type="text"
                      placeholder="아이디"
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div className="loginInput">
                  <div className="container">
                    <input
                      name="pw"
                      value={pw}
                      type="password"
                      placeholder="비밀번호"
                      onChange={handleInput}
                    />
                  </div>
                </div>
              </form>
              <div className="utilContainer">
                <div className="saveId">
                  <input type="checkbox" onChange={isCheck} />
                  아이디 자동저장
                </div>
                <div className="findId">
                  <span>아이디/비밀번호 찾기</span>
                </div>
              </div>
              <div className="loginButton">
                <button onClick={loginValidation}>로그인</button>
              </div>
              <div className="signUpButton">
                <button onClick={goToSignUp}>
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
export default SignIn;
