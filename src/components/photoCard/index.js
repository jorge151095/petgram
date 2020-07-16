/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { Link } from '@reach/router'
import { ImgWrapper, Img, Article } from './styles'
import { useLocalStorage } from './../../hooks/useLocalStorage'
import { useNearScreen } from './../../hooks/useNearScreen'
import { FavButton } from './../FavButton'
import { ToggleLikeMutation } from '../../container/tokenLikeMutation'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  return (
    <Article ref={element}>
      {
        show && <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {
              (togglelike) => {
                const handleFavClick = () => {
                  !liked && togglelike({ variables: { input: { id } } })
                  setLiked(!liked)
                }
                return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
              }
            }
          </ToggleLikeMutation>
        </>
      }
    </Article>
  )
}
