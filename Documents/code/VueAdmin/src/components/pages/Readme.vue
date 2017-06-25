<template>
  <div>
    <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item><i class="el-icon-setting"></i> 自述</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="content">
      {{ msg }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '这是一个开源的基于Vue.js 2.x系列 + Element UI 的后台管理系统解决方案'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
