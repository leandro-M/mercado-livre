import styled, { css } from 'styled-components';
import { rem } from 'polished'

export type TContainer = {
  spacing?: number
}

export const Container = styled.div<TContainer>`
  ${({ theme, spacing }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${rem(4)};
    padding: ${theme.spacings(spacing || 1)};
  `}
`;
