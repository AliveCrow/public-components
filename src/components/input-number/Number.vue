<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-11-04 08:33:22
 * @LastEditTime: 2022-02-18 17:39:13
-->
<template>
  <el-input
    ref="input"
    v-model="modelValue"
    type="number"
    class="no-number-arrow input-number"
    v-bind="$attrs"
    v-on="$listeners"
    @change="handleChange"
  >
    <span slot="suffix">{{ company }}</span>
  </el-input>
  <!--  <el-input-number type="number" class="my-input-number" v-bind="$listeners" v-on="$attrs" controls-position="right" >-->
  <!--  </el-input-number>-->
</template>

<script>
export default {
  name: 'Index',
  model: {
    prop: 'value',
    event: 'changed'
  },
  props: {
    /**
     * 单位倍率
     */
    measure: { // 度量
      type: [String, Number],
      default: '1'
    },
    /**
     * 精度(小数点后几位)
     */
    precision: { // 精度
      type: Number,
      default: 2
    },
    /**
 * 值
 */
    value: {
      type: [Number, String],
      default: 0
    },
    /**
* 单位
*/
    company: { // 单位
      type: String,
      default: '元/吨'
    }
  },
  data() {
    return {
      modelValue: 0
    }
  },

  watch: {
    value: {
      immediate: true,
      handler: function (n, o) {
        this.modelValue = ((n / Number(this.measure)).toFixed(this.precision)) * 1
      }
    }
  },
  methods: {
    handleChange(val) {
      const temp = (val * 1) * Number(this.measure)
      /**
    * 值变化触发
    *
    * @event changed
    */
      this.$emit('changed', temp.toFixed(this.precision) * 1)
    }
  }

}
</script>

<style  lang="scss">
/*在Chrome下移除input[number]的上下箭头*/
.no-number-arrow::-webkit-outer-spin-button,
.no-number-arrow::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none !important;
}

.no-number-arrow input[type="number"]::-webkit-outer-spin-button,
.no-number-arrow input[type="number"]::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none !important;
}

/*在firefox下移除input[number]的上下箭头*/
.no-number-arrow {
  -moz-appearance: textfield;
}

.no-number-arrow input[type="number"] {
  -moz-appearance: textfield;
}
.input-number {
  .el-input__suffix {
    display: flex !important;
    align-items: center;
    span {
      color: #333;
    }
  }
  .my-input-number {
    .el-input {
      width: 100%;
      text-align: left;
    }

    .el-input__inner {
      padding-right: 0 !important;
      text-align: left;
    }
    .el-input-number__decrease,
    .el-input-number__increase {
      display: none;
    }
  }
}
</style>
