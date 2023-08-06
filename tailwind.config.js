module.exports = {
  safelist: [
    'bg-slate-50',
    'bg-slate-300',
    'text-slate-50',
    'text-slate-300',
    'border-slate-50',
    'border-slate-300',
    'scrollbar-track-slate-50',
    'scrollbar-thumb-slate-300'
  ],
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}