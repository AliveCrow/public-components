import SearchPanel from './SearchPanel.vue'
import { action } from '@storybook/addon-actions'
import MyFormItem from '../MyFormItem/index.vue'


export default {
  title: 'components/查询项容器',
  component: SearchPanel,

}


const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SearchPanel, MyFormItem },
  data () {
    return {
      showMoreSearch: false,
      searchForm: {
        value1: '',
        value2: ''
      }
    }
  },
  template: `
  <SearchPanel v-model="searchForm" @search="onSearch" @reset="onReset" @more-search="handleMoreSearch">
  <MyFormItem v-model="searchForm.value1" label="value1" prop="value1" el="el-input"></MyFormItem>
  <MyFormItem v-model="searchForm.value2" label="value2" prop="value2" el="el-input"></MyFormItem>
  <MyFormItem v-model="searchForm.value2" label="value2" prop="value2" el="el-input"></MyFormItem>
  <MyFormItem v-model="searchForm.value2" label="value2" prop="value2" el="el-input"></MyFormItem>
  <span v-show="showMoreSearch">
  <MyFormItem v-model="searchForm.value2" label="value2" prop="value2" el="el-input"></MyFormItem>
  <MyFormItem v-model="searchForm.value2" label="value2" prop="value2" el="el-input"></MyFormItem>
  <MyFormItem v-model="searchForm.value2" label="value2" prop="value2" el="el-input"></MyFormItem>
  <MyFormItem v-model="searchForm.value2" label="value2" prop="value2" el="el-input"></MyFormItem>
  <MyFormItem v-model="searchForm.value2" label="value2" prop="value2" el="el-input"></MyFormItem>
  <MyFormItem v-model="searchForm.value2" label="value2" prop="value2" el="el-input"></MyFormItem>
  <MyFormItem v-model="searchForm.value2" label="value2" prop="value2" el="el-input"></MyFormItem>
  <MyFormItem v-model="searchForm.value2" label="value2" prop="value2" el="el-input"></MyFormItem>
  </span>
</SearchPanel>`,
  methods: {
    change: action('change'),
    onSearch () {
    },
    onReset () {
    },
    handleMoreSearch () {
      this.showMoreSearch = !this.showMoreSearch
    }
  },
});

export const 查询项容器 = Template.bind({});
