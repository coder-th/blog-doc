# Miku博客
## 开发
> 请确保您的电脑有已经安装好git，node以及yarn
### 拉取代码
```shell
git clone git@github.com:coder-th/blog-doc.git
```
### 安装依赖
```shell
yarn install
```
### 开启本地服务
```shell
yarn dev
```

### 部署
```shell
yarn build
```
## 配置
### 页面路径配置
如果您添加了某个页面，那么需要在`.vuepress/config`目录，找到你页面的入口，然后按照规范填写你的路径(您书写md文件的文件路径)

## 持续集成
本项目默认已经集成`Github Action`,您要在您的仓库配置好你的秘钥等信息。具体需要配置参数为`ACCESS_TOKEN`(服务器秘钥),`REMOTE_PORT`(SSH端口),`REMOTE_HOST`(服务器的外网地址),`REMOTE_USER`(SSH登录用户名),`REMOTE_TARGET`(服务器目标文件夹)