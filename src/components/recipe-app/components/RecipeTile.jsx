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
//.match(/\.(jpeg|jpg|gif|png)$/)

export default function RecipeTile({ recipe }) {
    let imageRecipe = recipe["recipe"]["image"]
    console.log(imageRecipe)
  return (
    recipe["recipe"]["image"] !== null && (
        <RecipeContainer key={uuidv4()}>
            <RecipeTileImg alt='' src={imageRecipe} />
            <RecipeTileName >
                {recipe["recipe"]["label"]}
                
            </RecipeTileName>
        </RecipeContainer>
    )
  )
}
