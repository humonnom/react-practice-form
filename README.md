# ruth-form
🌱 RUTH - React Practice

* form 배포 [https://react-practice-form.vercel.app/](https://react-practice-form.vercel.app/)

# 프로젝트 소개
- RUTH: React Under The Hood 스터디
- Project 00: FORM 만들기

## Project00 구현사항

- [ ]  회원가입 Dummy API 찾아보기
- 이메일(필수), 전화번호(필수), 비밀번호(필수), 비밀번호 확인(필수), 유저네임(필수), 추천인 유저네임(선택), 약관동의 2개(필수), 마케팅동의 1개(선택)
- 동의는 모두 동의 기능이 있어야 됨
- 페이지네이션: 회원가입하기 → Form → 가입 완료 메시지
- 이메일 validation (format)
    - 형식이 맞지 않음
    - 중복 확인
- 전화번호 validation (format)
    - 형식이 맞지 않음 (숫자 2or3, 4, 4)
    - 중복 확인
- 추천인 유저네임
    - 유효한지 확인
- 비밀번호
    - [ ]  비밀번호 형식(min8, 영대소문자, 숫자 필수) - 구글 참고 @Sarang Choi 2022년 5월 27일 오전 9:00
    - 비밀번호 확인이 일치한지
- 회원가입 축하 메시지(`유저네임` 님)

<!--
# 실행 화면(추후 업데이트 예정)

# 실행 방법(추후 업데이트 예정)
-->

## 신경쓴 것
* 이전 프로젝트에서 짰던 코드를 참고하여 리팩토링 하였음

### useInput의 복잡함 줄이기

* 이전 프로젝트에서 useInput이 많은 역할을 맡아 복잡해진 경험이 있음
   - validation 체크
   - state 메세지 완성

* 복잡하기 때문에 생기는 문제
   - 코드가 길어짐 -> 리팩토링이 어려움
   - useInput hook과 Join page의 결합도가 높아짐(독립적으로 사용 불가)
   - 로직이 복잡해 디버깅이 어려움

* Solution: 따라서 이번에는 useInput을 가볍게 만들고 과도하게 집중되었던 기능들을 분리하려고 함
   - 입력값의 상태와 서버에 보낼 최종 형태 데이터:Join page가 관리
   - useInput은 각 입력창과 현재 입력값만 관리
   - state 메세지의 출력은 개별 컴포넌트가 따로 관리

### useReducer 사용하기
* 이전 프로젝트에서 useState를 많이 사용해서 가독성이 좋지 않았음

```js
  const [field, setField] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [agreement, setAgreement] = useState(false);
  const [certModal, setCertModal] = useState(false);
  const [termModal, setTermModal] = useState(false);
  const [certState, setCertState] = useState(false);

```
* Solution: 따라서 이번에는 useReducer를 사용해봄 

### symbol을 사용하기
* type 관리에 symbol과 freeze를 사용함
* enum처럼 동작함
* TS에서는 enum을 쓸 수 있도록 구현이 되어있지만 직접 구현한 것을 사용한 이유
   1. symbol과 freeze를 사용한 enum을 구현/사용하며 공부할 목적
   2. 내부적으로 즉시실행함수를 사용하므로 트리쉐이킹 이슈가 있기 때문에  

# 시스템 구성도(추후 업데이트 예정)
## 사용한 기술과 사용한 이유
   - 언어/ Typescript
   - 라이브러리/`React.js`
   - 배포/ Vercel(추후 업데이트 예정)
   - 툴/ Vite
<!--
# 저작권 및 라이선스(추후 업데이트 예정)
# 버그 및 기능 요청(추후 업데이트 예정)
-->
# 기여자 정보
- [humonnom](https://github.com/humonnom)
