import { useRouter } from 'next/router'
import { useState, useRef, useEffect } from 'react'

import * as S from './styles'

const SearchBox = () => {
    const router = useRouter()

    const field = useRef<HTMLInputElement>(null)
    const query = router?.query?.q as string

    const [search, setSearch] = useState<string>(query || '')

    const handleGoToSearch = () => {
        if(search)
            return router.push(`/items?q=${search}`)
    }

    useEffect(() => {
        field.current?.focus()
    }, [])

    return (
        <S.Container>
            <S.Input
                placeholder='Nunca dejes de buscar'
                value={search}
                onChange={e => setSearch(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && handleGoToSearch()}
                ref={field}
            />

            <S.Action onClick={handleGoToSearch} />
        </S.Container>
    );
}

export default SearchBox;