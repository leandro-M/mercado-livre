import styled, { css } from 'styled-components';
import { rem } from 'polished'

const searchIcon = '/images/icons/search.png';

export const Container = styled.div`
    display: flex;
    border-radius: ${rem(4)};
    overflow: hidden;
`

export const Input = styled.input`
    ${({ theme }) => css`
        font-size: ${rem(18)};
        color: ${theme.colors.carbon};
        
        border: none;

        padding: 0 ${rem(15)};
        flex-basis: calc(100% - ${rem(42)});

        ::placeholder {
            color: ${theme.colors.grey}
        }
    `}

`

export const Action = styled.button`
    ${({ theme }) => css`
        background-color: ${theme.colors.silver};
        background-image: url(${searchIcon});
        background-repeat: no-repeat;
        background-position: center;

        flex-basis: ${rem(42)};
        height: ${rem(38)};

        border: none;
    `}
`