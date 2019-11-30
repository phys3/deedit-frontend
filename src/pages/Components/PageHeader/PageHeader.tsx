import * as React from 'react';
// import styled from 'styled-components/macro';
import {HeaderBox,HeaderWrapper,MarginSpacer} from "./style"
import AdaPoolHeader from './components/AdaPool'
import LogoSection from './components/Logo'
import TimeLeft from './components/TimeLeft'
import Login from './components/LogIn'
import Search from './components/Search'


const Header = ()=>{


    return(
<>

        <HeaderBox>
            <HeaderWrapper>





<LogoSection/>

<AdaPoolHeader/>

<TimeLeft/>


<Login/>
<Search/>



       
            </HeaderWrapper>
            </HeaderBox>
            <MarginSpacer/>
           
            </>
    )

}

export default Header;