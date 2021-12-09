import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'next-i18next';

const Root = styled.section`
  display: flex;
  background-color: #ffffff;
  box-shadow: 0 100px 100px 0 rgba(236, 236, 236, 0.5);
  place-self: center;
  margin-top: -64px;
  width: 85%;

  @media (max-width: 800px) {
    margin-top: -150px;
  }
`;

const DivLeft = styled.div`
  display: flex;
  /*padding-right: 89px;*/
  @media (max-width: 800px) {
    margin-bottom: 20px;
  }
`;
const DivRight = styled.div`
  display: flex;
  flex-direction: column;
`;
const Text1 = styled.span`
  color: #000000;
  font-family: Montserrat;
  font-size: 40px;
  line-height: 48.76px;
  width: 475px;
  text-align: justify;
`;
const Text2 = styled.span`
  color: #807f7f;
  font-family: OpenSans;
  font-size: 19px;
  line-height: 25.87px;
  width: 460px;
  text-align: justify;
`;
const FirstRow = styled.div`
  display: flex;
`;
const SecondRow = styled.div`
  display: flex;
  padding-top: 35px;
  align-self: center;
`;
const Button = styled.button`
  background-image: linear-gradient(
    47.99deg,
    #2e8174 0%,
    #30a996 42.53%,
    #00ffd9 100%
  );
  border-radius: 15px;
  width: 150px;
  height: 50px;
`;
const LabelBtn = styled.span`
  color: #000000;
  font-family: OpenSans;
  font-size: 16px;
  line-height: 21.79px;
  text-align: justify;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 9%;
  /*padding: 129px 271px 0px;*/
  flex: 1;
  justify-content: center;
  margin-bottom: 8%;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const SecondBloc = () => {
  const { t } = useTranslation();

  return (
    <Root>
      <Container>
        <DivLeft>
          <Text1>{t('text1Bloc2')}</Text1>
        </DivLeft>
        <DivRight>
          <FirstRow>
            <Text2>{t('text2bloc2')}</Text2>
          </FirstRow>
          <SecondRow>
            <Button>
              <LabelBtn>{t('labelBtnBloc1')}</LabelBtn>
            </Button>
          </SecondRow>
        </DivRight>
      </Container>
    </Root>
  );
};

export default SecondBloc;
