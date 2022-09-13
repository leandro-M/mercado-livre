import * as S from './styles';

interface TBox extends S.TContainer {
  children?: JSX.Element | JSX.Element[];
}

const Box = ({ spacing, children }: TBox) => {
  return <S.Container spacing={spacing}>{children}</S.Container>;
};

export default Box;
