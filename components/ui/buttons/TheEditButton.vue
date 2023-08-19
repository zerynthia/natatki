<template>
  <button class="font-semibold text-2xl transform active:scale-90" @click="$emit('click')">{{ label }}</button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

defineProps<{
  label: string;
}>();

defineEmits(['click'])
</script>
