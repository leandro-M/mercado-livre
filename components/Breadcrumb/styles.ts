import styled, { css } from 'styled-components';
import { rem } from 'polished';

const arrowIcon = '/images/icons/arrow.svg';

export const Container = styled.ul`
  ${({ theme }) => css`
    list-style: none;

    display: flex;

    gap: ${rem(10)};

    padding: ${theme.spacings(1)} 0;
  `}
`;

export const Item = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    gap: ${rem(10)};
    font-size: ${rem(14)};

    color: ${theme.colors.grey};

    :not(:last-of-type) {
      :after {
        content: '';
        width: ${rem(6)};
        height: ${rem(8)};

        background-image: url(${arrowIcon});
      }
    }

    :last-of-type {
      font-family: 'Proxima Nova Semibold';
    }
  `}
`;

export const Link = styled.a``;
