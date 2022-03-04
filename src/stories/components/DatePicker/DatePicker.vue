<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-03-01 15:03:53
 * @LastEditTime: 2022-03-01 15:44:15
-->

<template>
  <div class="custom-date-picker">
    <el-date-picker v-bind="$attrs" v-on="$listeners">
      <!-- 插槽透传 -->
      <slot v-for="(_, name) in $slots" :slot="name" :name="name" />
      <template
        v-for="(_, name) in $scopedSlots"
        :slot="name"
        slot-scope="slotData"
      >
        <slot :name="name" v-bind="slotData" />
      </template>
    </el-date-picker>
  </div>
</template>
<script >
export default {
  name: "custom-date-picker",
};
</script>
<style scoped lang='scss' >
.custom-date-picker {
  text-align: center;
}
</style>