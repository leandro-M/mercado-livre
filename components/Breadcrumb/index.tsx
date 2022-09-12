import * as S from './styles';

const Breadcrumb = () => {
  const items = [
    {
      id: 'asa',
      description: 'Eletronica, Audio y Video',
      link: 'https://google.com/',
    },
    {
      id: 'asasas',
      description: 'Ipod',
      link: 'https://google.com/',
    },
    {
      id: 'as1a2s1',
      description: 'Reproductores',
      link: 'https://google.com/',
    },
    {
      id: 'as54d54asd',
      description: 'Ipode touch',
      link: 'https://google.com/',
    }
  ]

  return (
    <S.Container>
      {
        items.map(item => (
          <S.Item key={item.id}>
            <S.Link href={item.link} target='_blank'>
              {item.description}
            </S.Link>
          </S.Item>
        ))
      }
    </S.Container>
  )
}

export default Breadcrumb;