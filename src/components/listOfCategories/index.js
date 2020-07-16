import React, { useState, useEffect } from 'react'
import { Category } from './../category/index'
import { List, Item } from './styles'
import LoadingBar from 'react-top-loading-bar'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loadingBarProgress, setLoadingBarProgress] = useState(0)

  const complete = () => {
    setLoadingBarProgress(100)
  }

  const onLoaderFinished = () => {
    setLoadingBarProgress(0)
  }

  useEffect(function () {
    window.fetch('https://petgram-api-jorge.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        complete()
      })
  }, [])

  return { categories, onLoaderFinished, loadingBarProgress }
}

export const ListOfCategories = () => {
  const { categories, onLoaderFinished, loadingBarProgress } = useCategoriesData()
  const [showFixed, setShowFixed] = useState()

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        categories.map(category =>
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>)
      }
    </List>
  )

  return (
    <>
      <LoadingBar
        progress={loadingBarProgress}
        height={3}
        color='red'
        onLoaderFinished={() => onLoaderFinished()}
      />
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
