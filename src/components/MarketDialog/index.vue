<template>
  <div>
    <slot :data="form"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        dialogFrom: {
          summary: "",
          time_data: [],
          store_id: ""
        },
        dialogFroms: [
          {
            label: "内容:",
            name: "summary",
            placeholder: "请输入",
            is: "el-input",
            type: "textarea"
          },
          {
            label: "活动时间:",
            name: "time_data",
            type: "daterange",
            placeholder: "选择时间",
            rangeSeparator: "至",
            startPlaceholder: "开始日期",
            endPlaceholder: "结束日期",
            is: "el-date-picker"
          },
          {
            label: "店铺:",
            name: "store_id",
            placeholder: "请输入",
            is: "el-select",
            options: [
              {
                label: "店铺",
                value: "12"
              },
              {
                label: "店铺",
                value: "12"
              }
            ]
          }
        ],
        
      }
    };
  }
};
</script>