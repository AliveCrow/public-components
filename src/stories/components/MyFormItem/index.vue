<!--
 * @Description: 输入文件描述信息<!--
 * @Author: grit
 * @Date: 2022/3/2 10:33
 * @LastEditTime: 2022/3/2 10:33
 * @FilePath: src/components/MyFormItem
 * @FileName: index.vue
 * @Description: 输入文件描述信息
-->
<template>
  <el-form-item
    v-bind="$attrs"
    class="my-form-item"
  >
    <template>
      <component
        :is="el"
        ref="componentEl"
        v-model="modelValue"
        v-bind="$attrs"
        v-on="$listeners"
      >
        <!--        @slot default slot-->
        <slot />
      </component>
    </template>
  </el-form-item>
</template>

<script>
export default {
  data () {
    return {
      modelValue: null
    }
  },
  model: {
    prop: 'value',
    event: 'changed'
  },
  name: 'MyFormItem',
  props: {
    /**
     * element的组件名 eg: el-input
     */
    el: {
      type: String,
      default: 'div'
    },
    value: null
  },
  watch: {
    modelValue: {
      immediate: true,
      deep: true,
      handler: function (n, o) {
        this.$emit('changed', n)
      }
    },
    value: {
      immediate: true,
      deep: true,
      handler: function (n, o) {
        this.modelValue = n
      }
    }
  }
}
</script>

<style  lang="scss">
.my-form-item {
  margin-bottom: 10px !important;
}
</style>

 * @Author: liu-wb
 * @Date: 2022-03-02 11:29:16
 * @LastEditTime: 2022-03-02 11:29:17
-->
