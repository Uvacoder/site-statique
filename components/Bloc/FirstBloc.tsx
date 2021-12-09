import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'next-i18next';

const Root = styled.section`
  background-color: #242726;
  height: 797px;
  width: 100%;
  box-shadow: 0 100px 100px 0 rgba(236, 236, 236, 0.5);

  @media (max-width: 800px) {
  }
`;

const Button = styled.button`
  border: 3px solid #2e8174;
  border-radius: 15px;
  width: 150px;
  height: 56px;
  background-color: transparent;
  color: #ffffff;
`;

const Text1 = styled.span`
  color: #ffffff;
  font-family: Montserrat;
  font-size: 58px;
  line-height: 70.7px;
  width: 637px;
  text-align: left;
  padding: 117px 78px 30px;

  @media (max-width: 800px) {
    padding: 5px 13px;
    font-size: 48px;
  }
`;

const Text2 = styled.span`
  color: #bfbebf;
  font-family: OpenSans;
  font-size: 19px;
  line-height: 25.87px;
  width: 487px;
  text-align: justify;
  padding: 6px 80px 0px;
  @media (max-width: 800px) {
    width: 309px;
    padding: 5px 13px;
  }
`;

const Col2 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Col3 = styled.div`
  margin-top: 30px;
  padding-left: 78px;
`;

const Col1 = styled.div`
  display: flex;
`;

const Row1 = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(assets/images/fond.png);
  background-position: right;
  background-repeat: no-repeat;
  height: 100%;
`;

const FirstBloc = () => {
  const { t } = useTranslation();

  return (
    <Root>
      <Row1>
        <Col1>
          <Text1>{t('text1Bloc1')}</Text1>
        </Col1>
        <Col2>
          <Text2>{t('text2Bloc1.1')}</Text2>
          <Text2>{t('text2Bloc1.2')}</Text2>
          <Text2>{t('text2Bloc1.3')}</Text2>
          <Text2>{t('text2Bloc1.4')}</Text2>
          <Text2>{t('text2Bloc1.5')}</Text2>
        </Col2>
        <Col3>
          <Button>{t('labelBtnBloc1')}</Button>
        </Col3>
      </Row1>
    </Root>
  );
};

export default FirstBloc;
