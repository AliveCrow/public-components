###
 # @Description: 输入文件描述信息
 # @Author: liu-wb
 # @Date: 2022-03-01 15:47:16
<<<<<<< HEAD:push-ph-page.sh
 # @LastEditTime: 2022-03-04 10:24:24
### 
#!/bin/sh

# 删除远程分支
git push origin -d gh-pages
=======
 # @LastEditTime: 2022-03-01 15:48:29
###
#!/bin/sh


>>>>>>> da03d8c26ec539ac3085b366480a622586eb9182:ghPage.sh
git add storybook-static -f && git commit -m "subtree commit"
git subtree push --prefix storybook-static origin gh-pages
