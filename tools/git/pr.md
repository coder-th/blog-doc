# 如何优雅的进行`Pull Request`

## 基本流程

pr项目时需要一般需要至少两个项目，为了下文方便说明，被`fork`的源项目我们举例子为`father`，我们`fork`后的项目成为`child`。

### `fork`代码

首先到`father`项目中，点击`fork`，如图![](https://cdn.jsdelivr.net/gh/coder-th/static/202110111136458.png)

接下来github会在你的账号建一个同名的仓库，也就是`child`。

### `Git Clone`

接下来我们把它拉取到我们本地来，(温馨提示，在我们`git clone`之前可以为项目重命名,比如这里我重命名为`child`~~),可以执行`git clone git@github.com:th/child.git`

查看当前我们的源的情况，可以输入

`git remote -v`,不出意外的话，我们可以看到这样的结果。之后我们的代码编写也都在这个项目进行的。

![](https://cdn.jsdelivr.net/gh/coder-th/static/202110111251313.png)

### `Remote管理`

为了同步更新拉取上游项目也就是`father`的最新代码，我们需要添加一个上游源，那我们需要利用`git remote`来帮我们管理。所以我们这里建立一个新的远程源`git remote add upstream git@github.com:demo/father.git`,那么我们在输入`git remote -v`就可以看到这样的效果

![](https://cdn.jsdelivr.net/gh/coder-th/static/202110111204441.png)

### 代码编写

1. 当你在`child`项目中编写了新的代码，如果想要同步更新`father`最新代码，那么跟你在不同分支操作的原理是一样的，你要先`git add`和`git commit `到你的本地仓库中，
2. 然后通过`git fetch upstream`拉取最新的代码，注意，此时`fetch`后的代码只是放在`.git/refs/remotes/upstream`中，我们要进行合并。输入`git merge upstream`，
3. 让本地仓库的代码进行比对，看看是否有冲突的代码，如果有冲突的代码，我们需要进行解决，再重新`git add`和`git commit`，最后再推送到我们的远程仓库`child`中，由于默认的远程是`origin`所以可以直接进行`git push`。

### `Pr申请`

当你解决了某个问题的时候，想要把你的解决办法合并到`father`项目中的时候，我们可以提交一个`Pull Request`，如图

![](https://cdn.jsdelivr.net/gh/coder-th/static/202110111228303.png)

![](https://cdn.jsdelivr.net/gh/coder-th/static/202110111231841.png)

![](https://cdn.jsdelivr.net/gh/coder-th/static/202110111232740.png)

然后你就静静等待你的提交就被通过就可以了。![](https://cdn.jsdelivr.net/gh/coder-th/static/202110111251538.png)

然后你就成为某个仓库的`contributor`了，是不是很神奇，快去试试吧~~