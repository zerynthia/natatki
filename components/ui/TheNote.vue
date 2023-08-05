<template>
  <div class="min-h-[70px] bg-teal-50 rounded-md p-5 grid gap-4">
    <div v-if="date || title">
      <h3 v-if="title" class="text-2xl font-semibold">
        {{ title }}
      </h3>
      <p v-if="date" class="text-sm text-gray-400">{{ date }}</p>
    </div>

    <p class="text-gray-600">{{ content }}</p>

    <div class="self-end flex gap-1">
      <button class="w-8 h-8 text-xl transform active:scale-95">🖊️</button>
      <button class="w-8 h-8 text-xl transform active:scale-95 grayscale">⭐️</button>
      <button class="w-8 h-8 text-xl transform active:scale-95">💬</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title?: string;
  content: string;
  date?: string;
}>();
</script>
