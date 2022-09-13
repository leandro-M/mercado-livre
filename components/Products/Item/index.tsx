import Link from 'next/link';
import Image from 'next/image';

import { TItem } from 'services/items/types';

import * as S from './styles';

const Item = (props: TItem) => {
  return (
    <S.Container>
      <Link href={props?.link || ''} passHref>
        <S.Cover>
          <Image
            alt={props.title}
            title={props.title}
            src={typeof props.picture === 'string' ? props.picture : ''}
            layout="fill"
            objectFit="contain"
            width={180}
            height={180}
          />
        </S.Cover>
      </Link>

      <S.Wrapper>
        <S.Price>$ {props.price?.amount?.toLocaleString('es-AR')}</S.Price>

        <Link href={props.link || ''} passHref>
          <S.Title>{props.title}</S.Title>
        </Link>
        
        <S.State>{props.state_name}</S.State>
      </S.Wrapper>

      <S.State>{props.state_name}</S.State>
    </S.Container>
  );
};

export default Item;
