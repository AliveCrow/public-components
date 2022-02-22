import Message from 'element-ui/packages/message/src/main.vue'

console.log(Message)

export default {
    title: 'element-ui/操作反馈',
    component: Message,
    parameters: {
        docs: {
            description: {
                component: '用于主动操作后的反馈提示'
            }
        }
    }
}

export const 操作反馈 = (args,{argTypes}) => ({
    props: Object.keys(argTypes),
    components: { Message },
    template: `
        <div class="block">
            <el-button :plain="true" @click="open2">成功</el-button>
            <el-button :plain="true" @click="open3">警告</el-button>
            <el-button :plain="true" @click="open1">消息</el-button>
            <el-button :plain="true" @click="open4">错误</el-button>
        </div>
    `,
    methods: {
        open1() {
            this.$message('这是一条消息提示');
        },
        open2() {
            this.$message({
                message: '恭喜你，这是一条成功消息',
                type: 'success'
            });
        },

        open3() {
            this.$message({
                message: '警告哦，这是一条警告消息',
                type: 'warning'
            });
        },

        open4() {
            this.$message.error('错了哦，这是一条错误消息');
        }
    }
})

操作反馈.args = {
    ...Message.data()
}
