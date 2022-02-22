import Alert from 'element-ui/packages/alert/src/main.vue'

export default {
    title: 'element-ui/信息提示',
    component: Alert,
    parameters: {
        docs: {
            description: {
                component: '用于页面中展示重要的提示信息'
            }
        },

    }
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Alert },
    template: `
      <div>
      <div class="block">
        <el-alert title="成功提示的文案" type="success" showIcon="" />
        <el-alert title="消息提示的文案" type="info" showIcon="" />
        <el-alert title="警告提示的文案" type="warning" showIcon="" />
        <el-alert title="错误提示的文案" type="error" showIcon="" />
        <el-alert title="成功提示的文案" type="success" effect="dark" />
        <el-alert title="消息提示的文案" type="info" effect="dark" />
        <el-alert title="警告提示的文案" type="warning" effect="dark" />
        <el-alert title="错误提示的文案" type="error" effect="dark" />
      </div>
      </div>
    `,
});

export const 信息提示 = Template.bind({});

