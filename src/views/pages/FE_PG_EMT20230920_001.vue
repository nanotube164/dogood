<template>
    <div>
      <Form
        ref="formValidate"
        :model="formValidate"
        :rules="ruleValidate"
        :label-width="80"
        class="layout-form"
      >
        <FormItem label="材料編號" prop="materialId">
          <Input
            v-model="formValidate.materialId"
            placeholder="請輸入工程材料編號"
          ></Input>
        </FormItem>
        <FormItem label="中文品名" prop="chineseName">
          <Input v-model="formValidate.chineseName" placeholder="請輸入中文品名"></Input>
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
  
      <Table :columns="materialColumns" :data="materialData"></Table>
      <Page
        :total="dataCount"
        :page-size="pageSize"
        show-total
        @on-change="changepage"
      ></Page>
    </div>
  </template>
  
  <script>
  // mock data
  let mockData = {
    materials: [
      {
        key: 1,
        P_ITEM_1: 2,
        P_ITEM_2: "BONBXE58",
        P_ITEM_3: "40",
        P_ITEM_4: "24",
        P_ITEM_5: 2035,
        P_ITEM_6: "Lake Street 42",
        P_ITEM_7: "SoftLake Co",
        P_ITEM_8: "M",
        P_ITEM_9: "M",
        P_ITEM_10: "M",
        P_ITEM_11: "M",
        P_ITEM_12: "M",
        P_ITEM_13: "M",
        P_ITEM_14: "M",
        P_ITEM_15: "M",
        P_ITEM_16: "M",
        P_ITEM_17: "M",
        P_ITEM_18: "M",
        P_ITEM_19: "你真的好棒的",
      },
      {
        key: 2,
        P_ITEM_1: 3,
        P_ITEM_2: "FLAMGK52",
        P_ITEM_3: "Lake Park",
        P_ITEM_4: "C",
        P_ITEM_5: 2035,
        P_ITEM_6: "Lake Street 42",
        P_ITEM_7: "SoftLake Co",
        P_ITEM_8: "M",
        P_ITEM_9: "M",
        P_ITEM_10: "M",
        P_ITEM_11: "M",
        P_ITEM_12: "M",
        P_ITEM_13: "M",
        P_ITEM_14: "M",
        P_ITEM_15: "M",
        P_ITEM_16: "M",
        P_ITEM_17: "M",
        P_ITEM_18: "M",
        P_ITEM_19: "你真的好棒的",
      },
      {
        key: 2,
        P_ITEM_1: 3,
        P_ITEM_2: "fsadfasf",
        P_ITEM_3: "Lake Park",
        P_ITEM_4: "C",
        P_ITEM_5: 2035,
        P_ITEM_6: "Lake Street 42",
        P_ITEM_7: "SoftLake Co",
        P_ITEM_8: "M",
        P_ITEM_9: "M",
        P_ITEM_10: "M",
        P_ITEM_11: "M",
        P_ITEM_12: "M",
        P_ITEM_13: "M",
        P_ITEM_14: "M",
        P_ITEM_15: "M",
        P_ITEM_16: "M",
        P_ITEM_17: "M",
        P_ITEM_18: "M",
        P_ITEM_19: "你真的好棒的",
      },
      {
        key: 2,
        P_ITEM_1: 3,
        P_ITEM_2: "fsadfasf",
        P_ITEM_3: "Lake Park",
        P_ITEM_4: "C",
        P_ITEM_5: 2035,
        P_ITEM_6: "Lake Street 42",
        P_ITEM_7: "SoftLake Co",
        P_ITEM_8: "M",
        P_ITEM_9: "M",
        P_ITEM_10: "M",
        P_ITEM_11: "M",
        P_ITEM_12: "M",
        P_ITEM_13: "M",
        P_ITEM_14: "M",
        P_ITEM_15: "M",
        P_ITEM_16: "M",
        P_ITEM_17: "M",
        P_ITEM_18: "M",
        P_ITEM_19: "你真的好棒的",
      },
      {
        key: 2,
        P_ITEM_1: 3,
        P_ITEM_2: "fsadfasf",
        P_ITEM_3: "Lake Park",
        P_ITEM_4: "C",
        P_ITEM_5: 2035,
        P_ITEM_6: "Lake Street 42",
        P_ITEM_7: "SoftLake Co",
        P_ITEM_8: "M",
        P_ITEM_9: "M",
        P_ITEM_10: "M",
        P_ITEM_11: "M",
        P_ITEM_12: "M",
        P_ITEM_13: "M",
        P_ITEM_14: "M",
        P_ITEM_15: "M",
        P_ITEM_16: "M",
        P_ITEM_17: "M",
        P_ITEM_18: "M",
        P_ITEM_19: "你真的好棒的",
      },
  
      {
        key: 2,
        P_ITEM_1: 3,
        P_ITEM_2: "fsadfasf",
        P_ITEM_3: "Lake Park",
        P_ITEM_4: "C",
        P_ITEM_5: 2035,
        P_ITEM_6: "Lake Street 42",
        P_ITEM_7: "SoftLake Co",
        P_ITEM_8: "M",
        P_ITEM_9: "M",
        P_ITEM_10: "M",
        P_ITEM_11: "M",
        P_ITEM_12: "M",
        P_ITEM_13: "M",
        P_ITEM_14: "M",
        P_ITEM_15: "M",
        P_ITEM_16: "M",
        P_ITEM_17: "M",
        P_ITEM_18: "M",
        P_ITEM_19: "你真的好棒的",
      },
      {
        key: 2,
        P_ITEM_1: 3,
        P_ITEM_2: "fsadfasf",
        P_ITEM_3: "Lake Park",
        P_ITEM_4: "C",
        P_ITEM_5: 2035,
        P_ITEM_6: "Lake Street 42",
        P_ITEM_7: "SoftLake Co",
        P_ITEM_8: "M",
        P_ITEM_9: "M",
        P_ITEM_10: "M",
        P_ITEM_11: "M",
        P_ITEM_12: "M",
        P_ITEM_13: "M",
        P_ITEM_14: "M",
        P_ITEM_15: "M",
        P_ITEM_16: "M",
        P_ITEM_17: "M",
        P_ITEM_18: "M",
        P_ITEM_19: "你真的好棒的",
      },
      {
        key: 2,
        P_ITEM_1: 3,
        P_ITEM_2: "fsadfasf",
        P_ITEM_3: "Lake Park",
        P_ITEM_4: "C",
        P_ITEM_5: 2035,
        P_ITEM_6: "Lake Street 42",
        P_ITEM_7: "SoftLake Co",
        P_ITEM_8: "M",
        P_ITEM_9: "M",
        P_ITEM_10: "M",
        P_ITEM_11: "M",
        P_ITEM_12: "M",
        P_ITEM_13: "M",
        P_ITEM_14: "M",
        P_ITEM_15: "M",
        P_ITEM_16: "M",
        P_ITEM_17: "M",
        P_ITEM_18: "M",
        P_ITEM_19: "你真的好棒的",
      },
      {
        key: 2,
        P_ITEM_1: 3,
        P_ITEM_2: "fsadfasf",
        P_ITEM_3: "Lake Park",
        P_ITEM_4: "C",
        P_ITEM_5: 2035,
        P_ITEM_6: "Lake Street 42",
        P_ITEM_7: "SoftLake Co",
        P_ITEM_8: "M",
        P_ITEM_9: "M",
        P_ITEM_10: "M",
        P_ITEM_11: "M",
        P_ITEM_12: "M",
        P_ITEM_13: "M",
        P_ITEM_14: "M",
        P_ITEM_15: "M",
        P_ITEM_16: "M",
        P_ITEM_17: "M",
        P_ITEM_18: "M",
        P_ITEM_19: "你真的好棒的",
      },
      {
        key: 2,
        P_ITEM_1: 3,
        P_ITEM_2: "fsadfasf",
        P_ITEM_3: "Lake Park",
        P_ITEM_4: "C",
        P_ITEM_5: 2035,
        P_ITEM_6: "Lake Street 42",
        P_ITEM_7: "SoftLake Co",
        P_ITEM_8: "M",
        P_ITEM_9: "M",
        P_ITEM_10: "M",
        P_ITEM_11: "M",
        P_ITEM_12: "M",
        P_ITEM_13: "M",
        P_ITEM_14: "M",
        P_ITEM_15: "M",
        P_ITEM_16: "M",
        P_ITEM_17: "M",
        P_ITEM_18: "M",
        P_ITEM_19: "你真的好棒的",
      },
      {
        key: 2,
        P_ITEM_1: 3,
        P_ITEM_2: "fsadfasf",
        P_ITEM_3: "Lake Park",
        P_ITEM_4: "C",
        P_ITEM_5: 2035,
        P_ITEM_6: "Lake Street 42",
        P_ITEM_7: "SoftLake Co",
        P_ITEM_8: "M",
        P_ITEM_9: "M",
        P_ITEM_10: "M",
        P_ITEM_11: "M",
        P_ITEM_12: "M",
        P_ITEM_13: "M",
        P_ITEM_14: "M",
        P_ITEM_15: "M",
        P_ITEM_16: "M",
        P_ITEM_17: "M",
        P_ITEM_18: "M",
        P_ITEM_19: "你真的好棒的",
      },
      {
        key: 2,
        P_ITEM_1: 3,
        P_ITEM_2: "fsadfasf",
        P_ITEM_3: "Lake Park",
        P_ITEM_4: "C",
        P_ITEM_5: 2035,
        P_ITEM_6: "Lake Street 42",
        P_ITEM_7: "SoftLake Co",
        P_ITEM_8: "M",
        P_ITEM_9: "M",
        P_ITEM_10: "M",
        P_ITEM_11: "M",
        P_ITEM_12: "M",
        P_ITEM_13: "M",
        P_ITEM_14: "M",
        P_ITEM_15: "M",
        P_ITEM_16: "M",
        P_ITEM_17: "M",
        P_ITEM_18: "M",
        P_ITEM_19: "你真的好棒的",
      },
      {
        key: 2,
        P_ITEM_1: 3,
        P_ITEM_2: "fsadfasf",
        P_ITEM_3: "Lake Park",
        P_ITEM_4: "C",
        P_ITEM_5: 2035,
        P_ITEM_6: "Lake Street 42",
        P_ITEM_7: "SoftLake Co",
        P_ITEM_8: "M",
        P_ITEM_9: "M",
        P_ITEM_10: "M",
        P_ITEM_11: "M",
        P_ITEM_12: "M",
        P_ITEM_13: "M",
        P_ITEM_14: "M",
        P_ITEM_15: "M",
        P_ITEM_16: "M",
        P_ITEM_17: "M",
        P_ITEM_18: "M",
        P_ITEM_19: "你真的好棒的",
      },
      {
        key: 2,
        P_ITEM_1: 3,
        P_ITEM_2: "fsadfasf",
        P_ITEM_3: "Lake Park",
        P_ITEM_4: "C",
        P_ITEM_5: 2035,
        P_ITEM_6: "Lake Street 42",
        P_ITEM_7: "SoftLake Co",
        P_ITEM_8: "M",
        P_ITEM_9: "M",
        P_ITEM_10: "M",
        P_ITEM_11: "M",
        P_ITEM_12: "M",
        P_ITEM_13: "M",
        P_ITEM_14: "M",
        P_ITEM_15: "M",
        P_ITEM_16: "M",
        P_ITEM_17: "M",
        P_ITEM_18: "M",
        P_ITEM_19: "你真的好棒的",
      },
      {
        key: 2,
        P_ITEM_1: 3,
        P_ITEM_2: "fsadfasf",
        P_ITEM_3: "Lake Park",
        P_ITEM_4: "C",
        P_ITEM_5: 2035,
        P_ITEM_6: "Lake Street 42",
        P_ITEM_7: "SoftLake Co",
        P_ITEM_8: "M",
        P_ITEM_9: "M",
        P_ITEM_10: "M",
        P_ITEM_11: "M",
        P_ITEM_12: "M",
        P_ITEM_13: "M",
        P_ITEM_14: "M",
        P_ITEM_15: "M",
        P_ITEM_16: "M",
        P_ITEM_17: "M",
        P_ITEM_18: "M",
        P_ITEM_19: "你真的好棒的",
      },
    ],
  };
  
  export default {
    name: "fepgemt20230920001",
    data() {
      return {
        //---------------------------------回傳資料的部分----------------------------------------
        // default value
        ajaxMaterialData: [],
        dataCount: 0, // total data
        pageSize: 10, // pagination
        // column title
        materialColumns: [
          {
            title: "項次",
            key: "P_ITEM_1",
            align: "center",
            width: 200,
            fixed: "left",
          },
          {
            title: "Other",
            align: "center",
            children: [
              {
                title: "材料編號",
                key: "P_ITEM_2",
                align: "center",
                width: 200,
                sortable: true,
              },
              {
                title: "設計終版數量",
                key: "P_ITEM_3",
                align: "center",
                width: 200,
                sortable: true,
              },
              {
                title: "預算量工料分析量",
                key: "P_ITEM_4",
                align: "center",
                width: 200,
                sortable: true,
              },
              {
                title: "預算編列廠商帶料量",
                key: "P_ITEM_5",
                align: "center",
                width: 200,
                sortable: true,
              },
              {
                title: "調撥入本工號數量",
                key: "P_ITEM_6",
                align: "center",
                width: 200,
                sortable: true,
              },
              {
                title: "代用料號",
                key: "P_ITEM_7",
                align: "center",
                width: 200,
                sortable: true,
              },
              {
                title: "代用數量",
                key: "P_ITEM_8",
                align: "center",
                width: 200,
                sortable: true,
              },
              {
                title: "請購量",
                key: "P_ITEM_9",
                align: "center",
                width: 200,
                sortable: true,
              },
              {
                title: "訂購量",
                key: "P_ITEM_10",
                align: "center",
                width: 200,
                sortable: true,
              },
              {
                title: "差異量",
                key: "P_ITEM_11",
                align: "center",
                width: 200,
                sortable: true,
              },
              {
                title: "已交貨量",
                key: "P_ITEM_12",
                align: "center",
                width: 200,
                sortable: true,
              },
              {
                title: "已領用",
                key: "P_ITEM_13",
                align: "center",
                width: 200,
                sortable: true,
              },
              {
                title: "庫存量",
                key: "P_ITEM_14",
                align: "center",
                width: 200,
                sortable: true,
              },
              {
                title: "可轉為施工中餘料量",
                key: "P_ITEM_15",
                align: "center",
                width: 200,
                sortable: true,
              },
              {
                title: "目前可調撥量",
                key: "P_ITEM_16",
                align: "center",
                width: 200,
                sortable: true,
              },
              {
                title: "已調撥至他案成功量",
                key: "P_ITEM_17",
                align: "center",
                width: 200,
                sortable: true,
              },
              {
                title: "本案實際使用數量",
                key: "P_ITEM_18",
                align: "center",
                width: 200,
                sortable: true,
              },
            ],
          },
          {
            title: "中文品名",
            key: "P_ITEM_19",
            align: "center",
            width: 400,
            fixed: "right",
          },
        ],
        materialData: [], // data
        //------------------------------------------------------------------------------------
        //----------------------------------輸入查詢檢查------------------------------------
        // form validata
        formValidate: {
          materialId: "",
          chineseName: "",
        },
        // rule validate
        ruleValidate: {
          materialId: [
            {
              required: true,
              message: "材料編號不得為空",
              trigger: "blur",
            },
          ],
          chineseName: [
            {
              required: true,
              message: "中文品名不得為空",
              trigger: "blur",
            },
          ],
        },
        //------------------------------------------------------------------------------------
      };
    },
    methods: {
      //---------------------------------------查詢函式----------------------------------------
      handleListApproveMaterial() {
        this.ajaxMaterialData = mockData.materials; // fetch API for data
        this.dataCount = mockData.materials.length; // count total API Data
  
        if (mockData.materials.length < this.pageSize) {
          // if total API Data less than page size
          this.materialData = this.ajaxMaterialData; // put all API data to history data array
        } else {
          this.materialData = this.ajaxMaterialData.slice(0, this.pageSize); // shallow copy from 0 to pageSize
        }
      },
      changepage(index) {
        var _start = (index - 1) * this.pageSize; // data start from which index
        var _end = index * this.pageSize; // end at which index
        this.materialData = this.ajaxMaterialData.slice(_start, _end); // shallow copy from start to end
      },
      //---------------------------------------查詢函式----------------------------------------
      handleSubmit (materialId, chineseName) {
        this.$refs[materialId].validate((valid) => {
            if (valid) {
                this.$refs[chineseName].validate((valid) => {
                  if (valid) {
                    

                    this.$Message.success('查詢成功!');
                  }  
                  else {
                    this.$Message.error('輸入內容格式有誤!');
                  }
                })
            } else {
                this.$Message.error('輸入內容格式有誤!');
            }
        })
      },
      //---------------------------------------重置函式----------------------------------------
      handleReset (materialId, chineseName) {
          this.$refs[materialId].resetFields();
          this.$refs[chineseName].resetFields();
      },
      //------------------------------------------------------------------------------------
      //-------------------------------- API 取回追蹤材料------------------------------------
      // async fetchUserInfo(id) {
      //   return await fetch("https://jsonplaceholder.typicode.com/users/" + id)
      //   .then((response) => response.json())
      //   .then((json) => json);
      // }
    },
    created() {
      this.handleListApproveMaterial(); // execute this function first to fetch original data
    },
  };
  </script>
  