<template>
  <div class="min-h-[100px] border-2 rounded-md p-5">
    <h3 class="text-emerald-300 text-xl font-semibold">{{ title }}</h3>
    <p class="text-sm text-gray-400">{{ date }}</p>

    <p class="mt-4">{{ content }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  content: string;
  date: string
}>();
</script>
