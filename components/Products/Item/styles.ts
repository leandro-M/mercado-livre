import styled, { css } from 'styled-components';
import { rem } from 'polished';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings(1)};

    :hover {
      transition: ${theme.transition.default};
      opacity: 0.7;
    }
  `}
`;

export const Cover = styled.a`
  width: ${rem(180)};
  height: ${rem(180)};
  border-radius: ${rem(4)};
  position: relative;

  overflow: hidden;
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    flex-basis: calc(100% - ${rem(180 + 200)});
    padding: ${theme.spacings(1)} 0;

    display: flex;
    flex-direction: column;
    gap: ${theme.spacings(2)};
  `}
`;

export const Price = styled.h2`
  ${({ theme }) => css`
    font-size: ${rem(24)};
    font-weight: normal;
    color: ${theme.colors.carbon};
  `}
`;

export const Title = styled.a`
  ${({ theme }) => css`
    font-size: ${rem(18)};
    font-weight: normal;
    color: ${theme.colors.carbon};

    width: 50%;
  `}
`;

export const State = styled.p`
  ${({ theme }) => css`
    padding-top: ${rem(5)};
    font-size: ${rem(12)};
    flex-basis: ${rem(200)};
    color: ${theme.colors.squant};
  `}
`;
