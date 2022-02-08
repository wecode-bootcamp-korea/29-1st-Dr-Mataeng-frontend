import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import INPUT_LIST from './InputList';
import SignUpInput from './SignUpInput';
import './SignUp.scss';

function SignUp() {
  const [inputs, setInputs] = useState({
    name: '',
    id: '',
    pw: '',
    birth: '',
    phone: '',
    gender: '',
    email: '',
    emailSelect: '',
    recommend: '',
  });

  function handleChangeState(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  const navigate = useNavigate();

  const { name, id, pw, pwCheack, birth, phone, email } = inputs;

  const pwReg =
    /(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,}/g;
  const specialPattern = /[~!@#$%^&*()_+|<>?:{}]/;

  const isPwRegValid = pwReg.test(pw);
  const nameValid = name.length > 0;
  const isIdSpecilaPattern = !specialPattern.test(id);
  const idValid = id.length > 0;
  const pwCheackValid = pw === pwCheack;
  const birthValid = birth.length > 0;
  const isEmailSpecilaPattern = !specialPattern.test(email);
  const phoneValid = phone.length > 0;
  const emailValid = email.length > 0;

  const submitValid =
    isPwRegValid &&
    nameValid &&
    isIdSpecilaPattern &&
    idValid &&
    pwCheackValid &&
    birthValid &&
    phoneValid &&
    isEmailSpecilaPattern &&
    emailValid;

  const checkInputValid = () => {
    if (submitValid) {
      fetch('http://10.58.2.127:8000/users/user', {
        method: 'POST',
        body: JSON.stringify({
          name: inputs.name,
          username: inputs.id,
          password: inputs.pw,
          birthday: inputs.birth,
          phone_number: inputs.phone,
          gender: inputs.gender,
          email: inputs.email + inputs.emailSelect,
          recommender: inputs.recommend,
        }),
      })
        .then(response => response.json())
        .then(result =>
          result.message === 'SUCCESS'
            ? navigate('/main')
            : console.info('결과: ', result)
        );
    } else if (!submitValid) {
      alert('형식에 맞춰서 입력해주세요.');
    }
  };
  return (
    <div className="signUp">
      <div className="baseWrapper">
        <Link to="/Main" className="goBackBtn">
          <img
            alt="left arrow icon"
            className="leftArrowIcon"
            src="/images/search/icon-left-arrow.png"
          />
        </Link>
        <div className="signUpWrap">
          <h1>환영합니다.</h1>
          <h4>지금 바로 다양한 해택을 만나보세요.</h4>
          <form>
            {INPUT_LIST.map(list => {
              return (
                <SignUpInput
                  key={list.id}
                  className={list.className}
                  name={list.name}
                  type={list.type}
                  placeholder={list.placeholder}
                  change={handleChangeState}
                />
              );
            })}

            <div className="gender">
              <label>
                성별: 여자
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChangeState}
                />
              </label>
              <label>
                남자
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChangeState}
                />
              </label>
            </div>
            <div>
              <input
                className="email"
                name="email"
                type="text"
                placeholder="이메일"
                onChange={handleChangeState}
              />
              <span>@</span>
              <select
                className="emailSelect"
                name="emailSelect"
                onChange={handleChangeState}
              >
                <option name="emailSelect" value="@gmail.com">
                  gmail.com
                </option>
                <option name="emailSelect" value="@naver.com">
                  naver.com
                </option>
              </select>
            </div>

            <div>
              <input
                className="recommend"
                name="recommend"
                type="text"
                placeholder="추천인(선택)"
                onChange={handleChangeState}
              />
              <button className="recommendBt">확인</button>
            </div>
            <h5>신규 가입 시 - 마일리지 10,000원 추가 지급</h5>
            <h5>추천인 ID 입력 시 - 마일리지 5,000원 추가 지급</h5>
          </form>
          <button className="signUpBt" onClick={checkInputValid}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
