<template>
  <n-button class="add-button" @click="addNonPropertyItem" style="margin-left: 20px;">
    <template #icon><add_icon></add_icon></template>
    Добавить запись
  </n-button>
  <div class="non-property-table-page">
    <property-table :data="data" :columns="nonPropertyColumns" :search-function="searchFunction"
      >Реестр исполнительных производств неимущественного характера</property-table
    >
  </div>
</template>

<script setup>
import { reactive, h } from 'vue'
import { NButton, NIcon } from 'naive-ui'

import { useProceedingsStore } from '../stores/useProceedingsStore.js'
import PropertyTable from '../components/TablesPage/PropertyTable.vue'
import MyCell from '../components/global/MyCell.vue'
import router from '../router'
import AddIcon from '../components/icons/AddIcon.Vue'


const addNonPropertyItem = () => {
  useProceedingsStore().choosenItem = {
        key: Math.ceil(Math.random() * 10000000),
        id: Math.ceil(Math.random() * 10000000),
        col1: '',
        judgmentName: '',
        caseId: '',
        applicant: '',
        responder: '',
        subject: '',
        actDate: '',
        execListDate: '',
        receivingListDate: '',
        requissites: ''
  };
  useProceedingsStore().nonPropertyItems.push(useProceedingsStore().choosenItem)
  router.push('/item')
}


const nonPropertyData = useProceedingsStore().nonPropertyItems
const searchFunction = useProceedingsStore().getNonPropertySearched;
const data = nonPropertyData.reduce((acc, item) => {
  return [
    ...acc,
    {
      key: item.id,
      id: h(MyCell, {
        onClick: () => {
          console.log(item);
          useProceedingsStore().choosenItem = item
          router.push('/item')
        },
        text: 'Подробнее'
      }),
      col1: item.col1,
      judgmentName: item.judgmentName,
      caseId: item.caseId,
      applicant: item.applicant,
      responder: item.responder,
      subject: item.subject,
      actDate: item.actDate,
      execListDate: item.execListDate,
      receivingListDate: item.receivingListDate,
      requissites: item.requissites,
    }
  ]
}, []);

const nonPropertyColumns = reactive([
  {
    title: '',
    key: 'id',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
  },
  {
    title: 'Ответственный орган администрации',
    key: 'col1',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
    sorter: 'default'
  },
  {
    title: 'Наименование суда',
    key: 'judgmentName',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
    sorter: 'default'
  },
  {
    title: 'Номер дела',
    key: 'caseId',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
    sorter: 'default'
  },
  {
    title: 'Истец',
    key: 'applicant',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
    sorter: 'default'
  },
  {
    title: 'Ответчик',
    key: 'responder',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
    sorter: 'default'
  },
  {
    title: 'Предмет спора',
    key: 'subject',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
    sorter: 'default'
  },
  {
    title: 'Дата вынесенного судебного акта',
    key: 'actDate',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
    sorter: 'default'
  },
  {
    title: 'Дата заказа исполнительного листа',
    key: 'execListDate',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
    sorter: 'default'
  },
  {
    title: 'Дата получения исполнительного листа',
    key: 'receivingListDate',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
    sorter: 'default'
  },
  {
    title: 'Реквизиты исполнительного документа',
    key: 'requissites',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
    sorter: 'default'
  }
])
function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const add_icon = renderIcon(AddIcon);
</script>

<style>
.non-property-table-page {
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>
