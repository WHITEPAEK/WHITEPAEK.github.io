---
title: 개츠비(Gatsby) 블로그 만들기 4 - 댓글(giscus) 적용
createdAt: 2024-01-25T00:00:00.000Z
editedAt: 2024-01-25T00:00:00.000Z
---

- [개츠비(Gatsby) 블로그 만들기 1 - 기본 세팅](https://whitepaek.com/posts/2024/01/gatsby-blog-start-1/)
- [개츠비(Gatsby) 블로그 만들기 2 - Tailwind CSS 적용](https://whitepaek.com/posts/2024/01/gatsby-blog-start-2/)
- [개츠비(Gatsby) 블로그 만들기 3 - 페이징(Pagination) 적용](https://whitepaek.com/posts/2024/01/gatsby-blog-start-3/)
- **개츠비(Gatsby) 블로그 만들기 4 - 댓글(giscus) 적용**
- [개츠비(Gatsby) 블로그 만들기 5 - 블로그(GitHub Pages) 배포](https://whitepaek.com/posts/2024/01/gatsby-blog-start-5/)
- [개츠비(Gatsby) 블로그 만들기 6 - 사용자 지정 도메인 적용](https://whitepaek.com/posts/2024/01/gatsby-blog-start-6/)

이번 포스트에서는 개츠비 블로그에 댓글 기능을 적용해 보도록 할게요.
댓글 기능으로 대표적인 오픈소스로 utterances와 giscus가 있어요.
저는 GitHub Discussions로 작동하는 댓글 시스템 giscus 오픈소스 앱을 적용하여 방문자가 포스트에 댓글과 반응을 남길 수 있도록 할게요.
이유는 utterances 보다 giscus가 좀 더 풍부한 옵션을 제공하고 있으며, 최신 버전까지 관리가 잘 되고 있어 많은 사람에게 선택받고 있어요. 

몇 가지 설정을 진행하면 giscus 기능을 적용할 수 있어요. 순서대로 잘 따라해 주세요!

## 1. GitHub Repository 생성
giscus는 GitHub Discussions를 이용하기 때문에 레포지토리를 설정해 주어야 해요.
저는 지금까지 만든 개츠비 블로그를 [GitHub Pages](https://docs.github.com/en/pages/quickstart)를 이용해서 배포할 거라,
공식 문서 가이드에 따라 레포지토리를 생성할게요. [깃허브](https://github.com/)의 내 레포지토리로 접속해서 **New** 버튼을 클릭해 주세요.
![[1-1] GitHub Repository](./images/repo-new.png)

레포지토리 이름은 [1-2]번 이미지처럼 본인의 username을 넣은 **${username}.github.io**로 작성해 주세요.
이유는 개츠비 블로그 레포지토리로 사용할 겸 해당 레포지토리의 Discussions를 이용하기 위함이에요.
그리고 Public을 선택해서 레포지토리를 생성해 주세요.
![[1-2] 레포지토리 생성](./images/create-new-repo.png)

레포지토리를 생성했다면 **Settings > General**로 이동하여 **Features 항목에 Discussions를 클릭**해 주세요.
![[1-3] Discussions 설정](./images/checked-discussions.png)

그리고 상단에 **Discussions**를 클릭 후, Categories 영역에 존재하는 **연필 아이콘을 클릭**해 주세요.
![[1-4] Discussions 카테고리 생성](./images/discussions-tab.png)

**New Category** 버튼을 클릭해 주세요.
![[1-5] 신규 카테고리 생성하기](./images/new-category.png)

카테고리 이름은 **Comments**로 작성하도록 하고, 포맷은 **Announcement**를 선택해서 카테고리를 생성해 주세요.
![[1-6] 생성할 카테고리 정보 입력](./images/create-category.png)

**Comments**라는 카테고리가 생성된 걸 확인할 수 있어요.
![[1-7] 신규 카테고리 생성 완료](./images/added-category.png)

## 2. giscus 앱 설치 및 설정
Discussions 설정과 카테고리 생성까지 완료했으면, [giscus 앱 설치 페이지](https://github.com/apps/giscus)에서 **Install 버튼을 클릭**해 주세요.
![[2-1] giscus 앱 설치](./images/install-giscus-app.png)

**Only select repositories**를 선택하고, Discussions를 설정했던 레포지토리를 선택해 주세요.
![[2-2] 읽기 권한 레포지토리 선택](./images/select-repo.png)

giscus 앱 설치가 완료됐으면, [giscus 설정 페이지](https://giscus.app/ko)로 접속해 주세요.
![[2-3] giscus 앱 설치 완료](./images/setting-giscus-app.png)

giscus 설정 페이지에서 생성한 저장소 이름을 입력해 주세요. 저장소 이름 형태는 **${username}/${username}.github.io** 입니다.   
그리고 **Discussion 제목이 페이지 경로를 포함** 방법으로 선택하고, 카테고리는 위에서 생성한 **Comments** 카테고리를 선택해 주세요.
![[2-4] 레포지토리 이름, 연결 방식, 카테고리 설정](./images/giscus-setting-1.png)

본인이 사용하고자 하는 기능과 테마를 선택해 주세요. giscus 설정을 모두 완료하면 **script**가 설정에 맞춰 생성됩니다.   
해당 script를 참고하여 개츠비 블로그에 댓글 기능을 적용할게요.
![[2-5] 기능, 테마 설정](./images/giscus-setting-2.png)

## 3. Gatsby Blog에 giscus 적용
이전 [포스트에서 만든 개츠비 블로그 프로젝트를 열어]((https://whitepaek.com/posts/2024/01/gatsby-blog-start-1/))주세요.   
그리고 **components** 디렉터리 하위에 **comments.js** 파일을 생성 후, 아래 코드를 작성하고,
[2-5]번 이미지에서 생성된 `data-repo`, `data-repo-id`, `data-category-id`, `data-reactions-enabled`, `data-input-position` 값을 넣어주세요.
```js
import React, { useEffect, useRef } from "react"

const Comments = () => {
  const commentRef = useRef(null)

  useEffect(() => {
    const giscus = document.createElement("script")

    const giscusConfig = {
      "src": "https://giscus.app/client.js",
      "data-repo": "",
      "data-repo-id": "",
      "data-category": "Comments",
      "data-category-id": "",
      "data-mapping": "pathname",
      "data-strict": "0",
      "data-reactions-enabled": "",
      "data-emit-metadata": "0",
      "data-input-position": "",
      "data-theme": "preferred_color_scheme",
      "data-lang": "ko",
      "data-loading": "lazy",
      "crossorigin": "anonymous",
      "async": true
    }

    Object.entries(giscusConfig).forEach(([key, value]) => {
      giscus.setAttribute(key, value)
    })

    commentRef.current.appendChild(giscus)
  }, [])

  return (
    <div ref={commentRef} />
  )
}

export default Comments
```
![[3-1] comment.js 파일 생성 및 코드 작성](./images/added-giscus-script.png)

코드 작성을 완료했으면, **templates** 디렉터리 하위에 **blog-post.js** 파일에 `<Comments />` 코드를 작성해 주세요.
![[3-2] blog-post.js 파일에 코드 추가](./images/added-comments.png)

모든 준비가 끝났어요. 이제 서버를 시작해서 포스트를 클릭하면 하위에 giscus 댓글 기능이 추가된 걸 볼 수 있어요.
![[3-3] giscus 댓글 기능 적용 완료](./images/added-giscus-comments.png)

이상으로 개츠비 블로그에 giscus 댓글 기능 적용에 대한 포스트를 끝낼게요!