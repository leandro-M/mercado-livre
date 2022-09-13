import * as S from './styles';

interface TAnchor extends S.TContainer {
  children?: JSX.Element | JSX.Element[] | string;
}

const Anchor = ({ children, ...props }: TAnchor) => {
  return <S.Container {...props}>{children}</S.Container>;
};

export default Anchor;
