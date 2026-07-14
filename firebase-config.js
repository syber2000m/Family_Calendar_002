// Firebase 프로젝트 설정
//
// 1. https://console.firebase.google.com 에서 새 프로젝트를 만듭니다 (구글 계정 필요).
// 2. 왼쪽 메뉴 "빌드 > Realtime Database"에서 데이터베이스를 만듭니다.
//    - 위치는 아무 곳이나 선택해도 됩니다.
//    - 처음엔 "테스트 모드"로 시작해도 되지만, 그러면 30일 후 잠깁니다.
//      가족만 쓰는 개인 프로젝트이므로 "규칙(Rules)" 탭에서 아래처럼 바꿔주면 계속 사용할 수 있습니다:
//      { "rules": { ".read": true, ".write": true } }
//      (주소를 아는 사람은 누구나 읽고 쓸 수 있다는 뜻입니다. 링크를 가족 외에는 공유하지 마세요.)
// 3. 프로젝트 설정(톱니바퀴 아이콘) > 아래로 스크롤 > "내 앱"에서 웹 앱(</>)을 하나 등록하면
//    아래와 똑같이 생긴 firebaseConfig 값이 나옵니다. 그 값을 그대로 복사해서 아래에 붙여넣으세요.
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCRxzksmD0WDgezjO0Vo0Qupie2otpLzVc",
  authDomain: "family-calendar-database.firebaseapp.com",
  databaseURL: "https://family-calendar-database-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "family-calendar-database",
  storageBucket: "family-calendar-database.firebasestorage.app",
  messagingSenderId: "153809042568",
  appId: "1:153809042568:web:1b4aa1cf6170f2e5ccf33d",
};

firebase.initializeApp(FIREBASE_CONFIG);
