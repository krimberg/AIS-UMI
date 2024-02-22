<template>
<n-upload
    class="file-loader"
    multiple
    directory-dnd
    action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
    :max="5"
>
    <n-upload-dragger>
    <div>
        <n-icon size="28" :depth="3">
        <archive-icon />
        </n-icon>
    </div>
    <n-text style="font-size: 14px">
        Нажмите или перетащите файл для загрузки
    </n-text>
    </n-upload-dragger>
</n-upload>
</template>

<script setup>
import { NIcon, NUpload, NUploadDragger, NText, NP } from 'naive-ui';
import ArchiveIcon from '../icons/ArchiveIcon.vue';

function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const archiveIcon = renderIcon(ArchiveIcon);

</script>

<style>
.file-loader {
    width: 200px;
}
</style>
