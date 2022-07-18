## 개발 블로그 운영 이유

---

### 안녕하세요.

안녕하세요 저는 프론트엔드 개발자 애한입니다. 저는 기록을 중요시 여기고, 기록을 통해 보다 발전할 수 있다는 믿음이 있습니다. 때문에 15년여간 블로그를 운영해왔고 naverblog, oneNote, EverNote, 카카오톡 내게 쓰기 등 다양한 메모가 가능한 기능을 통해 제가 살아왔던 과거에 대해 기록하고 있습니다.

### 기존에 블로그가 있었지만...

기존에 운영하고 있었던 블로그가 있지만, 개발블로그가 아닌 다양한 주제에 대한 블로그를 운영하고있었다. 해당 블로그에서는 개발 외 일상에 대한 다양한 글들이 올라오기 때문에 면접관이 나에 대해 조금 더 알 수 있는 기회라고 생각해서 넣었지만 보다 개인적인 것들이 들춰지는 것 같아서 조심스러워 졌다. (해당 블로그를 이력서에 넣었더니 해당 블로그를 면접도중 면접관이 탐색했는데 이별했던 이야기 등(지극히 사적인 이야기)이 담겨져있었다.)

### 기존 블로그와 격리 필요

때문에 기존 블로그와 격리된 개발을 위한, 나의 개발 지식을 정리하고 공부할 수 있는 블로그를 만드는 것이 필요했다.
또한, 오로지 개발과 관련한 블로그를 위한 글쓰기 연습이 필요했다.

개발과 관련하여, 혹은 한정하여 글쓰는 연습 필요.

---

## 블로그 개발 과정 안내

tistory, velog 등의 사이트를 이용할까 고민했습니다.
하지만 프론트엔드 개발자가 되고자 하기 때문에 직접 개발하고 원하는 위치에 원하는 기능을 추가해보면서, 다른 서비스에 의존하지 않는 나만의 사이트를 만들어보고 싶었습니다.

하지만 맨땅에서 블로그를 만들어보고자 했으나 디자인적 감각이 부족함을 깨닫고 Gatsby를 통해 블로그를 만들어보고자 하였습니다.

Gatsby 공식문서만 이용해서 혼자 블로그를 제작하던 도중 일일기록을 멈추지 않기 위해 TIL repository를 생성하여 일일기록을 하였고, 이후 commit에 <a href="https://github.com/lcyljy/TIL">TIL</a>만 올리는 것이 바람직하지 않다고 생각되어, 기존에 꾸준히 이용하던 OneNote를 사용하여 기록하였습니다.

이후 Gatsby 공식문서와 <a href="https://www.inflearn.com/course/gatsby-%EA%B8%B0%EC%88%A0%EB%B8%94%EB%A1%9C%EA%B7%B8/dashboard"><주현도>의 React 기반 Gatsby로 기술 블로그 개발하기 강의</a>를 바탕으로 제작되었습니다.

_무료강의이고 텍스트로 이루어져 있어 중간중간 설명 혹은 코드가 누락된 부분이 많아 찾아가면서 공부해야 했습니다._

아직 강의의 모든 코드를 이해하진 못했으나, 기존의 강의를 바탕으로 조금씩 수정하며 이해해 가는 중

---

## 강의 완주 후 개발과정 안내

위 강의는 react를 이용하여 개발블로그를 만들어보자는 강의입니다. 해당 강의는 블로그의 틀을 만드는 과정까지만 소개되어있고, 해당 강의 내에서 안내한 인피니티 스크롤을 구현하거나 emotionjs 라이브러리를 사용하는 방법, GraphQL 등에 대해 등 다양한 것들을 배울 수 있었지만 내가 생각하는 블로그에 필요한 기능들이 부족하다고 생각되어졌다.

### 앞으로 추가할 것들

1.  우상단 Nav 추가
2.  다크모드 기능 추가
3.  footer 링크 추가
4.  게시물(postItem) 단락 우측 상단에 고정(움직이는) 기능 추가
5.  프로파일 이미지를 클릭했을 때 메인화면으로 들어가는 기능
6.  기타...
