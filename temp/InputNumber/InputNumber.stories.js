/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-02-18 17:34:12
 * @LastEditTime: 2022-02-21 09:28:31
 */
import InputNumber from '../../components/input-number/Number.vue'
import { action } from '@storybook/addon-actions'

export default {
  title: 'MES/数字输入框',
  component: InputNumber,

}


const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { InputNumber },
  template: '<InputNumber @change="change"  v-bind="$props" v-on="$listeners" ></InputNumber>',
  methods: { change: action('change') },


});

export const 数字输入框 = Template.bind({});
