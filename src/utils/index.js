/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-03-01 13:49:14
 * @LastEditTime: 2022-03-01 14:38:41
 */
import dayjs from 'dayjs'
var quarterOfYear = require('dayjs/plugin/quarterOfYear')
dayjs.extend(quarterOfYear)

export function getTime() {

  //   第一季度：1月－3月
  // 第二季度：4月－6月
  // 第三季度：7月－9月
  // 第四季度：10月－12月
  // .quarter() 
  const list11 = [
    {
      start: dayjs().startOf(),
      end: dayjs(`${dayjs().year()}-03-31`),
    },
    {
      start: dayjs(`${dayjs().year()}-04-01`),
      end: dayjs(`${dayjs().year()}-06-30`),
    },
    {
      start: dayjs(`${dayjs().year()}-07-01`),
      end: dayjs(`${dayjs().year()}-09-30`),
    },
    {
      start: dayjs(`${dayjs().year()}-10-01`),
      end: dayjs().endOf(),
    }
  ]
  const list = [
    {
      text: '今年',
      onClick(picker) {
        const end = dayjs().endOf('year')
        const start = dayjs().startOf('year')
        // start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
        picker.$emit('pick', [start, end]);
      }
    }
  ]


  console.log({
    text: '本季度',
    onClick(picker) {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      picker.$emit('pick', [start, end]);
    }
  });

}