/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'next-i18next';

const Root = styled.section`
  display: flex;
  flex-direction: column;
  place-self: center;
  min-width: 100%;
  align-items: center;
  @media (max-width: 800px) {
  }
`;

const Text = styled.span`
  color: #000000;
  font-family: Montserrat;
  font-size: 40px;
  line-height: 48.76px;
  width: 577px;
  text-align: justify;
  align-items: center;
  @media (max-width: 800px) {
    width: 394px;
    font-size: 30px;
  }
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const Icon = styled.img``;
const SubTitle = styled.span`
  color: #000000;
  font-family: Montserrat;
  font-size: 25px;
  line-height: 30px;
  width: 241px;
  text-align: justify;
  text-align: center;
`;
const Paragraph = styled.span`
  color: #807f7f;
  font-family: OpenSans;
  font-size: 19px;
  line-height: 25.87px;
  text-align: justify;
`;
const Body = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 89px;
  justify-content: center;
  margin-bottom: 7%;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 5rem 0rem;
  @media (max-width: 800px) {
    margin-bottom: 10px;
  }
`;
const Col1 = styled.div`
  display: flex;
  align-self: center;
`;
const Col2 = styled.div`
  display: flex;
  align-self: center;
`;
const Col3 = styled.div`
  display: flex;
  margin-top: 15px;
`;
const Footer = styled.div`
  display: flex;
  margin-top: 15px;
  margin-bottom: 27px;
`;
const Button = styled.button`
  background-image: linear-gradient(
    47.99deg,
    #2e8174 0%,
    #30a996 42.53%,
    #00ffd9 100%
  );
  border-radius: 15px;
  width: 297px;
  height: 50px;
`;
const LabelBtn = styled.span`
  color: #000000;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 19px;
  text-align: justify;
`;
const ThirdBloc = () => {
  const { t } = useTranslation();
  const tab = [
    {
      icon: '/assets/images/icon1.png',
      name: t('label1.3'),
      paragraph: t('parag1.1'),
    },
    {
      icon: '/assets/images/icon2.png',
      name: t('label2.3'),
      paragraph: t('parag1.1'),
    },
    {
      icon: '/assets/images/icon3.png',
      name: t('label3.3'),
      paragraph: t('parag1.1'),
    },
  ];
  return (
    <Root>
      <Title>
        <Text>{t('titleBox3')}</Text>
      </Title>

      <Body>
        {tab &&
          tab.map((item: any) => {
            return (
              <Item>
                <Col1>
                  <Icon src={item.icon} />
                </Col1>
                <Col2>
                  <SubTitle>{item.name}</SubTitle>
                </Col2>
                <Col3>
                  <Paragraph>{item.paragraph}</Paragraph>
                </Col3>
              </Item>
            );
          })}
      </Body>
      <Footer>
        <Button>
          <LabelBtn>{t('btn3')}</LabelBtn>
        </Button>
      </Footer>
    </Root>
  );
};

export default ThirdBloc;
