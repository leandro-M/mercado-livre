import Header from 'components/Header';
import Breadcrumb from 'components/Breadcrumb';

import { TBreadcrumb } from 'services/items/types';

import * as S from './styles';

type TLayout = {
  children?: JSX.Element | JSX.Element[] | string;
  breadcrumbs?: TBreadcrumb[];
};

const Default = ({ breadcrumbs, children }: TLayout) => {
  return (
    <S.Container>
      <Header />

      <S.Body>
        <Breadcrumb items={breadcrumbs} />

        {children}
      </S.Body>

      <S.Footer>
        <S.FooterContainer>Teste feito por Leandro Medeiros</S.FooterContainer>
      </S.Footer>
    </S.Container>
  );
};

export default Default;
