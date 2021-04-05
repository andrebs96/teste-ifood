import styled from "styled-components"

export const Button = styled.div`
    background-color: ${ props => props.primary ? 'var(--primary-color)' : 'var(--white)' };
    cursor: pointer;
    display: inline-block;
    padding: 1rem 2rem;
    border: 1px solid var(--generic-color); 
    border-radius: 4px;
    font-weight: bold;
    color: ${ props => props.primary ? 'var(--white)' : 'var(--primary-color)' };
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
        background-color: ${ props => props.primary ? 'var(--primary-color)' : 'var(--generic-color)' };
    }
`