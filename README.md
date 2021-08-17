<br />
<p align='middle'>
  <a href='https://solarconnect.netlify.app/'>
    <img src='https://www.solarconnect.kr/assets/img/common/sc-logo.svg' width="300px;" alt="LiveMD" />
  </a>
</p>
<h2 align='middle'><a href='https://solarconnect.netlify.app/'>solarconnect.netlify.app</a></h2>



## 📌 프젝젝트 소개
<p>
<img src="https://img.shields.io/github/languages/top/six-sense/4_solaConnect_team2?color=yellow&logo=Javascript"> </img>
<img src="https://img.shields.io/github/repo-size/six-sense/4_solaConnect_team2?color=%23&logo=Github"> </img>

</p>



### 📋 프리온보딩 코스 솔라커넥트 기업과제
> 숫자를 문자열로 입력받고 정렬 기능을 가진 서비스

<br/>

<details>
    <summary><STRONG>
    📚 과제 요구사항 보기
    <STRONG></summary>

1. 타이머

- [1, 6. 타이머]는 재활용이 가능한 Component로 구성합니다.
- [1. 타이머]는 “ko-KR” 지역시간 표기법으로 나타냅니다. (예> 2021년 7월 20일 화요일)
- [6. 타이머]는 “en-US” 지역시간 표기법으로 나타냅니다. (예> Tuesday July 20, 2021)
- 한국 표준시를 기준으로 나타냅니다.

2. 입력

- 사용자의 입력을 받습니다.
- 입력 데이터의 형식은 “숫자,숫자,숫자…” 입니다. (예> 1,2,3,4)
- 잘못된 형식의 입력데이터는 예외처리하여 사용합니다.

3. 시작

- 사용자가 버튼을 누르면 소팅이 시작됩니다.
- [4. 결과 필드]에 바로 노출 되고 3초 후에 [5. 결과 필드]에 결과가 노출 됩니다.

4. 결과

- 결과 데이터의 형식은 “숫자, 숫자, 숫자…” 입니다. (예> 1, 2, 3, 4)
- [4. 결과 필드]에서는 오름차순 결과를 나타냅니다.
- [5. 결과 필드]에서는 내림차순 결과를 나타냅니다.
- 알고리즘은 소팅알고리즘을 사용하지 않고, 본인이 구현할 수 있는 정렬 방법으로 직접 구현합니다.

5. 기타 조건

- ReactJS로 구현합니다.
- 과제를 위한 추가적인 패키지 설치는 자유입니다.
- 레이아웃은 그림을 참고하되, UI 및 UX는 작성자 편의에 맞게 구현합니다.
- 상기 조건을 제외한 모든 부분들은 작성자 편의에 맞게 구현합니다.
</details>

<br/>

## 구현 목록

`타이머`

  - 현재 한국시간, 미국시간을 출력하는 기능

`입력`

- 숫자(자연수)와 콤마(,)를 제외한 문자는 자동 필터링 기능


`정렬`

- minHeap, maxHeap을 이용해 힙 정렬 알고리즘 구현
- 시작 버튼을 누르면 오름차순이 출력되고, 3초 후 내림차순 출력

<br/>

## 👨‍💻 실행 방법

### 설치

`npm install`

### 실행

`npm start`

<br />
      
## 🌎 참고한 사이트
      
> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate
