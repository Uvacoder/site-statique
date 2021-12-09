import React from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import Footer from './Footer';
import FirstBloc from 'components/Bloc/FirstBloc';
import SecondBloc from 'components/Bloc/SecondBloc';
import ThirdBloc from 'components/Bloc/ThirdBloc';
import Separator from './Separator';

const Root = styled.div``;

interface Props {
  children: any;
}

const Layout = ({ children }: Props) => {
  return (
    <Root>
      <Header />
      <FirstBloc />
      {/* <SecondBloc /> */}

      <Separator />

      <ThirdBloc />
      <Footer />
    </Root>
  );
};

export default Layout;
