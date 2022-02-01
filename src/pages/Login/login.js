import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login/Login.scss';
import Footer from '../../components/footer/footer';

const Login = () => {
  const [loginInput, setLoginInput] = useState({
    id: '',
    pw: '',
  });
  const [checkbox, setCheckbox] = useState(false);
  const handleCheckbox = event => {
    setCheckbox(event.target.checked);
  };

  const { id, pw } = loginInput;

  const handleInput = event => {
    const { name, value } = event.target;
    const nextInput = {
      ...loginInput,
      [name]: value,
    };
    setLoginInput(nextInput);
  };

  const idValidation = () => {
    return id.length > 0;
  };

  const pwValidation = () => {
    return pw.length > 0;
  };

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/Main');
  };

  const inputReset = () => {
    console.log('체크됐냐?' + checkbox);
    if (checkbox) {
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

    console.log(loginInput);
  };

  const loginValidation = () => {
    inputReset();
    // fetch('http://10.58.2.127:8000/users/signin', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     username: loginInput.id,
    //     password: loginInput.pw,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     if (result.message === 'INVALID_USER(PASSWORD)') {
    //       alert('비밀번호가 틀렸습니다.');
    //       inputReset();
    //     } else if (result.message === 'INVALID_USER(USERNAME)') {
    //       alert('존재하지 않는 아이디입니다.');
    //       inputReset();
    //     } else {
    //       inputReset();
    //       goToMain();
    //     }
    //   });
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
                      name="id"
                      valus={id}
                      type="text"
                      placeholder={
                        idValidation() ? '아이디' : '아이디는 필수 사항입니다.'
                      }
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div className="loginInput">
                  <div className={pwValidation() ? 'container' : 'redBorder'}>
                    <input
                      name="pw"
                      value={pw}
                      type="password"
                      placeholder={
                        pwValidation()
                          ? '비밀번호'
                          : '비밀번호는 필수 사항입니다.'
                      }
                      onChange={handleInput}
                    />
                  </div>
                </div>
              </form>
              <div className="utilContainer">
                <div className="saveId">
                  <input type="checkbox" onClick={handleCheckbox} />
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
                <button onClick={goToMain}>
                  <span>회원가입</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Login;
