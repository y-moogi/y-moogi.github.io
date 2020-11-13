var store = [{
        "title": "2020년 11월 12일(목) TIL",
        "excerpt":"0. 오늘 한 일     Githubblog 내 Navigation 생성     Git 개념 학습     Git Reset 및 Revert 학습       1. 오늘의 삽질     로컬이랑 원격저장소에서 커밋을 삭제했다 추가했다 하면서 page build가 안된다는 error mail을 10개나 받았다.              error: Merging is not possible because you have unmerged files.       navigation.yml 파일에서 충돌이 발생해서 하나씩 수정하다가 커밋 추가가 안되기 시작했다.       git reset과 revert 확인 후 일단은 reset으로 이슈 없었던 버전으로 돌려놓고 다시 작업을 했다.       공동작업을 하는 경우에는 revert를 사용하는 것이 안전해보인다.           블로그 내 탭이 3개여야 하는데 1개만 나와서 한동안 찾았다.              navigation 타이틀 옆에 “-“ 를 붙여야하는 지 몰랐는데 붙이니까 해결됐다.           navigation 클릭 시 404 에러가 뜨면서 페이지 연결이 되지 않았다.              사실 어쩌다(?) 해결됐는데, 일단 naviagtion 파일의 url을 pages 폴더 md파일과 연결시켰고, permalink도 더블체크하였다.            2. 회고     개발 공부에 효과적일 것 같아 베어, 브런치, 티스토리르 두고 gitblog를 추가 생성했다.     통계시스템 등이 불편할 것 같긴한데, 조만간 GA랑 페이스북 설치해서 통계볼 예정이라 문제는 없을 듯.     여기서는 퍼포먼스마케팅과 광고, 개발공부일지 등을 쓰고 브런치는 계속 일상 이야기를 쓸 지 아니면 블로그를 합칠지 고민이 된다      3. 내일 할 일     타이틀 옆 로고 추가   구글검색   GA, 페이스북 픽셀 연동   목차추가   링크, 마크다운 문법 공부   Adsense 추가  ","categories": ["TIL"],
        "tags": ["TIL"],
        "url": "http://localhost:4000/til/TIL-201112/",
        "teaser": null
      },{
        "title": "2020년 11월 13일(목) TIL",
        "excerpt":"0. 오늘 한 일     favicon 추가     검색기능 추가     마크다운 공부     Google Search Console 등록       1. 오늘의 삽질     Contribution Graph가 추가되지 않아 저장소를 다시 만들었다               생각해보니 맨 처음 Jekyll Theme 등록할때 로컬저장소에 압축을 푸는 방식이 잘 안되어서 folk로 저장소에 가지고온뒤 이름을 바꿨다.       문제가되었던 부분은 git push를 보낼때마다 계속 compare &amp; pull request를 하라는 메시지가 떴는데, 들어가보면 비교할 내용이 없다 그러고 아주 난리었다.                           살펴보니 저장소의 default branch가 main으로 되어있었고 나는 계속 master에 push를 하고 있었다.       master branch를 확인하니 push한 내용들이 문제 없이 들어오고 있었다.            2. 회고     테마를 적용하니까 쉽고 빠르게 이쁜 페이지를 만들 수 있는 장점은 있는 것 같은데 내가 만든 파일이 아니다보니 무언가를 수정하는 데 시간이 좀 걸린다.     GA, 픽셀 부터 빠르게 추가하고 Adsense 등을 추가해봐야겠다.     블로그 포맷이 완성된다면 퍼포먼스광고이야기를 조금 쓰면서 소규모개발프로젝트나 자바스크립트 문제 풀이를…      3. 내일 할 일     GA, 페이스북 픽셀 연동   Adsense 추가   타이틀 옆 로고 추가   구글검색   목차추가   링크, 마크다운 문법 공부   ","categories": ["TIL"],
        "tags": ["TIL"],
        "url": "http://localhost:4000/til/TIL-201113/",
        "teaser": null
      }]
