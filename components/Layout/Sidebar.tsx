import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import styled from '@emotion/styled';
import Link from 'next/link';
import { theme } from '../../styles/theme';
import LanguageSelector from '../LanguageSelector';
import { useTranslation } from 'next-i18next';

const Main = styled.div`
  background-color: #30a996;
`;
const CustomLink = styled.a`
  text-transform: uppercase;
  display: block;
  flex: 1;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1.4rem;
  color: ${theme.colors.white};
  margin-bottom: 2rem;
  cursor: pointer;
  background-color:  '#099bb8' : 'none';
  padding: '1rem 0' : '0rem';
  border: $: '2px solid transparent';
`;

const SideBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    setMenuOpen(false);
  }, [menuOpen]);

  const { t } = useTranslation();

  return (
    <Menu
      pageWrapId={'page-wrap'}
      outerContainerId={'outer-container'}
      isOpen={menuOpen}
    >
      <Main>
        <Link href="#">
          <CustomLink
            className="menu-item"
            onClick={() => {
              setMenuOpen((prevState) => !prevState);
            }}
          >
            {t('careers')}
          </CustomLink>
        </Link>
        <Link href="#">
          <CustomLink
            className="menu-item"
            onClick={() => {
              setMenuOpen((prevState) => !prevState);
            }}
          >
            {t('functions')}{' '}
          </CustomLink>
        </Link>
        <Link href="#">
          <CustomLink
            className="menu-item"
            onClick={() => {
              setMenuOpen((prevState) => !prevState);
            }}
          >
            {t('services')}
          </CustomLink>
        </Link>
        <Link href="#">
          <CustomLink
            className="menu-item"
            onClick={() => {
              setMenuOpen((prevState) => !prevState);
            }}
          >
            {t('about')}
          </CustomLink>
        </Link>
        <Link href="#">
          <CustomLink
            className="menu-item"
            onClick={() => {
              setMenuOpen((prevState) => !prevState);
            }}
          >
            {t('labelBtnHeader')}
          </CustomLink>
        </Link>
        <Link href="#">
          <CustomLink
            className="menu-item"
            onClick={() => {
              setMenuOpen((prevState) => !prevState);
            }}
          >
            <LanguageSelector />
          </CustomLink>
        </Link>
      </Main>
    </Menu>
  );
};
SideBar.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});
export default SideBar;
