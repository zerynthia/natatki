<template>
  <div class="w-full flex gap-2">
    <label class="font-semibold text-2xl">{{ label }}</label>
    <input
      class="bg-transparent px-2 w-full"
      type="text"
      :value="modelValue"
      :placeholder="placeholder"
      @input="(event) => $emit('update:content', event.target.value)"
      maxlength="128"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

defineProps<{
  modelValue: string;
  placeholder: string;
  label: string;
}>();

defineEmits(["update:modelValue"]);
</script>
