<template>
  <q-page class="row items-center justify-evenly">
    <fieldset class="q-gutter-sm">
      <legend>Home</legend>
      <q-btn
        color="primary"
        label="Call Api 401"
        @click="callApi('401')"
      ></q-btn>
      <q-btn
        color="primary"
        label="Call Api 403"
        @click="callApi('403')"
      ></q-btn>
    </fieldset>
  </q-page>
</template>

<script setup lang="ts">
import { useApi } from 'src/composables/api';

const api = useApi();
function callApi(code: string) {
  api.get(code);
}
</script>
