import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({theme}) => css`
        width: ${theme.grid.container};
        margin: 0 auto;
    `}
`;
