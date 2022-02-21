<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-12-10 13:34:25
 * @LastEditTime: 2022-02-18 15:16:45
-->
<template>
  <Button v-bind="$attrs" v-on="$listeners">
    <!-- 插槽透传 -->
    <slot v-for="(_, name) in $slots" :slot="name" :name="name" />
    <template v-for="(_, name) in $scopedSlots" :slot="name" slot-scope="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </Button>
</template>

<script>
// 透传组件，指令只挂载到组件
import { Button } from 'element-ui'
export default {
  name: 'CcButton',
  components: { Button },
  methods: {
    onclick() {
      console.log('123');
    }
  }
}
</script>
