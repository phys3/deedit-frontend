import * as React from "react";
// import styled from 'styled-components/macro';
import { HeaderBox, HeaderWrapper, MarginSpacer } from "./style";
import AdaPoolHeader from "./Components/AdaPool";
import LogoSection from "./Components/Logo";
import TimeLeft from "./Components/TimeLeft";
import Login from "./Components/LogIn";
import Search from "./Components/Search";

const Header = () => {
  return (
    <>
      <HeaderBox>
        <HeaderWrapper>
          <LogoSection />

          <AdaPoolHeader />

          <TimeLeft />

          <Login />
          <Search />
        </HeaderWrapper>
      </HeaderBox>
      <MarginSpacer />
    </>
  );
};

export default Header;
