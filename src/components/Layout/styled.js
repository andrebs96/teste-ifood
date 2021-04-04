import styled from "styled-components"

export const LayoutWrapper = styled.section``

export const LayoutHeader = styled.header`
    align-items: center;
    background-color: var(--header-color);
    border: 1px solid var(--generic-color);
    display: flex;
    height: 80px;
    justify-content: center;
    padding: 0 30px;
    position: fixed;
    width: 100%;
`

export const LayoutMain = styled.main`
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    padding: 100px 15px 20px;
`