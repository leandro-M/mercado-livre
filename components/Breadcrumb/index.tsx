import * as S from './styles';

import { TBreadcrumb } from 'services/items/types'

type TBreadcrumbs = {
  items?: TBreadcrumb[]
}
const Breadcrumb = ({ items }: TBreadcrumbs) => {
  return (
    <S.Container>
      {
        items?.map(item => (
          <S.Item key={item.id}>
            {item.name}
          </S.Item>
        ))
      }
    </S.Container>
  )
}

export default Breadcrumb;