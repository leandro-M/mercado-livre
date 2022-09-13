import styled, { css } from 'styled-components';
import { rem } from 'polished';

export const Container = styled.div`
  width: ${rem(150)};
  margin: 0 auto;

  text-align: center;
`;

export const Title = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.fonts.semibold};
    font-size: ${rem(19)};
  `}
`;
