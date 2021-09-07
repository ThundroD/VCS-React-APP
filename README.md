# Proxy for VCS search engine

Gets information on a searched user from Github, GitLab and bit buckets api's.

## Install

Save contents do desired location. Open cmd in current dir. Type ```npm install```. After it is done you should have the node_modules folder.

## Run the server `npm start`

Open cmd in current location and type ```npm start```.

CD into ```vsc-react-app``` and ```npm intall``` then ```npm start``` and the react app should start.


## GET User Info

### Request

`GET /get-user/:name`

`http://localhost:3001/get-user/:name`



## GitHub Repos

### Request

`GET /user/github/repo/:name`

`http://localhost:3001/user/github/repo/:name`


## GitLab Repos

### Request

`GET /user/gitlab/repo/:name`

`http://localhost:3001/user/gitlab/repo/:name`


## BitBucket Repos

### Request

`GET /user/bitbucket/repo/:name`

`http://localhost:3001/user/bitbucket/repo/:name`




