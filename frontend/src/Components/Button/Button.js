import React from 'react'
import styled from 'styled-components'

function Button({name, icon, onClick, bPad, bRad}) {
    return (
        <ButtonStyled style={{
            padding: bPad,
            borderRadius: bRad,
        }} onClick={onClick}>
            {icon}
            {name}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    background: var(--primary-color);
    color: var(--text-light);
    outline: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    display: flex;
    align-items: center;
    gap: .5rem;
    cursor: pointer;
    transition: all .4s ease-in-out;
`;

export default Button