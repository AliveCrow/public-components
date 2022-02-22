import DateTimePicker from 'element-ui/packages/date-picker/src/picker'
import DateTimePickerDoc from './DateTimePickerDoc.mdx'

export default {
    title: 'element-ui/日期时间选择器',
    component: DateTimePicker,
    parameters: {
        docs: {
            page: DateTimePickerDoc
        }
    }
}

export const 日期和时间点 = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: { DateTimePicker },
    data() {
        return {
            value2: '',
            pickerOptions2: {
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                        picker.$emit('pick', new Date());
                    }
                }, {
                    text: '昨天',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                    }
                }, {
                    text: '一周前',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', date);
                    }
                }]
            }
        }
    },
    template: `
      <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker
          v-model="value2"
          type="datetime"
          placeholder="选择日期时间"
          align="right"
          :picker-options="pickerOptions2">
      </el-date-picker>
      </div>
    `,
})

export const 日期和时间范围 = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: { DateTimePicker },
    data() {
        return {
            value1: '',
            pickerOptions1: {
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            }
        }
    },
    template: `
      <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker
          v-model="value1"
          type="datetimerange"
          :picker-options="pickerOptions1"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          align="right">
      </el-date-picker>
      </div>
    `,
})
