import Home from '../../components/Home/index'


export default {
    title: '首页',
    component: Home
}
export const 首页 = (args,{argTypes}) => ({
    components: { Home },
    template: `
        <Home />
    `
})
