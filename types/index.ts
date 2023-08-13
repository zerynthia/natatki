export type RawNote = {
  _id: string
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