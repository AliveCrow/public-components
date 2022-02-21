/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-12-10 13:35:27
 * @LastEditTime: 2021-12-10 13:35:28
 */
import ElDialog from './index.vue'

/* istanbul ignore next */
ElDialog.install = function(Vue) {
  Vue.component(ElDialog.name, ElDialog)
}

export default ElDialog
