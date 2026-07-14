# 📅 우리 가족 일정표 (Family Calendar)

가족 구성원(엄마, 아빠, 승우, 정우, 창우)이 함께 사용하는 공유 일정표 웹앱입니다.
Firebase Realtime Database를 통해 저장되어, 누가 어디서 열어도 새로고침하면 같은 일정을 볼 수 있습니다.

## 주요 기능

- **달력 보기**: 이번 달 달력에 일정이 표시되며, ◀ / ▶ 버튼이나 연/월 제목 클릭으로 다른 달로 이동할 수 있습니다.
- **일정 추가**
  - 달력의 날짜를 더블클릭하면 해당 날짜에 일정을 추가할 수 있습니다.
  - 날짜를 클릭한 뒤 다른 날짜를 Ctrl+클릭하면 여러 날짜(숙박)에 걸친 일정을 추가할 수 있습니다.
  - 일정을 추가할 때 담당 구성원을 한 명 이상 선택합니다 (중복 선택 가능).
- **일정 수정/삭제**: 일정 텍스트를 더블클릭하면 수정/삭제 팝업이 표시됩니다.
- **완료 체크**: 목록에서 체크박스로 완료 여부를 표시할 수 있습니다.
- **구성원별 필터**: 필터 버튼으로 특정 구성원의 일정만 목록/달력에서 강조하거나 골라볼 수 있습니다.
- **실시간 공유**: Firebase Realtime Database에 저장되어, 새로고침(또는 🔄 버튼)을 누르면 다른 가족 구성원이 등록한 내용까지 최신 상태로 동기화됩니다.

## 파일 구성

| 파일 | 설명 |
| --- | --- |
| `index.html` | 페이지 구조 및 각종 팝업 마크업 |
| `style.css` | 전체 스타일 |
| `main.js` | 달력 렌더링, 일정 CRUD, 필터링, Firebase 연동 로직 |
| `firebase-config.js` | Firebase 프로젝트 설정 (Realtime Database 연결 정보) |

## 실행 방법

별도 빌드 과정이 없는 순수 HTML/CSS/JS 프로젝트입니다. `index.html`을 브라우저로 열면 바로 동작합니다.

## Firebase 설정

가족 구성원 간 동기화를 위해 Firebase Realtime Database를 사용합니다. `firebase-config.js` 상단 주석에 설정 방법이 안내되어 있습니다:

1. [Firebase 콘솔](https://console.firebase.google.com)에서 프로젝트를 생성합니다.
2. Realtime Database를 생성합니다.
3. Rules 탭에서 아래와 같이 설정합니다 (가족만 사용하는 개인 프로젝트 기준):
   ```json
   { "rules": { ".read": true, ".write": true } }
   ```
4. 웹 앱을 등록해 발급받은 설정값을 `firebase-config.js`의 `FIREBASE_CONFIG` 객체에 입력합니다.
