export type RawNote = {
  _id: string
  title?: string
  meta?: {
    timestamp?: number
    author?: string
  }
  content: string,
  modifications: {
    freezeMode: boolean
  }
}

export type RawNotesCollection = {
  [key: string]: RawNote
}