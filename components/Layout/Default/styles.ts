import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Body = styled.main`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    padding: 0 ${theme.spacings(1)};
    margin: 0 auto;
  `}
`;

export const Footer = styled.footer``;

export const FooterContainer = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    padding: ${theme.spacings(2)};
    margin: 0 auto;
  `}
`;
