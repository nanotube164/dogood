<template>
  <div class="layout">
    <Layout>
      <!-- Header part start-->
      <Header>
        <Menu mode="horizontal" theme="light" active-name="1">
          <div class="layout-header-logo" @click="go2Home">
            <img class="layout-header-logo-location" src="../assets/dogood.png" />
          </div>
          <div class="layout-header-logo" @click="go2Home">
            <img class="layout-header-logo-location" src="../assets/dogood.png" />
          </div>
          <div class="layout-header-logo" @click="go2Home">
            <img class="layout-header-logo-location" src="../assets/dogood.png" />
          </div>
          <div class="layout-header-nav">
            <MenuItem name="1" @click="logout">
              <Icon type="ios-person"></Icon>
              <Span>Hi, This is Nicholas.</Span>
            </MenuItem>
            <MenuItem name="3">
              <Icon style="visibility: hidden" type="ios-log-out"></Icon>
              <span style="visibility: hidden">Item 1</span>
            </MenuItem>
            <MenuItem name="2">
              <Icon style="visibility: hidden" type="ios-keypad"></Icon>
              <span style="visibility: hidden">Item 1</span>
            </MenuItem>
            <!-- <MenuItem name="3">
              <Icon style="visibility: hidden" type="ios-analytics"></Icon>
              <span style="visibility: hidden">Item 1</span>
            </MenuItem> -->

          </div>
        </Menu>
      </Header>
      <!-- Header part end -->
      <Layout :style="{ padding: '0 50px'  }" class="layout-mider">
        <Content
          :style="{ padding: '24px 0', minHeight: '280px', background: '#fff' }"
          class="layout-mider-content"
        >
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
                    工具小寶箱
                  </template>   
                  <!-- 登入後會在全局紀錄 token 和 authority，來決定是否 show -->
                  <!-- <MenuItem name="1-1" @click="go2pg1">fepgemt20230920001</MenuItem> -->
                  <!-- <MenuItem name="1-2" @click="go2pg2">fepgemt20230920000</MenuItem> -->
                  <MenuItem name="1-3" @click="go2pg3">周轉倍數計算機</MenuItem>
                </Submenu>
              </Menu>
            </Sider>
            <Content
              :style="{
                padding: '24px',
                minHeight: '280px',
                background: '#fff',
              }"
            >
                <!-- 這邊要轉換業務頁面 -->
                <router-view></router-view>
            </Content>
          </Layout>
        </Content>
      </Layout>
      <!-- Footer part -->
      <Footer class="layout-footer-center"
        > Work will make you die soon. Understand?
      </Footer>
    </Layout>
  </div>
</template>

<script>

export default {
  name: "AppMain",
  methods: {
    //----------------------------------Header-------------------------
    // 點擊 Logo 出現的行為
    go2Home() {
      window.alert("hi");
    },
    logout() {
      window.alert("You cannot do this. Be obidient, ok!")
    },
    // ---------------------------------Layout-------------------------
    // 導向首頁頁面
    go2pg1() {
      let redirect = "/fepgemt20230920001";
      this.$router.push({ path: redirect });
    },
    // 導向設定頁面
    go2pg2() {
      let redirect = "/#";
      this.$router.push({ path: redirect });
    },
    // 導向設定頁面3
        go2pg3() {
      let redirect = "/tmlmcal";
      this.$router.push({ path: redirect });
    },
  },
  data() {
    return {}
  },

};
</script>

<style lang="less" scoped>
.layout-header-logo-location {
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
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  // min-height: 100%;
}
.layout-header-logo {
  width: 50px;
  height: 50px;
  background: #ffffff;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 5px;
  left: 5px;
}

.layout-mider-content {
  width: 100%;
  height: 960px;
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
  height: 100px; /*設定footer本身高度*/
  margin-top: 50px; /*隨footer高度需做調整*/
}
.layout .ivu-layout-header {
  background: #fff;
}
.layout-topMiddleBottom .ivu-menu-light {
  background: none;
  color: #fff;
}
.layout-mider{
  // padding-bottom: 50px;
}
</style>

