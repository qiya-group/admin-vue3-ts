<template>
    系统菜单
    <router-view />
</template>
<script lang="ts" setup>

</script>

<route lang="yaml">
name: 系统菜单
path: /system
meta:
  requiresAuth: true
</route>