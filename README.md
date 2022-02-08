<h1>원티드 프리온보딩 코스 2주차 기업과제<br />
파트너스 대시보드 📈</h1>

## 🚀 배포

🔗 **과제물**(netlify): <br>
🔗 **Storybook**: https://develop--620233129c4ef3003ab91866.chromatic.com/

## 🧑‍🤝‍🧑 팀 소개

### 저희는 Team **박이최고** 입니다.

팀원들의 성을 차례로 읽어보세요!

| | 팀원 | 역할 | 
|------------------------------------------------------------ |----------------------------------------------------- |--------------------- | 
| ![](https://avatars.githubusercontent.com/u/68905615?s=25) | 고동현 [@brad-go](https://github.com/brad-go) | (팀장) 드롭다운 메뉴, 토글   |
| ![](https://avatars.githubusercontent.com/u/71081893?s=25) | 이소진 [@krungy](https://github.com/krungy) | Button들, 요청서 카드 구현 | 
| ![](https://avatars.githubusercontent.com/u/57004991?s=25) | 최효정 [@hyo-choi](https://github.com/hyo-choi) | Navbar 반응형, 기본 화면 구현 | 

<br>

## 🪄 프로젝트 실행 방법

1. git clone하여 프로젝트를 내려받습니다.
   ```bash
   git clone https://github.com/OnBoarding-Park-is-best/week2-partners-dashboard.git
   ```
2. 아래 커맨드로 패키지를 설치합니다.
   ```bash
   yarn install
   ```
3. 아래 커맨드로 mock server를 구동합니다.
   ```bash
   yarn mock
   ```
4. 아래 커맨드로 프로젝트를 실행합니다.
   ```bash
   yarn start
   ```

<br>

## 🧰 기술 스택 및 구현 사항

![](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white) ![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=Storybook&logoColor=white)

## 📚 전체 구현사항

- 고객의 선택에 맞는 요청서를 보여주는 페이지를 구현합니다.

### 요구사항

#### 견적 요청 카드

- [x] : API 데이터를 받아와서 데이터를 통해 화면에 렌더링
  - [x] : 프로젝트명, 요청한 고객사, 고객의 희망 납기일, 요청한 제품 총 수량
  - [x] : 가공방식은 타입 지정을 통해 선택
- [x] : 요청 내역 버튼, 채팅하기 버튼
- [x] : 카드 전체 영역에 hover 시에 보더 스타일

#### 필터링

- [x] : 가공 방식 필터가 선택되면, 해당 방식 조건이 포함된 카드를 모두 노출
- [x] : 재료 필터가 선택되면, 해당 재료 조건이 포함된 카드를 모두 노출
- [x] : 가공 방식과 재료 필터가 둘 다 선택되면, 두 조건의 교집합 노출
- [x] : 선택 박스 hover 시 보더 스타일
- [x] : 선택 박스 hover 시 option 목록 노출
- [x] : option 선택 시 선택 박스와 옵션의 체크박스 스타일 변경 및 개수 표시
- [x] : 필터링 리셋 버튼 클릭 시 필터 초기화

#### 토글

- [x] : 클릭 시 스타일 변경 및 활성화 표시
- [x] : 토글 활성화 시 상담중인 카드만 노출

#### 빈화면

- [x] : 조건에 맞는 카드가 없을 시 기본 화면 노출

#### 모바일

- [x] : 반응형 Navbar
- [x] : 햄버거 버튼 클릭 시 메뉴 화면 노출

### 팀원별 분담한 기능

### :checkered_flag:\_고동현

- **Select**, **Option** 컴포넌트 구현
- **Toggle** 컴포넌트 구현

### :bus:\_최효정

- 반응형 **NavBar** 구현
- 조건에 맞는 견적 요청이 없으면 보이는 **Default Container** 구현
- 조건에 맞는 카드를 화면에 보이는 **필터링 로직 구현**

### :flower_playing_cards:\_이소진

- **Button** 컴포넌트 구현 (상담중, 필터링 리셋, 요청내역, 채팅)
- 요청서 정보가 담기는 **ItemCard** 구현

### 공통 작업

:white_check_mark: 마크업 및 스타일링  :white_check_mark: 컴포넌트 조합 및 로직 구현 <br>

## 📂 디렉토리 구조

```bash
.
├── api
├── assets
├── components
│   ├── base
│   │   ├── Button
│   │   ├── ResetButton
│   │   ├── Select
│   │   ├── Toggle
│   └── domain
│       ├── DefaultContainer
│       ├── NavBar
│       └── ItemCard
├── constants
├── hooks
├── styles
├── types
└── utils
```
