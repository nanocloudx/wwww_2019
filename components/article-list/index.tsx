import * as React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Article } from '../../interfaces/article'
import Categories from './categories'
import Latest from './latest'
import { CategoryType } from '../../interfaces/category'

type Props = {
  articles: Article[]
}

const Component: React.FC<Props> = props => {
  const [category, setCategory] = useState<CategoryType>('all')
  const [filteredArticles, setFilteredArticles] = useState(props.articles)

  useEffect(() => {
    if (category === 'all') {
      setFilteredArticles(props.articles)
      return
    }
    const articles = props.articles.filter(item => item.category === category)
    setFilteredArticles(articles)
  }, [category])

  return (
    <div>
      <Categories current={category} onClick={setCategory} />
      <Latest articles={filteredArticles} />
    </div>
  )
}

export default Component
