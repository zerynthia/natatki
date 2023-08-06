export type RawNote = {
  id: string
  title?: string
  meta?: {
    timestamp?: number
    author?: string
  }
  content: string
}

export type RawNotesCollection = {
  [key: string]: RawNote
}