## GIT 流程管理

### 三区

```
工作区： index.html
git add🙌
暂存区：  index.html(维护版本区内容)
git commit 
版本区： index.html

```

### 比较差异

```
git diff 工作区与暂存区的差异
git diff --cached  暂存区与版本区的差异
git diff master  工作区域版本区的差异
```

### 命令1 

```
git reset HEAD <file>: 暂存区与版本区保持一致
git checkout <file>: 暂存区(暂存区没有找到版本区)覆盖工作区内容
git rm <file> --cached: 删除暂存区文件
git commit -am <msg>: git add .  git commit  第二次提交时候
git reset --hard <version> : 恢复版本区指定内容到工作区
git reflog 查看引用版本号

```

### 分支命令

```
git branch 查看分支 
git branch dev  创建开发分支
git checkout dev 切换到dev分支
git checkout -b dev  创建dev并且切换到dev分支
git branch -d dev  删除dev分支
```