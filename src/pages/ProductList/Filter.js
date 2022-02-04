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
              <input name="sort" type="radio" />
            </li>
            <li className="filterInputItem" name="sort">
              신상품 순<input name="sort" type="radio" />
            </li>
            <li className="filterInputItem" name="sort">
              높은가격 순<input name="sort" type="radio" />
            </li>
            <li className="filterInputItem" name="sort">
              낮은가격 순<input name="sort" type="radio" />
            </li>
          </ul>
          <ul className="filterSort">
            <label for="size">사이즈</label>
            <li className="filterInputItem" name="size">
              220
              <input type="checkbox" value="220" />
            </li>
            <li className="filterInputItem" name="size">
              230
              <input type="checkbox" />
            </li>
            <li className="filterInputItem" name="size">
              240
              <input type="checkbox" />
            </li>
            <li className="filterInputItem" name="size">
              250
              <input type="checkbox" />
            </li>
            <li className="filterInputItem" name="size">
              260
              <input type="checkbox" />
            </li>
            <li className="filterInputItem" name="size">
              270
              <input type="checkbox" />
            </li>
            <li className="filterInputItem" name="size">
              280
              <input type="checkbox" />
            </li>
            <li className="filterInputItem" name="size">
              290
              <input type="checkbox" />
            </li>
          </ul>
          <ul className="filterSort">
            <label name="price">가격</label>
            <li>
              <input
                className="filterInputItemRange"
                type="range"
                name="price"
                min="10000"
                max="500000"
              />
            </li>
          </ul>
          <div>
            <ul className="filterSort">
              <label for="color">색상</label>
              <li>
                블랙
                <input className="black" name="color" type="checkbox" />
              </li>
              <li>
                화이트
                <input className="black" name="color" type="checkbox" />
              </li>
              <li>
                버건디
                <input className="black" name="color" type="checkbox" />
              </li>
              <li>
                브라운
                <input className="black" name="color" type="checkbox" />
              </li>
              <li>
                다크브라운
                <input className="black" name="color" type="checkbox" />
              </li>
              <li>
                네이비
                <input className="black" name="color" type="checkbox" />
              </li>
              <li>
                옐로우
                <input className="black" name="color" type="checkbox" />
              </li>
              <li>
                그린
                <input className="black" name="color" type="checkbox" />
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
