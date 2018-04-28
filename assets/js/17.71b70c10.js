(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{67:function(t,e,a){"use strict";a.r(e);var r=a(0),s=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git","aria-hidden":"true"}},[t._v("#")]),t._v(" git")]),a("h2",{attrs:{id:"撤消操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#撤消操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 撤消操作")]),a("h3",{attrs:{id:"撤消git-commit操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#撤消git-commit操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 撤消git commit操作")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("使用git log查看 commit 日志，日志中包含本次commit的哈希值,找到需要回退的那次commit的哈希值，\n使用git reset --hard commit_id  命令进行回退\n")])]),a("h3",{attrs:{id:"撤消git-add-操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#撤消git-add-操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 撤消git add 操作")]),a("p",[t._v("如果是撤销所有的已经add的文件:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git reset HEAD .\n")])]),a("p",[t._v("如果是撤销某个文件或文件夹:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git reset HEAD -filename\n")])]),a("h3",{attrs:{id:"撤消git-push操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#撤消git-push操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 撤消git push操作")]),a("p",[t._v("方法:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    git reset --hard <commit_id>\n    git push origin HEAD --force\n")])]),a("p",[t._v("其他:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    根据–soft –mixed –hard，会对working tree和index和HEAD进行重置:\n    git reset –mixed：此为默认方式，不带任何参数的git reset，即时这种方式，它回退到某个版本，只保留源码，回退commit和index信息\n    git reset –soft：回退到某个版本，只回退了commit的信息，不会恢复到index file一级。如果还要提交，直接commit即可\n    git reset –hard：彻底回退到某个版本，本地的源码也会变为上一个版本的内容\n    HEAD 最近一个提交\n    HEAD^ 上一次\n")])]),a("h3",{attrs:{id:"修正最后一个commit消息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修正最后一个commit消息","aria-hidden":"true"}},[t._v("#")]),t._v(" 修正最后一个commit消息")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('方法: git commit --amend 或 git commit --amend -m "要修改的提交信息"\n')])]),a("h3",{attrs:{id:"撤消历史提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#撤消历史提交","aria-hidden":"true"}},[t._v("#")]),t._v(" 撤消历史提交")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("方法: git revert\n### git revert与git reset的区别\n  - git revert 是用一个新技术提交来消除一个历史提交所做的任何修改，同时本地代码会回滚到指定的历史版本，HEAD是一直向前的\n  - git reset 是直接删除指定的commit,HEAD是向后退到上一个版本\n")])]),a("h3",{attrs:{id:"撤消本地修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#撤消本地修改","aria-hidden":"true"}},[t._v("#")]),t._v(" 撤消本地修改")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("方法：git checkout -- filename 把工作目录里的文件修改到git之前记录的某个状态\n")])]),a("h3",{attrs:{id:"撤消-本地修改之后再恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#撤消-本地修改之后再恢复","aria-hidden":"true"}},[t._v("#")]),t._v(' 撤消"本地修改之后再恢复"')]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("方法：先git reflog 查看项目历史再git reset 或 git checkout\n  - git reset --hard <指定版本号> 代码库修改到某一次提交的状态\n  - git checkout <版本号> -- <文件名> 修改某一次提交的某个文件\n  - git cherry-pick <版本号> 重新提交某一次历史提交\n")])]),a("h2",{attrs:{id:"利用分支保存自己的代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利用分支保存自己的代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 利用分支保存自己的代码")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("- 1.git branch feature 创建新分支并指向最近一次的提交，但还check out在master分支上\n- 2.git reset --hard origin/master 把master分支倒回origin/master，但此时commit还在feature分支里\n- 3.git checkout feature 查看工作成果\n")])]),a("h2",{attrs:{id:"在本地创建test分支并指向远程test分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在本地创建test分支并指向远程test分支","aria-hidden":"true"}},[t._v("#")]),t._v(" 在本地创建test分支并指向远程test分支")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git checkout -b test origin/test\n")])]),a("h2",{attrs:{id:"切换分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#切换分支","aria-hidden":"true"}},[t._v("#")]),t._v(" 切换分支")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git checkout `<branch>`\n")])]),a("h2",{attrs:{id:"删除分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除分支","aria-hidden":"true"}},[t._v("#")]),t._v(" 删除分支")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("要删除当前分支要先切换到别的分支，因为当前分支正在使用\ngit branch -d `<branch>`\n")])]),a("h2",{attrs:{id:"合并分支-git-rebase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合并分支-git-rebase","aria-hidden":"true"}},[t._v("#")]),t._v(" 合并分支 git rebase")]),a("h3",{attrs:{id:"git-rebase用于把一个分支的修改合并到当前分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase用于把一个分支的修改合并到当前分支","aria-hidden":"true"}},[t._v("#")]),t._v(" git rebase用于把一个分支的修改合并到当前分支")]),a("p",[t._v("如果想要放弃当前rebase操作，用:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" git rebase --abort\n")])]),a("p",[t._v("如果冲突已经解决，先add冲突文件，之后：")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" git rebase --continue\n")])]),a("h2",{attrs:{id:"git-ssh配置及使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-ssh配置及使用","aria-hidden":"true"}},[t._v("#")]),t._v(" git ssh配置及使用")]),a("h3",{attrs:{id:"设置git的username和email-如果是第一次的话"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置git的username和email-如果是第一次的话","aria-hidden":"true"}},[t._v("#")]),t._v(" 设置git的username和email(如果是第一次的话)")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('git config --global user.name "momo-0902"\ngit config --global user.email "329053928@qq.com"\n')])]),a("h3",{attrs:{id:"检查是否有ssh-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查是否有ssh-key","aria-hidden":"true"}},[t._v("#")]),t._v(" 检查是否有ssh key")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd ~/.ssh\nls\n")])]),a("p",[t._v("如果存在id_isa和id_isa.pub文件，证明已经存在ssh key，可跳过生成密钥这一步骤")]),a("h3",{attrs:{id:"生成密钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成密钥","aria-hidden":"true"}},[t._v("#")]),t._v(" 生成密钥")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('ssh-keygen -t rsa -C "329053928@qq.com"\n')])]),a("p",[t._v("生成id_isa和id_isa.pub两个文件")]),a("h3",{attrs:{id:"将id-isa-pub文件中的密钥复制添加到github的ssh-key设置里"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将id-isa-pub文件中的密钥复制添加到github的ssh-key设置里","aria-hidden":"true"}},[t._v("#")]),t._v(" 将id_isa.pub文件中的密钥复制添加到github的ssh key设置里")]),a("h3",{attrs:{id:"将本地仓库-git文件夹下config文件里的url改成ssh的地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将本地仓库-git文件夹下config文件里的url改成ssh的地址","aria-hidden":"true"}},[t._v("#")]),t._v(" 将本地仓库.git文件夹下config文件里的url改成ssh的地址")]),a("h3",{attrs:{id:"可使用ssh-t-git-github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可使用ssh-t-git-github","aria-hidden":"true"}},[t._v("#")]),t._v(" 可使用ssh -T git@github")]),a("p",[t._v("成功后提示信息为")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Hi MOMO-0902!(你的用户名) You've successfully authenticated, but GitHub does not provide shell access.\n")])])])}],!1,null,null,null);e.default=s.exports}}]);