import { defineStore } from 'pinia'

export const useStyleStore = defineStore('style', {
  state: () => ({
    globalBgColor: 'slate-50',
    globalAccentColor: 'slate-500'
  })
})
