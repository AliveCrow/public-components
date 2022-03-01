<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-10-29 11:20:47
 * @LastEditTime: 2022-03-01 13:43:26
-->
<template>
  <el-header class="dynamic-table-header">
    <section class="dynamic-table-header-left">
      <span>{{ title }}</span>
      <slot></slot>
    </section>
    <section class="dynamic-table-header-right">
      <slot name="btn" />
      <el-button type="new" icon="el-icon-setting" @click="_OPEN_" />
    </section>
  </el-header>
</template>
<script lang='js'>
export default {
  name: 'TableHeader',
  inject: ['title', 'OPEN_DIALOG', 'hasOperate', 'setSlotName', 'setElTitle'],
  methods: {
    _OPEN_() {
      this.setSlotName('settings')
      this.OPEN_DIALOG()
      this.setElTitle('配置表头')
      this.$emit('openSettings')
    }
  }
}
</script>
<style scoped lang='scss' >
$primary: #4089ff;
.dynamic-table-header {
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  &-left {
    position: relative;
    margin-left: 10px;
    font-size: 18px;
    font-weight: 600;
    display: flex;
    align-items: center;
    &:before {
      content: "";
      display: block;
      width: 3px;
      height: 40px;
      background-color: $primary;
      position: absolute;
      top: 50%;
      left: -10px;
      transform: translateY(-50%);
    }
  }
}
</style>
