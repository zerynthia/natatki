<template>
  <div class="w-full h-full flex flex-col gap-2">
    <label class="font-semibold text-2xl">{{ label }}</label>
    <textarea
      maxlength="1024"
      :class="`bg-transparent p-2 w-full h-full resize-none scrollbar scrollbar-w-2 scrollbar-h-2 scrollbar-thumb-rounded-md scrollbar-thumb-${globalAccentColor} scrollbar-track-${globalBgColor}`"
      :placeholder="placeholder"
      :value="modelValue"
      @input="(event) => $emit('update:modelValue', event.target.value)"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { useStyleStore } from "~/stores/style";

const { globalAccentColor, globalBgColor } = useStyleStore();

defineProps<{
  modelValue: string;
  placeholder: string;
  label: string;
}>();

defineEmits(["update:modelValue"]);
</script>
