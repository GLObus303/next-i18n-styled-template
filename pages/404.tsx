import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

import { useTranslation } from '../i18n';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Error404: NextPage = () => {
  const [t] = useTranslation();

  return <Container>{t('page-error-404')}</Container>;
};

export default Error404;
