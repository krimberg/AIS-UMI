<template>
  <div class="property-item-page">
  <!-- <h3>{{ field }}</h3>s -->
  <div class="property-item-page__fields"
      
      v-for="(value1, key1) in mainFields" :key="key1">
      <n-space horizontal justify="space-between" align="center" class="property-item-page__space"
      v-for="(value2, key2) in value1" :key="key2"
      >
      <n-h3 class="property-item-page__span">{{ value2 }}</n-h3>
      <n-select
      v-if="key1==='administration'"
      class="property-item-page__select"
      :value="item[key1][key2]"
      @update:value="(value) => (item[key1][key2] = value)"
      :options="deps"
      >{{ item[key1][key2] }}</n-select>
      <n-select
      v-else-if="key2==='judgmentName'"
      :value="item[key1][key2]"
      class="property-item-page__select"
      :options="judgments"
      @update:value="(value) => (item[key1][key2] = value)"
      >{{ item[key1][key2] }}</n-select>
      <n-input
      v-else
      class="property-item-page__input"
      :value="item[key1][key2]"
      :disabled="role === 'USER'"
      @update:value="(value) => (item[key1][key2] = value)"
      />
      <!-- <p>{{ item[key] }}</p> -->
    </n-space>
</div>
</div>


<NButton class="add-button">
    <template #icon><add_icon></add_icon></template>
    Сохранить</NButton>
    <n-button class="add-button"
  style="margin-left: 20px;"
  @click="showModal=true">
        <template #icon><add_icon></add_icon></template>
        Добавить судебное дело
    </n-button>
  <n-modal v-model:show="showModal">
      <n-card
        style="width: 600px"
        title="Добавить судебное дело"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
      >
      <div class="JudgmentData"
      style="margin-bottom: 15px;"
      v-for="(judgmentValue, judgmentKey) in judgmentFields" :key="judgmentKey"
      >
      <n-h3>{{ judgmentValue }}</n-h3>
      <n-input
      placeholder="Введите данные"
      :value="tempCourtCase[judgmentKey]"
      @update:value="(value) => (tempCourtCase[judgmentKey] = value)"
      />
      </div>
        
        <template #footer>
          <n-button @click="addCourtCase">Добавить судебное дело</n-button>
        </template>
      </n-card>
    </n-modal>
    






<div class="property-item-page__court-cases"
    v-for="courtCase in item.courtCases" :key="courtCase.id"
    >
    <br>
    <br>
    <n-space horizontal justify="space-between" align="center" class="property-item-page__space"
    v-for="(value, key) in courtCase" :key="key"
    >
    <n-h3 class="property-item-page__span">{{ judgmentFields[key] }}</n-h3>
    <n-input
    class="property-item-page__input"
    :value="courtCase[key]"
    :disabled="role === 'USER'"
    @update:value="(newValue) => (courtCase[key] = newValue)"
    />
    <!-- <p>{{ item[key] }}</p> -->
</n-space>
</div>
  </template>
  
  <script setup lang="ts">
  import { ref, h, reactive } from 'vue';
  import { NSpace, NH3, NButton, NInput, NSelect, NIcon, NModal, NCard } from 'naive-ui'
  import { useUserStore } from '../../src/stores/useUserStore'
  
  import { useProceedingsStore } from '../stores/useProceedingsStore'
  import AddIcon from '../components/icons/AddIcon.vue'
  
  const showModal = ref(false);
  
  const addJudgment = () => {
    showModal.value = false;
  }
  
  function renderIcon (icon) {
      return () => h(NIcon, null, { default: () => h(icon) })
  }
  const add_icon = renderIcon(AddIcon);
  
  const role = useUserStore().role
  const item = useProceedingsStore().choosenItem
  const mainFields = {
    propertyItem:
    {
        writOfExecutionOrderDate: 'Дата заказа исполнительного листа',
        writOfExecutionReceivingDate: ' Дата получения исполнительного листа',
        docOfExecutionRequisites: 'Реквизиты исполнительного документа ',
        transferDateOfExecutionWrit: 'Дата передачи исполнительного листа',
        division: 'Наименование структурного подразделения УФССП',
        executionPeriod: 'Срок исполнения исполнительного производства',
        recoverer: 'Взыскатель ',
        deptor: 'Должник',
        dateOfInitiation: 'Дата возбуждения исполнительного производства ',
        proceedingNumber: 'Номер исполнительного производства',
        proceedingSubject: 'Предмет исполнительного производства',
        proceedingEndDate: 'Дата окончания исполнительного производства',
        proceedingEndCauses: 'Основания окончания исполнительного производства',
        bailifContacts: 'Контактные данные судебного пристава',
        note: 'Примечание ',
    },
    penalties:
    {
        baseDept: 'Основной долг',
        penalties: 'Пени, штрафы, неустойка',
        judgmentCosts: 'Судебные расходы',
        total: 'Всего',
    },
    administration:
    {
        name: 'Ответственный орган администрации МО г. Краснодар',

    },
}
  const judgmentFields = {
  
      judgmentName: 'Наименование суда',
      caseId: 'Номер дела',
      applicant: 'Истец',
      responder: 'Ответчик',
      subject: 'Предмет спора',
      actDate: 'Дата вынесения судебного акта',
  }
  
  const deps = [
  {
      label: 'ООП по прикубанскому округу г Краснодара главного управления федеральной служюы судебных приставов...',
      value: 'ООП по прикубанскому округу г Краснодара главного управления федеральной служюы судебных приставов...'
  },
  {
      label: 'Наименование 2',
      value: "Наименование 2"
  },
  {
      label: 'Наименование 3',
      value: 'Наименование 3',
  },
  ]
//   const choosenDep = ref('ООП по прикубанскому округу г Краснодара главного управления федеральной служюы судебных приставов...')
  const judgments = [
  {
      label: 'Арбитажный суд Краснодарского края',
      value: 'Арбитажный суд Краснодарского края'
  },
  {
      label: 'Наименование 2',
      value: "Наименование 2"
  },
  {
      label: 'Наименование 3',
      value: 'Наименование 3',
  },
  ]
  const choosenJudgement = ref('Арбитажный суд Краснодарского края')





  let tempCourtCase = reactive({
      id: Math.ceil(Math.random() * 10000000),
      judgmentName: '',
      caseId: '',
      applicant: '',
      responder: '',
      subject: '',
      actDate: '',
  })

const addCourtCase = () => {
    item.courtCases.push(JSON.parse(JSON.stringify(tempCourtCase)))
    tempCourtCase = reactive({
      id: Math.ceil(Math.random() * 10000000),
      judgmentName: '',
      caseId: '',
      applicant: '',
      responder: '',
      subject: '',
      actDate: '',
  }) 
  showModal.value = !showModal.value
  console.log(item);
}  
  </script>
  
  <style>
  .property-item-page {
  /* margin: 10px; */
  }
  .property-item-page__space {
      height: 45px;
  }
  .property-item-page__span {
  width: 500px;
  margin: 10px;
  }
  .property-item-page__input {
  width: 800px !important;
  }
  .property-item-page__select {
  width: 800px !important;
  }
  </style>
  