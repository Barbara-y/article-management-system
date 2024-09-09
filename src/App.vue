<script setup>
import zhCn from 'element-plus/dist/locale/zh-Cn.mjs'
</script>

<template>
  <div>
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<style scoped></style>
