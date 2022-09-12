import Link from 'next/link';
import * as S from './styles';

import SearchBox from 'components/SearchBox'

const Header = () => {
    return (
        <S.Container>
            <S.Wrapper>
                <Link href='/' passHref>
                    <S.Anchor>
                        <S.Logo />
                    </S.Anchor>
                </Link>

                <SearchBox />
            </S.Wrapper>
        </S.Container>
    )
}

export default Header;