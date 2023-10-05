<template>
  <div>
    <Alert>
      周轉倍數計算機
      <template #desc>
        平時專案啟動時需要的小程式
        <br />
        請輸入以下參數
        <br />
        1. 工程總工時
        <br />
        2. 起始日期
        <br />
        3. 周轉倍數
      </template>
    </Alert>
    <Form
      ref="formValidate"
      :model="formValidate"
      :rules="ruleValidate"
      :label-width="120"
      class="layout-form"
    >
      <FormItem label="工程總工時" prop="total_time_budget">
        <Input
          v-model="formValidate.total_time_budget"
          placeholder="工程總工時"
          style="width: 500px"
        ></Input>
      </FormItem>
      <FormItem label="起始日期" prop="start_date">
        <DatePicker
          type="date"
          placeholder="Select date"
          style="width: 500px"
          v-model="formValidate.start_date"
        />
      </FormItem>
      <FormItem label="周轉倍數" prop="turnrates">
        <Input
          v-model="formValidate.turnrates"
          placeholder="周轉倍數"
          style="width: 500px"
        ></Input>
      </FormItem>

      <Alert type="success" show-icon>計算結果如下</Alert>

      <FormItem label="建議完成日期" prop="suggest_finish_date">
        <Input
          v-model="dataView.suggest_finish_date"
          placeholder="建議完成日期"
          disabled
          style="width: 500px"
        ></Input>
      </FormItem>
      <FormItem label="轉換天數" prop="turn_into_days">
        <Input
          v-model="dataView.turn_into_days"
          placeholder="轉換天數"
          disabled
          style="width: 500px"
        ></Input>
      </FormItem>

      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')"
          >查詢</Button
        >
        <Button @click="handleReset('formValidate')" style="margin-left: 8px"
          >重置</Button
        >
      </FormItem>
    </Form>
  </div>
</template>

<script>
import { DatePicker } from "view-ui-plus";

export default {
  name: "Example3",
  data() {
    return {
      // return data
      dataView: {
        suggest_finish_date: "2023-09-26",
        turn_into_days: 0,
      },
      // form validata
      formValidate: {
        total_time_budget: 0,
        start_date: "2023-09-26",
        turnrates: 0,
      },
      // rule validate
      ruleValidate: {
        total_time_budget: [
          {
            required: true,
            type: Number,
            message: "The name cannot be empty",
            trigger: "blur",
          },
        ],
        start_date: [
          {
            required: true,
            type: "date",
            message: "Please select the date",
            trigger: "blur",
          },
        ],
        turnrates: [
          {
            required: true,
            type: Number,
            message: "Please select the date",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    addDays(date, days) {
      var result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    },
    handleSubmit() {
      // console.log(this.formValidate.total_time_budget);
      let a = this.formValidate.total_time_budget;
      this.dataView.turn_into_days = Math.trunc(a / 8); // 轉換天數
      // console.log(this.turn_into_days)
      var c = this.dataView.turn_into_days * this.formValidate.turnrates;
      // console.log(this.formValidate.start_date)
      this.dataView.suggest_finish_date = this.addDays(
        this.formValidate.start_date,
        c
      );
      // console.log(this.suggest_finish_date)
      let f_year = this.dataView.suggest_finish_date.getFullYear();
      let f_month = this.dataView.suggest_finish_date.getMonth() + 1;
      let f_date = this.dataView.suggest_finish_date.getDate();
      // console.log(f_year +"-"+ f_month +"-"+ f_date)
      this.dataView.suggest_finish_date = f_year + "-" + f_month + "-" + f_date;
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
  },
  components: { DatePicker },
};
</script>
