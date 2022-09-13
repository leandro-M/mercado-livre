import Header from 'components/Header';
import Breadcrumb from 'components/Breadcrumb';
import Head from "next/head";

import { TBreadcrumb } from 'services/items/types';

import * as S from './styles';

type TLayout = {
  children?: JSX.Element | JSX.Element[] | string;
  breadcrumbs?: TBreadcrumb[];
  title: string,
  description: string,
};

const Default = ({ children, ...props }: TLayout) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="title" content={props.title} />
        <meta name="description" content={props.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
      </Head>
      <S.Container>
        <Header />

        <S.Body>
          <Breadcrumb items={props.breadcrumbs} />

          {children}
        </S.Body>

        <S.Footer>
          <S.FooterContainer>Teste feito por Leandro Medeiros</S.FooterContainer>
        </S.Footer>
      </S.Container>
    </>
  );
};

export default Default;
