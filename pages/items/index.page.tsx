import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Box from 'components/Box';
import ProductItem from 'components/Products/Item';

import LayoutDefault from 'components/Layout/Default';

import { useItems } from 'services/items';

import * as S from './list.styles';
import Loading from 'components/Loading';

const Search: NextPage = () => {
  const router = useRouter();

  const { data, isLoading, refetch } = useItems(router?.query, {
    enabled: false
  });

  useEffect(() => {
    refetch();
  }, [router?.query]);

  return (
    <LayoutDefault breadcrumbs={data?.breadcrumbs}>
      <S.Container>
        {isLoading && <Loading />}

        {!isLoading && (
          <Box>
            <S.ProductList>
              {data?.list.map(product => (
                <ProductItem
                  key={product.id}
                  link={`/items/${product.id}`}
                  {...product}
                />
              ))}
            </S.ProductList>
          </Box>
        )}
      </S.Container>
    </LayoutDefault>
  );
};

export default Search;
