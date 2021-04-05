import styled from "styled-components"

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
    text-align: center;
    margin: 2rem 0;
`

export const LandingSubtitle = styled.h2`
    color: var(--white);
    font-size: 1rem;
    font-weight: normal;
    line-height: 2rem;
    margin: 2rem 0;
    text-align: center;
`