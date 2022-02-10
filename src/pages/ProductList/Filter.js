import React, { useState } from 'react';

import './Filter.scss';

function Filter() {
  return (
    <div className="filter">
      <div className="filterWrap">
        <form className="filterInside">
          <ul className="filterSort">
            <label for="sort">정렬</label>
            <li className="filterInputItem" name="sort">
              인기순
              <input name="sort" type="radio" value="인기순" />
            </li>
            <li className="filterInputItem" name="sort">
              신상품 순<input name="sort" type="radio" value="신상품순" />
            </li>
            <li className="filterInputItem" name="sort">
              높은 가격 순
              <input name="sort" type="radio" value="높은 가격 순" />
            </li>
            <li className="filterInputItem" name="sort">
              낮은 가격 순
              <input name="sort" type="radio" value="낮은 가격 순" />
            </li>
          </ul>
          <ul className="filterSort">
            <label for="size">사이즈</label>
            <li className="filterInputItem" name="size">
              220
              <input name="size" type="checkbox" value="220" />
            </li>
            <li className="filterInputItem" name="size">
              230
              <input name="size" type="checkbox" value="230" />
            </li>
            <li className="filterInputItem" name="size">
              240
              <input name="size" type="checkbox" value="240" />
            </li>
            <li className="filterInputItem" name="size">
              250
              <input name="size" type="checkbox" value="250" />
            </li>
            <li className="filterInputItem" name="size">
              260
              <input name="size" type="checkbox" value="260" />
            </li>
            <li className="filterInputItem" name="size">
              270
              <input name="size" type="checkbox" value="270" />
            </li>
            <li className="filterInputItem" name="size">
              280
              <input name="size" type="checkbox" value="280" />
            </li>
            <li className="filterInputItem" name="size">
              290
              <input name="size" type="checkbox" value="290" />
            </li>
          </ul>
          <ul className="filterSort">
            <label name="price">가격</label>
          </ul>
          <div>
            <ul className="filterSort">
              <label for="color">색상</label>
              <li>
                블랙
                <input
                  className="black"
                  name="color"
                  type="checkbox"
                  value="블랙"
                />
              </li>
              <li>
                화이트
                <input
                  className="black"
                  name="color"
                  type="checkbox"
                  value="화이트"
                />
              </li>
              <li>
                버건디
                <input
                  className="black"
                  name="color"
                  type="checkbox"
                  value="버건디"
                />
              </li>
              <li>
                브라운
                <input
                  className="black"
                  name="color"
                  type="checkbox"
                  value="브라운"
                />
              </li>
              <li>
                다크브라운
                <input
                  className="black"
                  name="color"
                  type="checkbox"
                  value="다크브라운"
                />
              </li>
              <li>
                네이비
                <input
                  className="black"
                  name="color"
                  type="checkbox"
                  value="네이비"
                />
              </li>
              <li>
                옐로우
                <input
                  className="black"
                  name="color"
                  type="checkbox"
                  value="엘로우"
                />
              </li>
              <li>
                그린
                <input
                  className="black"
                  name="color"
                  type="checkbox"
                  value="그린"
                />
              </li>
            </ul>
          </div>
          <div className="submitBt">
            <button className="initial">초기화</button>
            <button className="apply">확인</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Filter;
