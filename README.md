# Proxy for VCS search engine

Gets information on a searched user from Github, GitLab and bit buckets api's.

## Install

Save contents do desired location. Open cmd in current dir. Type ```npm install```. After it is done you should have the node_modules folder.

## Run the server `npm start`

Open cmd in current location and type ```npm start```.

CD into ```vsc-react-app``` and npm intall then ```npm start``` and the react app should start.


## GET User Info

### Request

`GET /get-user/:name`

`http://localhost:3001/get-user/:name`

### Response

```
eg:
[
  {
    githubinfo:[{information: info}]
  },
  {
    gitlabinfo:[{information: info}]
  },
  {
    bitbucketinfo:[{information: info}]
  },
]
```

## GitHub Repos

### Request

`GET /user/github/repo/:name`

`http://localhost:3001/user/github/repo/:name`

### Response

```
eg:
[
  {
    repoName:"name"
    repoDesc:"description"
    createdOn:"dd-mm-yy"
    commitMsg:[msg1,msg2,msg3,msg4,msg5]
  }
]
```

## GitLab Repos

### Request

`GET /user/gitlab/repo/:name`

`http://localhost:3001/user/gitlab/repo/:name`

### Response

```
eg:
[
  {
    repoName:"name"
    repoDesc:"description"
    createdOn:"dd-mm-yy"
    commitMsg:[msg1,msg2,msg3,msg4,msg5]
  }
]
```

## BitBucket Repos

### Request

`GET /user/bitbucket/repo/:name`

`http://localhost:3001/user/bitbucket/repo/:name`

### Response

```
eg:
[
  {
    repoName:"name"
    createdOn:"dd-mm-yy"
    commitMsg:[msg1,msg2,msg3,msg4,msg5]
  }
]
```


