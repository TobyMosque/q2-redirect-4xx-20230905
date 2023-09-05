<template>
  <q-page class="row items-center justify-evenly">
    <fieldset>
      <legend>Code</legend>
      <span>{{ code }}</span>
    </fieldset>
    <fieldset>
      <legend>Actions</legend>
      <q-btn color="primary" to="/" label="Back to Home"></q-btn>
    </fieldset>
  </q-page>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps<{
  code: string;
}>();
const { code } = toRefs(props);
</script>
