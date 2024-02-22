<template>
<div class="property-item-page">
<!-- <h3>{{ field }}</h3>s -->
    <n-space horizontal justify="space-between" align="center" class="property-item-page__space"
    v-for="key in Object.keys(mainFields)" :key="key"
    >
    <n-h3 class="property-item-page__span">{{ mainFields[key] }}</n-h3>
    <n-select
    v-if="key==='col1'"
    :value="choosenDep"
        @update:value="(value) => (choosenDep = value)"
        class="property-item-page__select"
        :options="deps"
    >{{ key }}</n-select>
    <n-select
        v-else-if="key==='judgmentName'"
        :value="choosenJudgement"
        @update:value="(value) => (choosenJudgement = value)"
        class="property-item-page__select"
        :options="judgments"
    >{{ key }}</n-select>
    <n-input
        v-else
        class="property-item-page__input"
        :value="item[key]"
        :disabled="role === 'USER'"
        @update:value="(value) => (item[key] = value)"
    />
    <!-- <p>{{ item[key] }}</p> -->
    </n-space>
</div>
<NButton class="add-button">
    <template #icon><add_icon></add_icon></template>
Сохранить</NButton>
<n-button class="add-button"
style="margin-left: 20px;"
@click="showModal = true">
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
    v-for="judgmentKey in judgmentFields" :key="judgmentKey"
    >
    <n-h3>{{ judgmentKey }}</n-h3>
    <n-input
    placeholder="Введите данные"
    />
    </div>
      
      <template #footer>
        <n-button @click="addJudgment">Добавить судебное дело</n-button>
      </template>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
import { ref, h } from 'vue';
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
      administration: "Ответственный орган администрации МО г. Краснодар",
      division: "Наименование структурного подразделения УФССП",
      proceedingNumber: "№ исполнительного производства",
      recoverer: "Взыскатель",
      deptor: "Должник",
      proceedingSubject: "Предмет исполнительного производства",
      executionPeriod: "Срок исполнения исполнительного производства",
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
const choosenDep = ref('ООП по прикубанскому округу г Краснодара главного управления федеральной служюы судебных приставов...')
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
