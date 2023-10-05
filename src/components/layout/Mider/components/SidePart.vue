<template>
    <Sider hide-trigger :style="{ background: '#fff' }" width="300px">
        <Menu active-name="1-2" theme="light" width="250px" :open-names="['1']">
            <Submenu name="1">
                <template #title>
                    <Icon type="ios-navigate"></Icon>
                    工事組工程案件管理平台
                </template>
                <MenuItem name="1-1">作業平台</MenuItem>
                <MenuItem name="1-2">組務首頁</MenuItem>
                <MenuItem name="1-3">其他設定</MenuItem>
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
</template>

<script>
export default {
  name: 'SidePart',
  setup() {
  },

}

</script>