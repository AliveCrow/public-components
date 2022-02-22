import ElDataPicker from 'element-ui/packages/date-picker/src/picker.vue'
import DatePickerDoc from './DataPickerDoc.mdx'

export default {
    title: 'element-ui/日期选择器',
    component: ElDataPicker,
    parameters: {
        docs: {
            page: DatePickerDoc
        }
    }
}


export const 选择日 = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { ElDataPicker },
    data() {
        return {
            value: '',
            pickerOptions1: {
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
      <div>
      <div class="block">
        <span class="demonstration">带快捷选项</span>
        <el-date-picker
            v-model="value"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions1">
        </el-date-picker>
      </div>
      </div>
    `,
})


export const 选择月份范围 = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { ElDataPicker },
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
      <div>
      <div class="block">
        <span class="demonstration">带快捷选项</span>
        <el-date-picker
            v-model="value1"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions1">
        </el-date-picker>
      </div>
      </div>
    `,
})
