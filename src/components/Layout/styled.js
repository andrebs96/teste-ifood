import styled from "styled-components"

export const LayoutWrapper = styled.section``

export const LayoutHeader = styled.header`
    background-color: var(--header-color);
    border: 1px solid var(--generic-color);
    display: flex;
    justify-content: center;
    padding: 15px 30px;
    position: fixed;
    width: 100%;
`

export const LayoutMain = styled.main`
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    padding: 20px 15px;
`