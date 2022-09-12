import * as S from './styles';

type TBox = {
    children?: JSX.Element | JSX.Element[]
}

const Box = ({ children }: TBox) => {
    return (
        <S.Container>
            {children}
        </S.Container>
    )
}

export default Box;