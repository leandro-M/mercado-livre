import styled, { css } from 'styled-components';
import { rem } from 'polished';

import { Container as  SearchBox } from 'components/SearchBox/styles'

const logoSource = '/images/logo.png';

export const Container = styled.header`
    ${({ theme }) => css`
        background-color: ${theme.colors.yellow};
    `}
`;

export const Wrapper = styled.header`
    ${({ theme }) => css`
        display: flex;
        gap: ${rem(26)};
        
        padding: ${rem(9)} 0;
        background-color: ${theme.colors.yellow};

        width: ${theme.grid.container};
        margin: 0 auto;

        ${SearchBox} {
            width: 100%;
        }
    `}
`;

export const Anchor = styled.a`
    display: flex;
`

export const Logo = styled.img.attrs({
    src: logoSource,
    alt: 'logotipo de mercado libre',
    title: 'logotipo de mercado libre'
})``
