import styled, { css } from 'styled-components';
import { rem } from 'polished'

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${rem(4)};
    padding: ${theme.spacings(1)};
  `}
`;
