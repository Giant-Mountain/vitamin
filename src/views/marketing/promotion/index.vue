<template>
  <div class="custormer-container">
    <div class="custormer-header">
      <div style="font-size:16px">顾客管理</div>
    </div>
    <div class="card-group">
      <CustormerFrom
        :froms="promotionFroms[currentIndex]"
        :form="form"
        @handSearch="handSearchInput"
        @resetInputValue="resetFromsValue"
      />
    </div>
    <div class="customer-list">
      <CustormerTable
        :add-dialog="addDialog"
        :table-column="tableColumn[currentIndex]"
        :table-list="tableList.list"
        :table-component="tableComponent"
        @handSeeContent="handTableEdior"
      />
    </div>
    <el-pagination
      :current-page="currentPage4"
      :page-sizes="[10, 15, 20, 25]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagination"
      style="float:right"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    <MarketDialog>
      <template v-if="tableCurrent===0">
        <el-dialog title="查看店内促销" :visible.sync="dialogFormVisible">
          <el-form>
            <el-form-item label="内容:" prop="desc" class="form-item-content">
              <el-input :disabled="true" type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item label="活动时间:" class="form-item-content">
              <el-date-picker
                :disabled="true"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="店铺:" class="form-item-content">
              <el-select :disabled="true" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </el-dialog>
      </template>
      <template v-if="tableCurrent===1">
        <el-dialog title="查看店内促销" :visible.sync="dialogFormVisible">
          <el-form>
            <el-form-item label="内容:" prop="desc" class="form-item-content">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item label="活动时间:" class="form-item-content">
              <el-date-picker
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="店铺:" class="form-item-content">
              <el-select placeholder="请选择活动区域" v-model="select">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </el-dialog>
      </template>
    </MarketDialog>
  </div>
</template>
<script>
import CustormerFrom from "@/components/CustormerFrom/index.vue";
import CustormerTable from "@/components/CustermerTable/index.vue";
import MarketDialog from "@/components/MarketDialog/index.vue";
import { mapState } from "vuex";

export default {
  name: "Customer",
  components: {
    CustormerFrom,
    CustormerTable,
    MarketDialog
  },
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      addDialog: true,
      currentIndex: 0,
      currentPage4: 1,
      currentType: 1,
      tableCurrent: 0,
      dialogFrom:{
        summary:'',
        time_data:[],
        store_id:'',
      },
      form: {
        tel: "",
        name: "",
        nickname: "",
        grade_code: "",
        cid: "",
        member_level: "",
        buy_times: [],
        lately_consume_time: "",
        lately_view_time: ""
      },
      tableColumn: [
        [
          {
            lable: "店铺名称",
            prop: "vm_store_name"
          },
          {
            lable: "楼层",
            prop: "floor_name"
          },
          {
            lable: "店内促销",
            prop: "summary"
          },
          {
            lable: "活动时间",
            prop: "activity_time_str"
          },
          {
            lable: "状态",
            prop: "promotion_status"
          }
        ]
      ],
      tableComponent: [
        {
          lable: "操作",
          content: ["查看", "编辑", "删除"]
        }
      ]
    };
  },
  computed: mapState({
    tableList: store => store.marketing.tableList,
    pagination: store => store.marketing.pagination,
    promotionFroms: store => store.marketing.promotionFroms
  }),
  mounted() {
    this.$store.dispatch("marketing/getPromotionSelect");
    this.$store.dispatch("marketing/getPromotionData", {
      type: this.currentType,
      page: this.currentPage4
    });
  },
  methods: {
    // 用来tab切换以及切tab切换的数据
    handIndex(index, type) {
      this.currentIndex = index;
      this.currentType = type;
      this.$store.dispatch("marketing/getPromotionData", {
        type: this.currentType,
        page: this.currentPage4
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    // 点击换页面并进行数据重新渲染
    handleCurrentChange(val) {
      this.currentPage4 = val;
      this.$store.dispatch("marketing/getPromotionData", {
        type: 1,
        page: this.currentPage4
      });
    },
    handSearchInput(data) {
      const {
        tel,
        name,
        nickname,
        grade_code,
        cid,
        member_level,
        buy_times,
        lately_consume_time,
        lately_view_time
      } = data;
      this.$store.dispatch("marketing/getPromotionData", {
        type: this.currentType,
        page: this.currentPage4,
        tel,
        name,
        nickname,
        grade_code,
        cid,
        member_level,
        buy_times,
        lately_consume_time,
        lately_view_time
      });
    },
    resetFromsValue() {
      this.form = {
        tel: "",
        name: "",
        nickname: "",
        grade_code: "",
        cid: "",
        member_level: "",
        buy_times: [],
        lately_consume_time: "",
        lately_view_time: ""
      };
    },
    handDialogShow(flag) {
      console.log(1);
      console.log(flag);
    },
    handTableEdior(data) {
      this.dialogFormVisible = true;
      this.tableCurrent = data.index;
      console.log(this.dialogFormVisible, "parent----");
    }
  }
};
</script>

<style lang="scss" scoped>
.form-item-content {
  display: flex;
  justify-content: center;
}
.form-item-content /deep/ .el-form-item__label {
  width: 80px;
  font-weight: normal;
  font-size: 14px;
}
.form-item-content /deep/ .el-textarea__inner {
  width: 350px;
  height: 95px;
}
.form-item-content /deep/ .el-date-editor {
  width: 350px;
}
.form-item-content /deep/ .el-input__inner {
  width: 350px;
}
* {
  font-size: 12px;
}
%juzhong {
  display: flex;
  justify-content: center;
  align-items: center;
}
.custormer-container {
  padding: 24px;
}

.custormer-header {
  padding: 24px;
  background: #fff;
  border-bottom: 1px solid #f5f5f5;
  position: relative;
  display: flex;
  flex-direction: column;
  div:nth-child(1) {
    flex: 2;
  }
  div:nth-child(2) {
    flex: 6;
    display: flex;
    align-items: center;
    span {
      margin-right: 25px;
    }
  }
  div:nth-child(3) {
    height: 25px;
    span {
      margin-right: 25px;
      height: 100%;
      display: inline-block;
    }
    .tab-active {
      border-bottom: 2px solid #3ec6b6;
      color: #3ec6b6;
    }
  }
}
.card-group {
  padding: 24px;
  background: #fff;
  overflow: hidden;
  border-bottom: 1px solid #e8e8e8;
}
.customer-list {
  padding: 24px 24px 24px;
  background: #fff;
  margin-top: 24px;
}
</style>
