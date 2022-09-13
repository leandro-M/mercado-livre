import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Body = styled.main`
  ${({ theme }) => css`
    width: ${theme.grid.container};
    margin: 0 auto;
  `}
`;

export const Footer = styled.footer``;

export const FooterContainer = styled.div`
  ${({ theme }) => css`
    width: ${theme.grid.container};
    padding: ${theme.spacings(2)};
    margin: 0 auto;
  `}
`;
