<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-03-04 10:04:23
 * @LastEditTime: 2022-03-04 10:17:44
-->

<template>
  <el-form :model="form" ref="form" inline>
    <slot></slot>
    <MyFormItem el="el-button" type="search" @click="onSubmit">
      <!--      @slot 查询按钮名字 -->
      <slot name="searchText">查询</slot>
    </MyFormItem>
    <MyFormItem el="el-button" type="reset" @click="onReset">
      <!--      @slot 重置按钮名字 -->
      <slot name="searchText">重置</slot>
    </MyFormItem>
    <MyFormItem
      v-if="moreSearch"
      el="el-button"
      type="more-search"
      @click="handleMoreSearch"
    >{{ showMoreSearch ? '收起' : '更多查询' }}</MyFormItem>
  </el-form>
</template>

<script>
import { cleanObj } from "../../../utils";
import MyFormItem from '../MyFormItem/index.vue'

export default {
  name: 'SearchPanel',
  components: { MyFormItem },
  model: {
    prop: 'form',
    event: 'formChanged'
  },
  props: {
    /**
     * form对象
     */
    form: {
      type: Object,
      default: () => {
      }
    },
    /**
  * 更多查询按钮
  */
    moreSearch: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      vm_form: {}
    }
  },

  watch: {
    form: {
      immediate: true,
      handler: function (n, o) {
        this.vm_form = n
      }
    }
  },
  methods: {
    formChanged (e) {
      this.$emit('formChanged', e)
    },
    onSubmit () {
      /**
  * 查询按钮点击触发
  *
  * @event search
  */
      this.$emit('search', cleanObj(this.vm_form))
    },
    onReset (formName) {
      this.$refs[formName].resetFields()
      this.formChanged({})
      /**
* 重置按钮点击触发
*
* @event reset
*/
      this.$emit('reset')
    },
    handleMoreSearch () {
      /**
* 查询更多按钮点击触发
*
* @event more-search
*/
      this.$emit('more-search')
    }
  }
}
</script>

<style scoped>
</style>
