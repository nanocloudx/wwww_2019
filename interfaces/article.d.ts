export type Article = {
  id: string
  category: 'technology' | 'travel' | 'diary'
  title: string
  date: string
  tags: string[]
  body: string
}
