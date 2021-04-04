import styled from "styled-components"

export const Label = styled.label`
    border: 1px solid var(--generic-color);
    border-radius: 4px;
    color: var(--text-color);
    display: block;
    font-weight: bold;
    margin-bottom: 10px;
    padding: 10px;

    &:hover, &[data-selected="true"] {
        background-color: var(--primary-color);
        color: var(--white);
    }

    input {
        display: none;
    }
`