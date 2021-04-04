import styled from "styled-components"

export const CardWrapper = styled.div``

export const CardTitle = styled.div`
    background-color: var(--primary-color);
    border: 1px solid var(--primary-color);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    color: var(--white);
    font-weight: bold;
    line-height: 1.5rem;
    padding: 18px;
    text-align: center;
`

export const CardContent = styled.div`
    border: 1px solid var(--generic-color);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    padding: 18px;
`