<template>
  <div class="app">
    <NConfigProvider :theme-overrides="appThemeOverrides">
      <the-header></the-header>
      
      <n-space class="app__space" vertical v-if="$route.fullPath != '/auth'">
        <n-layout has-sider>
          <n-layout-sider
            class="sider"
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
              class="menu"
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
      <RouterView v-else/>
  </NConfigProvider>
  </div>
</template>

<script setup>
import { RouterLink, RouterView} from 'vue-router'
import { h, ref, defineComponent, onMounted } from 'vue'
import { NIcon, NMenu, NLayout, NLayoutSider, NSwitch, NSpace, NConfigProvider } from 'naive-ui'

import TheHeader from './components/global/TheHeader.vue'
import { useUserStore } from './stores/useUserStore'
import { useProceedingsStore } from './stores/useProceedingsStore'

import ListIcon from './components/icons/ListIcon.vue';

import { useRouter } from 'vue-router'
import GroupIcon from './components/icons/GroupIcon.vue'
import LogsIcon from './components/icons/LogsIcon.vue'

onMounted(() => {
  // useProceedingsStore().fetchData();
  // useUserStore().fetchDepartments();
  // useUserStore().fetchUsers();
//   // useRouter().push('/auth')
})

function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

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
        { default: () => 'Имущественные' }
      ),
      icon: renderIcon(ListIcon),
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
        { default: () => 'Неимущественные' }
      ),
      icon: renderIcon(ListIcon),
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
      ),
      icon: renderIcon(GroupIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'logs'
          }
        },
        { default: () => 'Справочник' }
      ),
      icon: renderIcon(LogsIcon),
  },
  
]

const collapsed = ref(true)

const appThemeOverrides = {
  common: {
    primaryColor: '#223843',
    primaryColorHover: '#223843',
    cardColor: '#EFF1F3',
    borderRadius: '12px',

  }
}
</script>

<style>
.app {
  width: 100%;
  height: 1800px;
  background: #EFF1F3;
}

.sider {
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  margin-right: 20px;

  /* margin-right: 25px; */
  /* height: 100%; */
  /* position: fixed; */
}

.n-layout {
  background-color: #EFF1F3;
}

.add-button {
  width: 200px;
  color: #EFF1F3;
  background: #223843;
}
</style>
