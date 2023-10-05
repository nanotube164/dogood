<template>
    <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="header-logo">
                <img class = "header-logo-location" src="../../../assets/logo10801-_1_.png"/>
            </div>
            <div class="header-nav">
                <MenuItem name="1">
                    <Icon style="visibility:hidden" type="ios-log-out"></Icon>
                    <span style="visibility:hidden">Item 1</span>
                </MenuItem>
                <MenuItem name="2">
                    <Icon style="visibility:hidden" type="ios-keypad"></Icon>
                    <span style="visibility:hidden">Item 1</span>
                </MenuItem>
                <MenuItem name="3">
                    <Icon style="visibility:hidden" type="ios-analytics"></Icon>
                    <span style="visibility:hidden">Item 1</span>
                </MenuItem>
                <MenuItem name="4">
                    <Icon type="ios-log-out"></Icon>
                    登出
                </MenuItem>
            </div>
        </Menu>
    </Header>
</template>
<script>
export default {
  name: "HeaderPart",
  setup() {},
};
</script>

<style>
.header-logo{
    width: 300px;
    height: 50px;
    background: #ffffff;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 5px;
    left: 5px;
}
.header-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.header-logo-location{
  width: 100%;
  height: 100%;
}

</style>
