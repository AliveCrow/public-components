/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-03-01 13:15:08
 * @LastEditTime: 2022-03-04 10:12:40
 */
import { action } from '@storybook/addon-actions'
import TabDialog from "../../../components/TabDialog";

export default {
    title: 'components/Tab弹出框',
    component: TabDialog,

}


const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { TabDialog },
    data () {
        return {
            activeTab: '基本信息',
            visible: false,
            tableMap: [
                {
                    optTime: '2020/2/15 13:13:13',
                    operator: '张三',
                    optType: '增加',
                    optLog: '增加xxxxxxxxxxxxxxxxxxxxxxx'
                },
                {
                    optTime: '2020/2/15 13:13:13',
                    operator: '张三',
                    optType: '增加',
                    optLog: '增加xxxxxxxxxxxxxxxxxxxxxxx'
                },
                {
                    optTime: '2020/2/15 13:13:13',
                    operator: '张三',
                    optType: '增加',
                    optLog: '增加xxxxxxxxxxxxxxxxxxxxxxx'
                }
            ]
        }
    },
    template: `
        <div>
        <el-button @click="visible = true">show</el-button>
        <TabDialog v-model="activeTab" :visible.sync="visible"  v-bind="$props" v-on="$listeners" >
          <template>
            <el-tab-pane label="基本信息" name="基本信息" type="border-card">
              <p>机构云码：102562563</p>
              <p>机构名称：武汉云台数据有限公司</p>
              <p>机构简称：武汉云台</p>
              <p>行政区域：湖北省武汉市</p>
              <p>机构类型：商砼运输商、商砼泵送商</p>
              <p>机构角色：系统管理员、商砼销售结算员、商砼发车调度</p>
              <p>状态：启用</p>
            </el-tab-pane>
            <el-tab-pane label="操作日志" name="操作日志">
              <el-table
                  :data="tableMap"
                  border
                  style="width: 100%">
                <el-table-column
                    prop="optTime"
                    label="操作时间"
                    width="135">
                </el-table-column>
                <el-table-column
                    prop="operator"
                    label="操作人"
                    width="60">
                </el-table-column>
                <el-table-column
                    prop="optType"
                    label="操作类型"
                    width="75">
                </el-table-column>
                <el-table-column
                    prop="optLog"
                    label="操作内容">
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </template>
        </TabDialog>
        </div>
    `,
    methods: { change: action('change') },
});

export const Tab弹出框 = Template.bind({});
