# Portfolio

개인 포트폴리오 사이트입니다.

## Git flow
참고 : [git을 기반으로 한 프로젝트 개발 프로세스](https://www.dropbox.com/s/yazdsa7q0wjizyz/GIT%EC%9D%84%20%EA%B8%B0%EB%B0%98%EC%9C%BC%EB%A1%9C%20%ED%95%9C%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%EA%B0%9C%EB%B0%9C%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4.pdf?dl=0)

브랜치 | 설명
----|-----
master | 배포시 master에서 merge. git hook을 사용해 merge하면 자동 빌드되어 배포되도록 한다.
develop | 다음 배포 시 추가할 기능 개발. master에서 시작, master에 병합.
feature | 기능 구현 브랜치. develop에서 시작해서 구현 시 develop에 병합. 네이밍 : feature/{branch-name}
release | 실제 배포할 상태가 되면 생성하는 브랜치. develop에서 시작. develop, master에 병합. 추후 배포버전 쉽게 찾기 위해 태그를 만들어서 현재 병합되는 커밋을 가리키도록 한다. 네이밍 : release-*.
hotfix | 이슈 발견 시 수정, master에서 시작. 수정완료 후 develop, master에 병합.

규모가 크지않고 필요한 기능이 많지 않아 feature, release는 따로 생성 안함.  
master, develop, hotfix 3개 브랜치로 작업하기로 결정.