<template>
  <n-button class="property-table-page__add-button" @click="addNonPropertyItem">Добавить запись</n-button>
  <div class="non-property-table-page">
    <property-table :data="data" :columns="nonPropertyColumns" :search-function="searchFunction"
      >Реестр исполнительных производств неимущественного характера</property-table
    >
  </div>
</template>

<script setup>
import { reactive, h } from 'vue'
import { NButton } from 'naive-ui'

import { useProceedingsStore } from '../stores/useProceedingsStore.js'
import PropertyTable from '../components/TablesPage/PropertyTable.vue'
import MyCell from '../components/global/MyCell.vue'
import router from '../router'


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
const data = nonPropertyData.reduce((result, item) => {
  return [
    ...result,
    {
      key: item.id,
      id: h(MyCell, {
        onClick: () => {
          useProceedingsStore().choosenItem = item
          router.push('/item')
        },
        text: item.id
      }),
      key: item.id,
      col1: h(MyCell, {
        onClick: () => {
          useProceedingsStore().choosenItem = item
          router.push('/item')
        },
        text: item.col1
      }),
      key: item.id,
      judgmentName: h(MyCell, {
        onClick: () => {
          useProceedingsStore().choosenItem = item
          router.push('/item')
        },
        text: item.judgmentName
      }),
      key: item.id,
      caseId: h(MyCell, {
        onClick: () => {
          useProceedingsStore().choosenItem = item
          router.push('/item')
        },
        text: item.caseId
      }),
      key: item.id,
      applicant: h(MyCell, {
        onClick: () => {
          useProceedingsStore().choosenItem = item
          router.push('/item')
        },
        text: item.applicant
      }),
      key: item.id,
      responder: h(MyCell, {
        onClick: () => {
          useProceedingsStore().choosenItem = item
          router.push('/item')
        },
        text: item.responder
      }),
      key: item.id,
      subject: h(MyCell, {
        onClick: () => {
          useProceedingsStore().choosenItem = item
          router.push('/item')
        },
        text: item.subject
      }),
      key: item.id,
      actDate: h(MyCell, {
        onClick: () => {
          useProceedingsStore().choosenItem = item
          router.push('/item')
        },
        text: item.actDate
      }),
      key: item.id,
      execListDate: h(MyCell, {
        onClick: () => {
          useProceedingsStore().choosenItem = item
          router.push('/item')
        },
        text: item.execListDate
      }),
      key: item.id,
      receivingListDate: h(MyCell, {
        onClick: () => {
          useProceedingsStore().choosenItem = item
          router.push('/item')
        },
        text: item.receivingListDate
      }),
      key: item.id,
      requissites: h(MyCell, {
        onClick: () => {
          useProceedingsStore().choosenItem = item
          router.push('/item')
        },
        text: item.requissites
      })
    }
  ]
}, [])

const nonPropertyColumns = reactive([
  {
    title: 'ID',
    key: 'id',
    resizable: true,
    minWidth: 100,
    maxWidth: 300,
    sorter: 'default'
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
</script>

<style>
.non-property-table-page {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #EDEDE9;
}
.property-table-page__add-button {
  width: 300px;
  background: #EDEDE9;
}

</style>
