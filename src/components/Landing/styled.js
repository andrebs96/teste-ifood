import styled from "styled-components"
import { Link } from "react-router-dom"

export const LandingWrapper = styled.main`
    background-color: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`
export const LandingContent = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 0 15px;
`

export const LandingTitle = styled.h1`
    color: var(--white);
    font-size: 2rem;
    font-weight: bold;
    margin: 2rem 0;
    text-align: center;
`
export const LandingLink = styled(Link)`
    background-color: var(--white);
    cursor: pointer;
    padding: 1rem 2.5rem;
    border: 1px solid var(--borders); 
    border-radius: 4px;
    font-weight: bold;
    color: var(--primary-color);
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
        background-color: var(--borders);
    }
`