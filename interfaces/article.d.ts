export type Article = {
  id: string
  category: 'development' | 'travel' | 'diary'
  title: string
  date: string
  tags: string[]
  image: string
  body: string
}
