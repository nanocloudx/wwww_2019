import fetch from 'isomorphic-unfetch'
import { Article } from '../interfaces/article'

const API = process.env.API_HOST || 'http://localhost:5000'

export function getArticles(): Promise<Article[]> {
  return Promise.resolve([
    {
      id: '1',
      title: 'テスト',
      date: '2019-12-31',
      body: 'これはテストですこれはテストですこれはテストです'
    }
  ])
  // return fetch(`${API}/articles`)
  //   .then(res => res.json())
  //   .then(result => result.data)
}

export function getArticleById(id: string): Promise<Article> {
  return Promise.resolve({
    id: '1',
    title: 'テスト',
    date: '2019-12-31',
    body: 'これはテストですこれはテストですこれはテストです'
  })
  // return fetch(`${API}/articles/${id}`).then(res => res.json())
}
