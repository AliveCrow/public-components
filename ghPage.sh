###
 # @Description: 输入文件描述信息
 # @Author: liu-wb
 # @Date: 2022-03-01 15:47:16
 # @LastEditTime: 2022-03-01 15:48:29
###
#!/bin/sh


git add storybook-static -f && git commit -m "subtree commit"
git subtree push --prefix storybook-static origin gh-pages
