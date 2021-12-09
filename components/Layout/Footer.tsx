import React from 'react';
import styled from '@emotion/styled';

const Root = styled.footer`
  display: flex;
  padding: 1rem;
  background-color: #242726;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  width: 258px;
  height: 103px;
`;

const Label = styled.span`
  color: #ffffff;
  font-family: Montserrat;
  font-size: 19px;
  line-height: 23px;
  text-align: justify;
`;
const Column = styled.div`
  flex-direction: column;
  flex: 1;
`;
const Img = styled.img`
  width: 60px;
  height: 60px;
`;
const Row = styled.div`
  flex-direction: row;
  text-align: center;
`;
const ColumnCustom = styled.div`
  flex-direction: column;
  flex: 1;
  display: flex;
  @media (max-width: 800px) {
    display: none;
  }
`;
const Text = styled.span`
  color: #ffffff;
  font-family: Montserrat;
  font-size: 19px;
  line-height: 23px;
  text-align: justify;
`;
const Input = styled.input`
  border: 3px solid #2e8174;
  width: 44%;
  border-radius: 3px;
`;

const Footer = ({ t }) => {
  return (
    <Root>
      {/* <Conatiner> */}
      <Column>
        <Logo src="/assets/images/logo_aleia.png" />
      </Column>
      <Column>
        <Row>
          <Text>Send your mail to stay </Text>
        </Row>
        <Row style={{ marginTop: '13px' }}>
          <Input placeholder="yourmail@email.com" />
        </Row>
      </Column>
      {/* </Conatiner> */}

      <ColumnCustom>
        <Row>
          <Label>Follow us</Label>
        </Row>
        <Row style={{ marginTop: '13px' }}>
          <Img src="/assets/images/facebook.png" />
          <Img src="/assets/images/linkedIn.png" />
          <Img src="/assets/images/twitter.png" />
        </Row>
      </ColumnCustom>
    </Root>
  );
};
Footer.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Footer;
