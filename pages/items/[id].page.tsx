import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { dehydrate, QueryClient } from '@tanstack/react-query';
import Slider from 'react-slick';

import Box from 'components/Box';
import Anchor from 'components/Anchor';

import LayoutDefault from 'components/Layout/Default';

import { useItemDetail } from 'services/items';
import { TItemDetail } from 'services/items/types';
import { getItemDetail } from 'services/items/action';
import { createUseItemDetail } from 'services/items/keys';

import * as S from './detail.styles';

const Search: NextPage = () => {
  const { query } = useRouter();
  const { data } = useItemDetail(`${query.id}`);

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <LayoutDefault
      title={`${data?.info.title} | Mercado Libre`}
      description={data?.info.description || ''}
      breadcrumbs={data?.breadcrumbs}
    >
      <S.Container>
        <Box spacing={2}>
          <S.Top>
            <S.SliderWrapper>
              <Slider {...settings}>
                {Array.isArray(data?.info.picture) &&
                  data?.info.picture.map(item => (
                    <S.Cover key={item.id}>
                      <Image
                        src={item.url}
                        layout="fill"
                        objectFit="contain"
                        width={680}
                        height={500}
                      />
                    </S.Cover>
                  ))}
              </Slider>
            </S.SliderWrapper>

            <S.Detail>
              <S.SoldQuantity>
                Nuevo - {data?.info.sold_quantity} vendidos
              </S.SoldQuantity>

              <S.ProductName>{data?.info.title}</S.ProductName>

              <S.Pricing>
                <S.Price>
                  {data?.info.price.currency} {data?.info.price.amount}
                </S.Price>
              </S.Pricing>

              <Anchor
                href={data?.info.permalink}
                target="_blank"
                color="white"
                background="blue"
              >
                Comprar
              </Anchor>
            </S.Detail>
          </S.Top>

          <S.AdditionalInfo>
            <S.Title>Descripción del producto</S.Title>
            <S.Description>{data?.info.description}</S.Description>
          </S.AdditionalInfo>
        </Box>
      </S.Container>
    </LayoutDefault>
  );
};

export async function getServerSideProps(context: any) {
  const queryClient = new QueryClient();

  const id = context.params?.id;
  const prefecthItemById = async () => await getItemDetail(id);

  await queryClient.prefetchQuery<TItemDetail>(
    createUseItemDetail(id),
    prefecthItemById
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
}

export default Search;
