import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

import { useTranslation } from '../i18n';

const Title = styled.h1`
  font-size: 50px;
`;

const Home: NextPage = () => {
  const [t] = useTranslation('home');

  return <Title>{t('heading')}</Title>;
};

Home.getInitialProps = () => ({
  namespacesRequired: ['home'],
});

export default Home;
