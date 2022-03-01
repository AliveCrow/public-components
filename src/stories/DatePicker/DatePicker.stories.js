/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-03-01 15:03:49
 * @LastEditTime: 2022-03-01 15:06:16
 */
import DatePicker from './DatePicker.vue'
import dayjs from 'dayjs'


export default {
  title: '日期控件',
  component: DatePicker,
}
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DatePicker },
  data() {
    function getQuarter() {
      var quarterOfYear = require('dayjs/plugin/quarterOfYear')
      dayjs.extend(quarterOfYear)
      const quarter = dayjs().quarter() - 1
      const year = dayjs().year()
      if (quarter < 1) {
        const end = dayjs().year(year - 1).endOf('year')
        const start = dayjs(`${year - 1}-10-01`)
        return [start, end]
      }
      return []
    }
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: '今天',
            onClick(picker) {
              const end = new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 3600 * 1000 - 1);
              const start = new Date(new Date(new Date().toLocaleDateString()).getTime());
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '昨天',
            onClick(picker) {
              const end = new Date(new Date(new Date().toLocaleDateString()).getTime() - 1)
              const start = new Date(new Date(new Date().toLocaleDateString()).getTime() - 24 * 3600 * 1000);
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '本周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              end.setTime(start.getTime() + 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '上周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '本月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              end.setTime(start.getTime() + 3600 * 1000 * 24 * 28);
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '上月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 28);
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '今年',
            onClick(picker) {
              const end = dayjs().endOf('year')
              const start = dayjs().startOf('year')
              // start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '去年',
            onClick(picker) {
              const end = dayjs().year(dayjs().year() - 1).endOf('year')
              const start = dayjs().year(dayjs().year() - 1).startOf('year')
              // start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '上半年',
            onClick(picker) {
              const end = dayjs(`${dayjs().format('YYYY')}-06-30`)
              const start = dayjs().startOf('year')
              // start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '上半年',
            onClick(picker) {
              const end = dayjs().endOf('year')
              const start = dayjs(`${dayjs().format('YYYY')}-07-01`)
              // start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '本季度',
            onClick(picker) {
              const end = dayjs().endOf('quarter')
              const start = dayjs().startOf('quarter')
              // start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '上季度',
            onClick(picker) {
              picker.$emit('pick', (function () {
                var quarterOfYear = require('dayjs/plugin/quarterOfYear')
                dayjs.extend(quarterOfYear)
                const quarter = dayjs().quarter() - 1
                const year = dayjs().year()
                if (quarter < 1) {
                  const end = dayjs().year(year - 1).endOf('year')
                  const start = dayjs(`${year - 1}-10-01`)
                  return [start, end]
                }
                return []
              })());
            }
          }
        ]
      },
      value: ''
    };
  },
  template: `
  <DatePicker
    v-model="value"
    type="daterange"
    align="right"
    unlink-panels
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    :picker-options="pickerOptions">
    </DatePicker>
  `,
});

export const 日期控件 = Template.bind({});
