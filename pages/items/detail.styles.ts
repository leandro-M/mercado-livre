import { rem } from 'polished';
import styled, { css } from 'styled-components';
import { Container as Anchor } from 'components/Anchor/styles';

export const Container = styled.div``;

export const Top = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;

    gap: ${theme.spacings(2)};
    margin-bottom: ${theme.spacings(4)};
  `}
`;

export const SliderWrapper = styled.div`
  ${({ theme }) => css`
    width: calc(100% - ${rem(300)});

    .slick-prev:before,
    .slick-next:before {
      color: ${theme.colors.carbon};
    }
  `}
`;

export const Cover = styled.div`
  width: ${rem(580)};
  height: ${rem(350)};
  position: relative;
`;

export const Detail = styled.div`
  width: ${rem(300)};
  display: flex;
  flex-direction: column;

  ${Anchor} {
    width: 100%;
    text-align: center;
  }
`;

export const SoldQuantity = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.fonts.semibold};
    font-size: ${rem(14)};
    margin-bottom: ${theme.spacings(1)};

    color: ${theme.colors.carbon};
  `}
`;

export const ProductName = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${rem(24)};
    line-height: 100%;

    color: ${theme.colors.carbon};
  `}
`;

export const Pricing = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings(2)} 0;

    color: ${theme.colors.carbon};
  `}
`;

export const Price = styled.p`
  ${({ theme }) => css`
    font-size: ${rem(46)};
    line-height: ${rem(46)};
    font-family: ${theme.fonts.semibold};
  `}
`;

export const DecimalPrice = styled.p``;

export const AdditionalInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings(2)};
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    font-size: ${rem(28)};
    color: ${theme.colors.carbon};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${rem(16)};
    color: ${theme.colors.grey};
  `}
`;
