/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-03-02 11:29:09
 * @LastEditTime: 2022-03-04 09:54:55
 */
import MyFormItem from './index.vue';

export default {
  title: 'components/表单项',
  component: MyFormItem,
}


const Template = (args, { argTypes }) => ({
  id: '999',
  props: Object.keys(argTypes),
  components: { MyFormItem },
  data () {
    return {
      searchForm: {
        value1: '',
        value2: ''
      }
    }
  },
  template: `
  <el-form :model="searchForm" inline>
  <MyFormItem v-model="searchForm.value" label="value" prop="value2" el="el-input"></MyFormItem>
  <MyFormItem el="el-button" type="search">查询</MyFormItem>
  <MyFormItem el="el-button" type="reset">重置</MyFormItem>
</el-form>
  `,
});

export const 表单项 = Template.bind({});
