<template>
  <div class="app">
    <NConfigProvider :theme-overrides="appThemeOverrides">
      <the-header></the-header>
      <n-space class="app__space" vertical>
        <n-layout has-sider>
          <n-layout-sider
            bordered
            collapse-mode="width"
            :collapsed-width="64"
            :width="240"
            :collapsed="collapsed"
            show-trigger
            @collapse="collapsed = true"
            @expand="collapsed = false"
          >
            <n-menu
              :collapsed="collapsed"
              :collapsed-width="64"
              :collapsed-icon-size="22"
              :options="menuOptions"
            />
          </n-layout-sider>
          <n-layout>
            <RouterView />
          </n-layout>
        </n-layout>
      </n-space>
  </NConfigProvider>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { h, ref, defineComponent, onMounted } from 'vue'
import { NIcon, NMenu, NLayout, NLayoutSider, NSwitch, NSpace, NConfigProvider } from 'naive-ui'

import TheHeader from './components/global/TheHeader.vue'
import { useUserStore } from './stores/useUserStore'
import { useProceedingsStore } from './stores/useProceedingsStore'

import { useRouter } from 'vue-router'

onMounted(() => {
  useProceedingsStore().fetchData();
  useUserStore().fetchDepartments();
  useUserStore().fetchUsers();
  useRouter().push('/auth')
})

const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'property-table'
          }
        },
        { default: () => 'Реестр исполнительных производств имущественного характера' }
      )
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'non-property-table'
          }
        },
        { default: () => 'Реестр исполнительных производств неимущественного характера' }
      )
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'user-roles'
          }
        },
        { default: () => 'Управление ролями пользователей' }
      )
  },
]

const collapsed = ref(true)

const appThemeOverrides = {
  common: {
    primaryColor: '#D5BDAF',
    primaryColorHover: '#D5BDAF',
    cardColor: '#EDEDE9',
    borderRadius: '12px',

  }
}
</script>

<style>
.app {
  width: 100%;
  height: 1800px;
  background: #EDEDE9;
}

/* .app__space {
  width: 100vh;
} */
</style>
