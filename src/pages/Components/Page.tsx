import * as React from 'react';
import styled from 'styled-components/macro';

const Viewport = styled.div`
  position: absolute;
  top: 0;
  background-color: #ededed;
  bottom: 0;
  left: 0;
  right: 0;

  min-width: 320px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ededed;
`;

const Page:React.FC = ({ children }:any) => {
  return (
    <Viewport>
      <Content>{children}</Content>
    </Viewport>
  );
};

export default Page;
