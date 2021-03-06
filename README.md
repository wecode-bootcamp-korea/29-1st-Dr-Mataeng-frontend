# Dr-Mataeng 1차 프로젝트


### Introduction

- 기간 : 2022/1/24 ~ 2022/2/10
- 구성 : Frontend 3명, Backend 2명


### Technologies

- Front-End : HTML, React.js, SASS
- Back-End : Python, Django, Bcrypt, PyJWT
- Common : AWS, RESTful API
- 협업 및 일정관리 : Git, GitHub, Slack, Trello, Notion


### Demo Video & Github
- <a href="https://youtu.be/GlK28FnB0Ho" target='_blank'>Demo Video Link</a>
- <a href="https://github.com/wecode-bootcamp-korea/29-1st-Dr-Mataeng-frontend" target='_blank'>Frontend Github Link</a> / <a href="https://github.com/wecode-bootcamp-korea/29-1st-Dr-Mataeng-backend
" target='_blank'>Backend Github Link</a>

### Responsibilities (Front-end)

#### 1) 유재민

- Header & Nav & Footer : 토글 버튼 클릭 시 네비게이션 노출, 검색어 입력 조건에 따른  페이지 이동 및 데이터 전달 기능
- Search Page : 검색 API를 통한 제품 검색 기능
- User Page : 주문 목록 조건부렌더링 기능 및 토글 기능
- Product Detail Page : 스크롤 위치에 따른 주문 컨텐츠 고정 기능, 수량 조절과 재고에 따른 주문 수량 제한 기능, 결제버튼 클릭 시 해당 제품 데이터 전달 및 페이지 이동 기능
- Payment Page : 주문 목록에 따른 동적 쿼리스트링 전달, 주문 목록 합계 산출 기능

#### 2) 오수민

- Main Page : 슬라이드 기능 구현
- Login Page : 로그인 유효성 검사 조건에 따른 에러메시지 노출, 로그인 성공 시 로컬스토리지에 User Id & JWT Token 저장 및 메인페이지 이동, 로그아웃 시 JWT Token 제거 기능
- Cart Page : 주문 목록 총 합계 금액 기능, 주문 목록 없을 시 조건부렌더링을 통한 페이지 렌더링, 주문 목록에 따른 동적 쿼리스트링 전달

#### 3) 장예지

- Main Page : 레이아웃 마크업
- Sign-in Page : 정규표현식과 테스트 메소드를 이용한 유효성 검사 및 조건에 따른 에러메시지 노출, 유효서 검사 통과 시 데이터 전달 및 로그인 페이지 이동, 스크롤 위치에 따른 탑버튼 노출
- Product List Page : 상세 페이지 이동을 위한 동적 라우팅, 제품 필터링 기능, 쿼리스트링 전달을 통한 페이지네이션 구현, 토글 버튼 클릭 시 필터 노출

### Project Review
#### 1) 좋았던 점
- 소통이 잘 되었다. 팀원들과의 호흡이 잘 맞았기 때문에 서로간의 지식 공유가 활발히 이루어지며 블로커 발생 시 빠르게 해결할 수 있었다.
- 프로젝트 몰입도가 높았다. 각각 스프린트 기간을 지키기 위해 절대적인 시간 투자를 하며 프로젝트에 몰입할 수 있었던 것 같다.
- 스케줄 관리 부분에서 계획했던 사용자가 구매하기 위해 필요한 한 싸이클을 구현했기 때문에 스프린트 기간이 잘 지켜진 것 같다.

#### 2) 아쉬운 점
- 포스트맨을 프론트/백엔드가 함께 사용하였으면 조금 더 빠른 작업이 가능했을 것 같다.
- 사이트의 성능 테스트가 이루어지지 않아 아쉬웠다.
- 스프린트 기간 중 일일 화상 회의를 통해 더욱 활발히 소통했으면 좋았을 것 같다. 또한 일일 화상 회의를 진행하게 된다면 코드 리뷰를 통해 지식 공유 및 작업 속도 향상에도 도움이 될 것 같다.
- 스프린트 기간이 잘 지켜졌지만 이보다 빠른 작업이 필요한 것 같다. 계획했던 필수 사항 구현은 완료했지만 다른 추가 기능들을 구현하기 위한 시간이 부족했다.


### Reference
-----
- 이 프로젝트는 닥터마틴 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.

