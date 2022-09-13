import styled, { css } from 'styled-components';

import { Container as Item } from 'components/Products/Item/styles';

export const Container = styled.div``;

export const ProductList = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings(1)};

    ${Item} {
      :not(:nth-last-child(1)) {
        border-bottom: 1px solid ${theme.colors.silver};
        padding-bottom: ${theme.spacings(1)};
      }
    }
  `}
`;
