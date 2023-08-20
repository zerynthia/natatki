module.exports = {
  safelist: [
    'bg-slate-50',
    'bg-slate-500',
    'text-slate-50',
    'text-slate-500',
    'border-slate-50',
    'border-slate-500',
    'scrollbar-track-slate-50',
    'scrollbar-thumb-slate-500'
  ],
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}