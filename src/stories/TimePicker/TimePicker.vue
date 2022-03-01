<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-03-01 13:17:10
 * @LastEditTime: 2022-03-01 14:58:38
-->
<template>
  <div class="custom-time-picker">
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
import DatePicker from "element-ui";
import { getTime } from "../../utils";
export default {
  name: "custom-time-picker",
  components: {
    DatePicker,
  },
  created() {
    getTime();
  },
};
</script>
<style  lang='scss' >
.el-picker-panel__body {
  margin-left: 200px !important;
}
.el-picker-panel__sidebar {
  width: 200px;
  button {
    float: left;
    width: 33.33%;
    text-align: center;
  }
}
.custom-time-picker {
  text-align: center;
}
</style>