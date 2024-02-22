<template>
    <div class="non-property-table-page">
      <property-table :data="data" :columns="nonPropertyColumns" :search-function="searchFunction"
        ><template #header>
            Справочник действий
        </template>
        </property-table
      >
    </div>
  </template>
  
  <script setup>
  import { reactive, h } from 'vue'
  import { NButton, NIcon } from 'naive-ui'
  
  import { useProceedingsStore } from '../stores/useProceedingsStore.js'
  import PropertyTable from '../components/TablesPage/PropertyTable.vue'
  import FileLoader from '../components/LogsPage/FileLoader.vue'
  
  
  const nonPropertyData = useProceedingsStore().nonPropertyItems
  const searchFunction = useProceedingsStore().getNonPropertySearched;
  const data = [
    {
        action: 'Действие 1',
        result: 'Результат 1',
        date: '11-11-2011',
        files: h(FileLoader),
    },
    {
        action: 'Действие 2',
        result: 'Результат 2',
        date: '11-11-2011',
        files: h(FileLoader),
    },
    {
        action: 'Действие 3',
        result: 'Результат 3',
        date: '11-11-2011',
        files: h(FileLoader),
    }
  ];
  
  const nonPropertyColumns = reactive([
    {
      title: 'Действие',
      key: 'action',
    //   resizable: true,
    //   minWidth: 100,
    //   maxWidth: 300,
      sorter: 'default',
    },
    {
      title: 'Результат',
      key: 'result',
    //   resizable: true,
    //   minWidth: 100,
    //   maxWidth: 300,
      sorter: 'default'
    },
    {
      title: 'Контрольная дата',
      key: 'date',
    //   resizable: true,
    //   minWidth: 100,
    //   maxWidth: 300,
      sorter: 'default'
    },
    {
      title: 'Прикрепленные файлы',
      key: 'files',
      width: 200,
      sorter: 'default'
    },

  ])
  </script>
  
  <style>
  .non-property-table-page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  
  </style>
  