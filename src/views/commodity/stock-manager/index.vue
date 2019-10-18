<template>
  <TeamStack
    :nav-list="navList"
    :title="title"
    :form="form"
    :froms="froms"
    :flag="flag"
    :table-column="tableColumn"
    :multipleSelection="multipleSelection"
    :tablelist="tablelist"
    :page="page"
    :pageSize="pageSize"
    :pagination="pagination"
    @search="searchSelect"
    @handReset="ResetClick"
    @hanleClick="handleSelectChange"
  />
</template>
<script>
import { prodSearch } from "../api";
import TeamStack from "@/components/TeamStack";
import { mapState } from "vuex";
export default {
   name: "MemberManger",
  components: {
    TeamStack
  },
  data() {
    return {
      flag: true,
      form: {
        prod_code: "",
        prod_name: "",
        category_id: "",
        brand_id: "",
        prod_src: "",
        vm_store_id: ""
      },
      navList: ["销售中", "已售馨"],
      title: "店铺管理",
      froms: [
        [
          {
            label: "款号",
            name: "prod_code",
            placeholder: "请输入店铺订单编号",
            is: "el-input"
          },
          {
            label: "SKU编码",
            name: "prod_name",
            placeholder: "请输入",
            is: "el-input"
          },
          {
            label: "分类",
            name: "category_id",
            placeholder: "请输入",
            is: "el-select"
          },
          {
            label: "品牌",
            name: "brand_id",
            is: "el-select"
          },
          {
            label: "商品来源",
            name: "prod_src",
            is: "el-select"
          },
          {
            label: "店铺",
            name: "vm_store_id",
            is: "el-select"
          }
        ]
      ],
      tableColumn: [
        [
          {
            lable: "商品款号",
            prop: "product_code"
          },
          {
            lable: "商SKU编码名称",
            prop: "sku_code"
          },
          {
            lable: "品牌",
            prop: "brand_name"
          },
          {
            lable: "品牌规格",
            prop: "shopping_sku"
          }
        ]
      ],
      multipleSelection: [],
      page: 1,
      pageSize: 10
    };
  },
  computed: mapState({
    tablelist: store => store.commodity.stacklist,
    pagination: store => store.commodity.stackpage
  }),
  mounted() {
    this.$store.dispatch("commodity/getStockList", {
      page: 1,
      pageSize: 10,
      status: 1,
      vm_store_id: 3446
    });
    prodSearch({
      status: 4
    }).then(res => {
      console.log(res.data);
      this.froms = this.froms.map(item =>
        item.map(item => {
          if (item.label === "分类") {
            return {
              ...item,
              options: res.data.category
            };
          } else if (item.label === "品牌") {
            return {
              ...item,
              options: res.data.brand
            };
          } else if (item.label === "商品来源") {
            return {
              ...item,
              options: res.data.source
            };
          } else if (item.label === "店铺") {
            return {
              ...item,
              options: res.data.store
            };
          }
          return item;
        })
      );
    });
  },
  methods: {
    // //点击切换
    // handleTab(current){
    //    this.current=current
    // },
    //单选框
    handleSelectChange(val) {
      this.multipleSelection = val;
    },
    // 重置
    ResetClick(data) {
      console.log(1);
      this.$store.dispatch("commodity/getStockList", {
        page: 1,
        pageSize: 10,
        status: 1,
        vm_store_id: 3446
      });
      let {} = data;
    },
    searchSelect(data) {
      console.log(this.list);
      const {} = data;
      console.log(data);
      this.$store.dispatch("commodity/getStockList", {
        page: 1,
        pageSize: 10,
        status: 1,
        vm_store_id: 3446
      });
    }
  }
};
</script>
 <style>
@import url("../style/index.css");
</style>
