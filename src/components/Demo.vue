<template>
  <!-- <div class="demo">
    <Button type="primary" @click="handleClick">Welcome!</Button>
  </div> -->
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">
            <img class="logo-location" src="../assets/logo10801-_1_.png" />
          </div>
          <div class="layout-header-nav">
            <MenuItem name="1">
              <Icon style="visibility: hidden" type="ios-log-out"></Icon>
              <span style="visibility: hidden">Item 1</span>
            </MenuItem>
            <MenuItem name="2">
              <Icon style="visibility: hidden" type="ios-keypad"></Icon>
              <span style="visibility: hidden">Item 1</span>
            </MenuItem>
            <MenuItem name="3">
              <Icon style="visibility: hidden" type="ios-analytics"></Icon>
              <span style="visibility: hidden">Item 1</span>
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-log-out"></Icon>
              登出
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout :style="{ padding: '0 50px' }">
        <!-- 暫時不用麵包屑 -->
        <!-- <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb> -->
        <Content
          :style="{ padding: '24px 0', minHeight: '280px', background: '#fff' }"
          class="layout-mider-content"
        >
          <!-- <><> -->
          <!-- 這邊要 prop token，作為能看到 Layout 的憑證 -->
          <Layout>
            <Sider hide-trigger :style="{ background: '#fff' }" width="300px">
              <Menu
                active-name="1-2"
                theme="light"
                width="250px"
                :open-names="['1']"
              >
                <Submenu name="1">
                  <template #title>
                    <Icon type="ios-navigate"></Icon>
                    工事組工程案件管理平台
                  </template>
                  <MenuItem name="1-1">作業平台</MenuItem>
                  <MenuItem name="1-2">組務首頁</MenuItem>
                  <MenuItem name="1-3">其他設定</MenuItem>
                  <MenuItem name="1-4" @click="hi">Test Page</MenuItem>
                </Submenu>
                <!-- <Submenu name="2">
                                    <template #title>
                                        <Icon type="ios-keypad"></Icon>
                                        Item 2
                                    </template>
                                    <MenuItem name="2-1">Option 1</MenuItem>
                                    <MenuItem name="2-2">Option 2</MenuItem>
                                </Submenu>
                                <Submenu name="3">
                                    <template #title>
                                        <Icon type="ios-analytics"></Icon>
                                        Item 3
                                    </template>
                                    <MenuItem name="3-1">Option 1</MenuItem>
                                    <MenuItem name="3-2">Option 2</MenuItem>
                                </Submenu> -->
              </Menu>
            </Sider>

            <!-- 這邊要轉換頁面 -->

            <Content
              :style="{
                padding: '24px',
                minHeight: '280px',
                background: '#fff',
              }"
            >
                <!-- <Example2></Example2> -->
                <router-view></router-view>
            </Content>
            
          </Layout>
        </Content>
      </Layout>

      <Footer class="layout-footer-center"
        >1992-2023 &copy;
        <a href="https://en.fcfc-plastics.com/">Formosa Chemistry</a> 。Design
        by <a href="https://nicholascheng.netlify.app/">Cheng Kai, Cheng</a>
      </Footer>
    </Layout>
  </div>
</template>

<script>
import { resolveComponent } from "vue";
// import Example2 from "@/views/Example2.vue";

export default {
  name: "Demo",
  methods: {
    hi() {
      // window.alert("good to drink")
      let redirect = "/Example2";
      // redirect = this.$route.query.redirect;
      // window.alert(redirect);
      this.$router.push({ path: redirect });
    },
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    handleClick() {
      this.$Message.info("Welcome to View UI Plus Demo!");
    },
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `Name：${this.data[index].name}<br>Age：${this.data[index].age}<br>Address：${this.data[index].address}`,
      });
    },
    remove(index) {
      this.data.splice(index, 1);
    },
  },
  data() {
    return {
      columns: [
        {
          title: "項次",
          key: "P_ITEM_1",
          align: "center",
          width: 200,
          fixed: "left",
          filters: [
            {
              label: "Joe",
              value: 1,
            },
            {
              label: "John",
              value: 2,
            },
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            if (value === 1) {
              return row.name === "Joe";
            } else if (value === 2) {
              return row.name === "John Brown";
            }
          },
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
      data: [{ data: 10 }],
    };
  },
  mounted() {
    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push({
        key: i,
        P_ITEM_1: i + 1,
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
        P_ITEM_19: "M",
      });
    }
    data.push({
      total: 10,
    });
    this.data = data;
  },
  components: {
    // Example2
  }
};
</script>

<style lang="less" scoped>
.logo-location {
  width: 100%;
  height: 100%;
}
.layout-login {
  width: 300px;
  height: 50px;
  background: #ffffff;
  border-radius: 3px;
  float: right;
  position: relative;
  top: 5px;
  left: 5px;
}
.demo {
  color: lightcoral;
  font-size: @font-size;
  text-align: center;
  margin: 300px 0 0 0;
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 300px;
  height: 50px;
  background: #ffffff;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 5px;
  left: 5px;
}
.layout-form {
  width: 100%;
  height: 200px;
  background: #fff;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 20px;
  left: 0px;
}

.layout-mider-content {
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 20px;
  left: 0px;
}
.layout-header-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center {
  text-align: center;
}
.layout .ivu-layout-header {
  background: #191a23;
}
.layout-topMiddleBottom .ivu-menu-light {
  background: none;
  color: #fff;
}
</style>
