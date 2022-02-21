<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2021-10-29 11:20:52
 * @LastEditTime: 2021-11-25 18:08:03
-->
<template>
  <el-main class="dynamic-table-body">
    <el-table
      ref="table"
      class="table"
      :max-height="tableHeight"
      :row-style="rowStyle"
      highlight-current-row
      :data="tableData"
      border
      @row-click="rowClick"
      @row-dblclick="rowDblclick"
    >
      <el-table-column
        v-if="hasIndex"
        type="index"
        width="80"
        label="序号"
        fixed="left"
      />
      <el-table-column
        v-for="(el, index) in USER_FIELD().dispField"
        :key="index"
        align="center"
        v-bind="{
          ...el,
          width: 0,
        }"
        :min-width="el.width"
        show-overflow-tooltip
      >
        <template v-slot:default="scope">
          <div>
            {{ needDict(scope.row, el) }}
            <!-- {{ scope.row[el.prop] }} -->
          </div>
        </template>
      </el-table-column>
      <el-table-column
        v-if="hasOperate"
        fixed="right"
        label="操作"
        :width="operateWidth"
      >
        <template slot-scope="scope">
          <slot name="operate" :scope="scope" />
        </template>
      </el-table-column>
    </el-table>
  </el-main>
</template>
<script >
import store from "store";

export default {
  name: "DynamicTableBody",
  inject: [
    "formId",
    "USER_FIELD",
    "hasOperate",
    "clickRow",
    "dblclick",
    "tableHeight",
    "hasIndex",
    "operateWidth",
  ],
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      structure: store.get("structure"),
      rowStyle: {},
    };
  },
  computed: {
    needDict() {
      return (row, el) => {
        if (el.label === `角色（机构）`) {
          return `${row["roleName"]} (${row["orgName"]})`;
        }
        if (el.prop === "commitTag") {
          return this.structure["whether"][row[el.prop]];
        }
        if (el.prop === "distEid") {
          return this.structure["admLv"][row[el.prop]];
        }
        if (el.prop === "canList") {
          return this.structure["whether"][row[el.prop]];
        }
        if (row[el.prop] !== undefined) {
          if (el.dict) {
            return this.structure[el.prop][row[el.prop]];
          }
          if (el.fommter) {
            return this.structure["whether"][row[el.prop]];
          }
          return row[el.prop];
        }
        return ``;
      };
    },
  },
  mounted() {
    console.log("?????????: ", this.tableData);
  },
  // watch: {
  //   tableData: {
  //     immediate: true,
  //     deep: true,
  //     handler: function(n, o) {
  //       if (n.length >= 0) {
  //         this.tableLoading = false
  //       }
  //     }
  //   }
  //
  // },
  methods: {
    // /**
    //  * 表格排序事件处理函数
    //  * @param {object} {column,prop,order} 列数据|排序字段|排序方式
    //  */
    // sortChange({ prop, order }) {
    //   this.tableData.sort(this.compare(prop, order))
    // },
    // /**
    //   * 排序比较
    //   * @param {string} propertyName 排序的属性名
    //   * @param {string} sort ascending(升序)/descending(降序)
    //   * @return {function}
    //   */
    // compare(propertyName, sort) {
    //   return function(obj1, obj2) {
    //     var value1 = obj1[propertyName]
    //     var value2 = obj2[propertyName]
    //     if (typeof value1 === 'string' && typeof value2 === 'string') {
    //       const res = value1.localeCompare(value2, 'zh')
    //       return sort === 'ascending' ? res : -res
    //     } else {
    //       if (value1 <= value2) {
    //         return sort === 'ascending' ? -1 : 1
    //       } else if (value1 > value2) {
    //         return sort === 'ascending' ? 1 : -1
    //       }
    //     }
    //   }
    // },
    setCurrentRow(index) {
      this.$nextTick(() => {
        this.$refs.table.setCurrentRow(this.$refs.table.data[index]);
      });
    },
    rowClick(row) {
      this.clickRow(row);
    },
    rowDblclick(row) {
      this.dblclick(row);
    },
    setRowStyle(customConfig) {
      var stylejson = {};
      stylejson.height =
        this.USER_FIELD().customConfig.lineHeight + "px !important";
      stylejson.lineHeight =
        this.USER_FIELD().customConfig.lineHeight + "px !important";
      stylejson.fontSize =
        this.USER_FIELD().customConfig.fontSize + "px !important";
      this.rowStyle = stylejson;
      return stylejson;
    },
  },
};
</script>
<style scoped lang="scss">
.el-main {
  padding: 0 !important;
}
</style>
