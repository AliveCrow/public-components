/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-02-18 17:34:12
 * @LastEditTime: 2022-03-04 10:12:27
 */
import InputNumber from '../../../components/input-number/Number.vue'
import { action } from '@storybook/addon-actions'

export default {
  title: 'components/数字输入框',
  component: InputNumber,

}


const Template = (args, { argTypes }) => ({
  id: '10000',
  props: Object.keys(argTypes),
  components: { InputNumber },
  template: '<InputNumber @change="change"  v-bind="$props" v-on="$listeners" ></InputNumber>',
  methods: { change: action('change') },
});

export const 数字输入框 = Template.bind({});
