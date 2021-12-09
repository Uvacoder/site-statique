/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import SideBar from './Sidebar';

const Root = styled.nav`
  display: flex;
  width: 100%;
  height: 6rem;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  flex: 1;
  @media (max-width: 800px) {
    display: none;
  }

`
;

const CustomLink = styled.a`
  color: #1d1f22;
  font-family: OpenSans;
  font-size: 16px;
  line-height: 21.79px;
  text-align: left;
  cursor: pointer;
  min-width: 170px;
`;
const DivBurger = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: flex;
  }
`;

const MainNavigation = () => {
  const { t } = useTranslation();

  return (
    <>
    <Root>
      <Link href="#">
        <CustomLink>{t('about')}</CustomLink>
      </Link>
      <Link href="#">
        <CustomLink>{t('services')}</CustomLink>
      </Link>
      <Link href="#">
        <CustomLink>{t('careers')}</CustomLink>
      </Link>
      <Link href="#">
        <CustomLink>{t('functions')}</CustomLink>
      </Link>
    </Root>
    <DivBurger>
      <SideBar pageWrapId={'page-wrap'} outerContainerId={'App'} />
    </DivBurger>
   </>
  );
};

export default MainNavigation;
