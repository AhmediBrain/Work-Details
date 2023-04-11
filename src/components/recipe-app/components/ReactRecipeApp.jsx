import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import RecipeTile from './RecipeTile';

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 40px 24px;
`
const AppSearchForm = styled.form`
    margin-top: 18px;
`
const AppInput = styled.input`
    padding: 6px 16px;
    min-width: 200px;
    max-width: 100vw;
    font-size: 15px;
`
const AppSubmit = styled.input`
    padding: 6px 16px;
    font-size: 16px;
    margin-left: 6px;
    background-color: #02aff0;
    border: solid 1px #02aff0;
    border-radius: 4px;
    color: white;
    crusor: pointer;
`
const AppRecipes = styled.div`
    margin-top: 24px;
    display: grid;
    grid-template-columns: 220px 220px;
    align-items: baseline;
`

const ReactRecipeApp = () => {
    const [query, setQuery] = useState('')
    const [recipes, setRecipes] = useState([])

    const RECIPE_APP_ID = `82e453da`
    const RECIPE_APP_KEY = "3bb5d1a3b992f408b9003effd74c9c22"

    const url = `https://api.edamam.com/search?q=${query}&app_id=${RECIPE_APP_ID}&app_key=${RECIPE_APP_KEY}`;

    const getRecipeInfo = async () => {
        let result = await axios.get(url);
        setRecipes(result.data.hits);
        console.log(result.data.hits);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        getRecipeInfo();
    }

  return (
    <AppContainer>
        <h3 onClick={getRecipeInfo}>Food Recipe Plaza</h3>
        <AppSearchForm onSubmit={onSubmit}>
            <AppInput 
                type='text' 
                placeholder='Enter Ingredient' 
                autoComplete='Off' 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} />
            <AppSubmit 
                type='submit' 
                value="Search" />
        </AppSearchForm>
        <AppRecipes>
            {recipes !== [] && 
                recipes.map((recipe) => {
                    return(
                        <RecipeTile recipe={recipe} />
                    )
                })}
                what?
        </AppRecipes>
    </AppContainer>
  )
}

export default ReactRecipeApp