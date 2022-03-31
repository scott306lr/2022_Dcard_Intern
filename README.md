# 2022_Dcard_Intern
2022 Web Frontend Intern Homework



## 如何啟動

#### Deploy directly on localhost :

只需 repo clone 下來之後執行:

```bash
yarn install
yarn build
yarn start
```

#### Deploy using Docker:

build container:

```
docker build -t nextjs-docker .
```

run container :

```
sudo docker run -d -p 3000:3000 nextjs-docker
```

kill container:

```bash
# to get CONTAINER ID:
sudo docker ps

# kill container
sudo docker kill {CONTAINER ID}
```



## 架構設計

此網站使用 Next.js 和 Tailwind 撰寫而成, 透過 Yarn 2 管理 Dependencies .

以下列出程式的主要架構:

#### Pages

```bash
# 網站的routing:
pages
├── _app.tsx
├── index.tsx 					# 首頁, 包含搜尋欄和列出高星數的repositories
└── users
    └── [username]
        ├── repos
        │   └── [repo]
        │       └── index.tsx	# 單一 repository 頁面,	包含特定repository的資料和github連結
        └── repos.tsx			# repository 列表, 包含使用者相關資料和repository列表
```

#### Components

* ReposList.tsx:
  * 用於程列 repositories , 可以配合下方實做的 hooks 達到 infinite scrolling 的功能
* SearchBar.tsx :
  * 搜尋欄，submit 時導向 /users/[username]/repos 頁面
* useGetUserRepos.ts:
  * 獲取 github API "GET /users/{username}" 回傳的資料

#### Hooks

* useGetRepoInfo.ts :
  * 獲取 github API "GET /repos/{owner}/{repo}" 回傳的資料和狀態碼
  * 用於取得特定repository資料，並且能根據狀態碼處理例外狀態
* useGetUserInfo.ts :
  * 獲取 github API "GET /users/{username}" 回傳的資料和狀態碼
  * 用於取得特定使用者資料，並且能根據狀態碼處理例外狀態
* useGetUserRepos.ts:
  * 獲取 github API "GET /users/{username}" 回傳的資料
  * 用於取得使用者的repositories，並且能支援 infinite scrolling
  * 提供 nextPage() , 每次呼叫會額外抓10筆資料
  * 當並無更多資料時，hasMore === false 
* useGetStarRepos.ts:
  * 獲取 github API "GET /search/repositories" 回傳的資料
  * 用於取得使用者的repositories，並且能支援 infinite scrolling
  * 提供 nextPage() , 每次呼叫會額外抓10筆資料
  * 當並無更多資料時，hasMore === false 



## 額外補充

#### 暫存資料

* 將從 API 獲取的資料暫存在瀏覽器的 Session Storage, 以減少重新抓取資料的次數

#### 例外處理

* 透過 Custom hooks 回傳的狀態碼，正確處理例外狀況 (ex. 403, 404)

#### CI/CD

* Cypress E2E Testing
  * 包含所有實作基本要求的測試
  * 例外狀況處理測試
  * 不同 Viewport 正確顯示測試

* Github Actions
  * 自動化測試並部屬至 Github Pages 的流程 

#### 響應式設計

* 針對不同 Viewport, 提供適當的版面配置

* 



 
