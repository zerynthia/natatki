<template>
  <div class="min-h-[70px] bg-teal-50 rounded-md p-5 flex flex-col gap-3 justify-start">
    <div v-if="date || title">
      <h3 v-if="title" class="text-xl font-semibold">
        {{ title }}
      </h3>
      <p v-if="date" class="text-sm text-gray-400">{{ date }}</p>
    </div>

    <p class="text-gray-600">{{ content }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title?: string;
  content: string;
  date?: string;
}>();
</script>
