import React from 'react';
import styled from '@emotion/styled';

const Root = styled.section`
  display: flex;
  flex-direction: row;
`;
const Img = styled.img``;
const Separator = () => {
  return (
    <Root>
      <Img src="/assets/images/trait.png" />
    </Root>
  );
};

export default Separator;
