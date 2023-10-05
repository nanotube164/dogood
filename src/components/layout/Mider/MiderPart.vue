<template>
    <!-- <Layout :style="{padding: '0 50px'}"> -->
        <!-- 暫時不用麵包屑 -->
        <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}" class="mider-content">
            <!-- 這邊要 prop token，作為能看到 Layout 的憑證 -->
            <!-- <Layout> -->
                <SidePart/>
                <ContentPart/>
                565+
            <!-- </Layout> -->
        </Content>
    <!-- </Layout> -->
</template>


<script>
import SidePart from '@/components/layout/Mider/components/SidePart.vue'
import ContentPart from '@/components/layout/Mider/components/ContentPart.vue'

export default {
  name: 'MiderPart',
  setup() {
  },
  components: {
    SidePart,
    ContentPart
  }
}

</script>
<style>
.mider-content{
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 20px;
  left: 0px;
}
</style>