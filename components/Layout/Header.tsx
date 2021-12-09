import React from 'react';
import styled from '@emotion/styled';
import MainNavigation from './MainNavigation';
import LanguageSelector from '../LanguageSelector';
import { useTranslation } from 'next-i18next';

const Root = styled.header`
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    background-color: #242726;
  }
`;
const Logo = styled.img`
  width: 158px;
  height: 63px;
  padding: 7px;
`;
const ButtonContact = styled.button`
  background-image: linear-gradient(
    47.99deg,
    #2e8174 0%,
    #30a996 42.53%,
    #00ffd9 100%
  );
  border-radius: 15px;
  width: 128px;
  height: 52px;
  border: none;
`;
const LabelButton = styled.span`
  color: #000000;
  font-family: OpenSans;
  font-size: 16px;
  line-height: 21.79px;
  width: 82px;
  text-align: center;
`;
const DivImg = styled.div`
  flex: 1;
`;
const DivBtn = styled.div`
  display: flex;
  flex: 1;
  padding-top: 3px;
}
`;
const DivSelector = styled.div`
  flex: 1;
  align-self: center;
`;
const DivEnd = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  @media (max-width: 800px) {
    display: none;
  }
`;

const Header = () => {
  const { t } = useTranslation();

  return (
    <Root>
      <DivImg>
        <Logo src="/assets/images/logo_aleia.png" />
      </DivImg>
      <MainNavigation />
      <DivEnd>
        <DivBtn>
          {' '}
          <ButtonContact>
            <LabelButton>{t('labelBtnHeader')}</LabelButton>
          </ButtonContact>
        </DivBtn>
        <DivSelector>
          {' '}
          <LanguageSelector />
        </DivSelector>{' '}
      </DivEnd>
    </Root>
  );
};

export default Header;
