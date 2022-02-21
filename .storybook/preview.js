/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-02-18 13:27:01
 * @LastEditTime: 2022-02-18 16:45:02
 */
import '../src/styles/index.scss'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}