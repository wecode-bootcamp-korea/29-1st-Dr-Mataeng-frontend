import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import INPUT_LIST from './InputList';
import SignUpInput from './SignUpInput';
import TopBt from './TopBt';
import './SignUp.scss';
import END_POINT from '../../config';

function SignUp() {
  const [inputs, setInputs] = useState({
    name: '',
    id: '',
    pw: '',
    birth: '',
    phone: '',
    gender: '',
    email: '',
    emailSelect: '@gmail.com',
    recommend: '',
  });

  function handleChangeState({ target }) {
    const { name, value } = target;
    setInputs({ ...inputs, [name]: value });
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
      fetch(END_POINT.signUp, {
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
            ? navigate('/login')
            : console.info('??????: ', result)
        );
    } else if (!submitValid) {
      alert('????????? ????????? ??????????????????.');
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
          <h1>???????????????.</h1>
          <h4>?????? ?????? ????????? ????????? ???????????????.</h4>
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
                ??????: ??????
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChangeState}
                />
              </label>
              <label>
                ??????
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
                placeholder="?????????"
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
                placeholder="?????????(??????)"
                onChange={handleChangeState}
              />
              <button className="recommendBt">??????</button>
            </div>
            <h5>?????? ?????? ??? - ???????????? 10,000??? ?????? ??????</h5>
            <h5>????????? ID ?????? ??? - ???????????? 5,000??? ?????? ??????</h5>
          </form>
          <button className="signUpBt" onClick={checkInputValid}>
            ????????????
          </button>
        </div>
        <TopBt />
      </div>
    </div>
  );
}

export default SignUp;
