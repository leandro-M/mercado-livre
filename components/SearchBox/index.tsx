import * as S from './styles';

const SearchBox = () => {
    return (
        <S.Container>
            <S.Input placeholder='Nunca dejes de buscar' />
            <S.Action />
        </S.Container>
    );
}

export default SearchBox;