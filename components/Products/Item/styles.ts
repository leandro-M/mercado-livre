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
  ${({ theme }) => css`
  
  width: ${rem(180)};
  height: ${rem(180)};
  border-radius: ${rem(4)};
  position: relative;

  overflow: hidden;

    @media screen and (${theme.media.mobile}) {
      width: ${rem(110)};
      height: ${rem(110)};
    }
  `}
`;

export const State = styled.p`
  ${({ theme }) => css`
    padding-top: ${rem(5)};
    font-size: ${rem(12)};
    flex-basis: ${rem(200)};
    color: ${theme.colors.squant};

    @media screen and (${theme.media.mobile}) {
      display: none;
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    flex-basis: calc(100% - ${rem(180 + 200)});
    padding: ${theme.spacings(1)} 0;
    
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings(2)};
    
    @media screen and (${theme.media.mobile}) {
      flex-basis: 100%;
      gap: ${rem(5)};
      padding: 0;

      ${State} {
        display: block;
        flex-basis: 0;
      }
    }
  `}
`;

export const Price = styled.h2`
  ${({ theme }) => css`
    font-size: ${rem(24)};
    font-weight: normal;
    color: ${theme.colors.carbon};
    
    @media screen and (${theme.media.mobile}) {
      font-size: ${rem(19)};
    }
  `}
`;

export const Title = styled.a`
  ${({ theme }) => css`
    font-size: ${rem(18)};
    font-weight: normal;
    color: ${theme.colors.carbon};
    
    width: 50%;
    
    @media screen and (${theme.media.mobile}) {
      font-size: ${rem(15)};
      width: 100%;
    }
  `}
`;
