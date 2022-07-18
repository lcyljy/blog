---
date: '2022-07-18'
title: 'test 게시물입니다.'
categories: ['Intro', 'Resume']
summary: '(feat)branch와 (docs) 게시물 추가 branch 를 각각 별도로 생성한후 merge하면 어떻게 되는가...'
thumbnail: './test.png'
---

(feat)branch와 (docs) 게시물 추가 branch 를 각각 별도로 생성한후 merge하면 어떻게 되는가에 대해서 실험을 해보고자합니다.

develop branch에서 (feat) #1 branch를 생성하고, 마찬가지로 develop branch에서 (docs) 게시물 업로드 branch를 생성합니다.

<img src="./branchtest.png">

위와 같이 2개의 branch를 작성한후 docs 게시물 업로드 branch를 develop branch로 우선 merge합니다.

이후 (feat) #1 branch를 develop branch로 merge합니다.

각 두개의 branch 사이에 서로 중복되어 작업된 파일이 없으므로 정상적으로 병합되어야 합니다.
확인합니다.
