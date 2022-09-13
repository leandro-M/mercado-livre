import type { NextPage } from 'next';
import LayoutDefault from 'components/Layout/Default';

const Home: NextPage = () => {
  return (
    <LayoutDefault
      title='Mercado Libre'
      description='Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.'
    >
      <div></div>
    </LayoutDefault>
  );
};

export default Home;
