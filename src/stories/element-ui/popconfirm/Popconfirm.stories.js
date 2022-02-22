import Popconfirm from "element-ui/packages/popconfirm/src/main.vue";

export default {
    title: 'element-ui/气泡确认框',
    component: Popconfirm,
    parameters: {
        docs: {
            description: {
                component: ''
            }
        }
    }
}

export const 气泡确认框 = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: { Popconfirm },
    template: `
        <div class="block">
        <el-popconfirm
            title="这是一段内容确定删除吗？"
        >
          <el-button slot="reference">删除</el-button>
        </el-popconfirm>
        </div>
    `,
})
