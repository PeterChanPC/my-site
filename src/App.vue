<template>
  <div>
    <GlobalSidebar ref="sidebar" />
    <GlobalHeader :toggleSidebar="sidebar?.toggleSidebar" />
  </div>
  <router-view />
</template>

<script setup lang="ts">
import GlobalHeader from '@/layout/global-header/global-header.vue';
import GlobalSidebar from '@/layout/global-sidebar/global-sidebar.vue';
import { useTemplateRef, watchEffect } from 'vue';
import { useThemeStore } from './stores/theme.store';

const sidebar = useTemplateRef('sidebar');
const themeStore = useThemeStore();

watchEffect(() => {
  document.body.style.setProperty('--theme', themeStore.theme);
});
</script>

<style lang="scss">
@use '@/styles/style';

body {
  margin: 0;
}

@container style(--theme: light) {
  #app {
    --bg-color: #{style.$bg-light};
    --bg-color-opague: #{style.$bg-light-opague};
    --txt-color: #{style.$txt-light};
  }
}

@container style(--theme: dark) {
  #app {
    --bg-color: #{style.$bg-dark};
    --bg-color-opague: #{style.$bg-dark-opague};
    --txt-color: #{style.$txt-dark};
  }
}

#app {
  @include style.transition((background-color, color), 100ms);
  container-type: normal;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  position: relative;
  overflow: hidden;
}
</style>