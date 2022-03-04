/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-02-18 15:26:15
 * @LastEditTime: 2022-03-04 10:31:17
 */
import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element, { size: 'small', zIndex: 3000 });

import DynamicTableContainer from '../../../components/DynamicTableContainer/index.vue'

export default {
  title: 'components/动态表格',
  component: DynamicTableContainer,
}


const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DynamicTableContainer },
  template: '<DynamicTableContainer   v-bind="$props" v-on="$listeners" ></DynamicTableContainer>',
});

export const 动态表格 = Template.bind({});
动态表格.args = {
  title: '组件实例'
};