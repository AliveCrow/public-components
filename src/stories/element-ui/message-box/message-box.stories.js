import MessageBox from 'element-ui/packages/message-box/src/main.vue'


export default {
    title: 'element-ui/模态对话框',
    component: MessageBox,
    parameters: {
        docs: {
            description: {
                component: '用于消息提示、确认消息和提交内容'
            }
        }
    }
}

export const 模态对话框 = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: { MessageBox },
    template: `
        <div class="block">
          <el-button type="text" @click="open">点击打开 Message Box</el-button>
        </div>
    `,
    methods: {
        open() {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        }
    }
})
