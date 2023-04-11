import React from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

const RecipeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const RecipeTileImg = styled.img`
    height: 200px;
    width: 200px;
    object-fit: cover;
    border-radius: 4px;
`
const RecipeTileName = styled.p`
    max-width: 200px;
    text-align: center;
    margin: 12px 0px;
`

export default function RecipeTile({ recipe }) {
  return (
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
        <RecipeContainer 
            onClick={() => window.open(recipe["recipe"]["url"])}>
            <RecipeTileImg src={recipe["recipe"]["image"]} />
            <RecipeTileName key={uuidv4()}>
                {recipe["recipe"]["label"]}
            </RecipeTileName>
        </RecipeContainer>
    )
  )
}
