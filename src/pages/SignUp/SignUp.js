import React, { useState } from 'react';

import './SignUp.scss';

function SignUp() {
  return (
    <div className="signUp">
      <div className="baseWrapper">
        <div className="signUpWrap">
          <h1>환영합니다.</h1>
          <h4>지금 바로 다양한 해택을 만나보세요.</h4>
          <form>
            <div>
              <input className="nameInput" type="text" placeholder="이름" />
            </div>
            <div>
              <input className="idInput" type="text" placeholder="아이디" />
            </div>
            <div>
              <input
                className="pwInput"
                type="password"
                placeholder="비밀번호"
              />
            </div>
            <div>
              <input
                className="pwValidInput"
                type="password"
                placeholder="비밀번호확인"
              />
            </div>
            <div>
              <input
                className="birthInput"
                type="text"
                placeholder="생년월일"
              />
            </div>
            <div className="gender">
              <label>성별</label>
              <input type="radio" id="woman" />
              <label for="woman">여자</label>
              <input type="radio" id="man" />
              <label for="man">남자</label>
            </div>
            <div>
              <input className="email" type="text" placeholder="이메일" />
              <span>@</span>
              <select className="emailSelect">
                <option value="gmial">gmail.com</option>
                <option value="naver">naver.com</option>
              </select>
            </div>
            <div>
              <input className="phoneInput" type="text" placeholder="휴대폰" />
            </div>
            <div>
              <input
                className="recommend"
                type="text"
                placeholder="추천인(선택)"
              />
              <button className="recommendBt">확인</button>
            </div>
            <h5>신규 가입 시 -마일리지 10,000원 추가 지급</h5>
            <h5>추천인 ID 입력 시 - 마일리지 5,000원 추가 지급</h5>
          </form>
          <button className="signUpBt">회원가입</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
