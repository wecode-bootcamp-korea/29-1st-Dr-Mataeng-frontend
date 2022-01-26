import React from 'react';
import inputList from './InputList';
import SignUpInput from './SignUpInput';

function SignUp() {
  return (
    <div className="signUp">
      <div className="baseWrapper">
        <div className="signUpWrap">
          <h1>환영합니다.</h1>
          <h4>지금 바로 다양한 해택을 만나보세요.</h4>
          <form>
            {inputList.map(list => {
              return (
                <SignUpInput
                  key={list.id}
                  name={list.name}
                  type={list.type}
                  placeholder={list.placeholder}
                />
              );
            })}

            <div className="gender">
              <label>
                성별: 여자
                <input type="radio" name="woman" />
              </label>
              <label>
                남자
                <input type="radio" name="man" />
              </label>
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
