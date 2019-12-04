import * as React from 'react';
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom';



const LogoWrapper =styled.div`

display:flex;
height:100%;

`

const LogoImage = styled.img`

width:50px;
height:100%;

`



const LogoSection = ()=>{


return(
<LogoWrapper>
    <Link to ="/">
    <LogoImage src = "https://www.pngkey.com/png/detail/141-1416946_logos-what-is-a-generic-logo-transparent-background.png"/>
    </Link> 
</LogoWrapper>


)

}

export default LogoSection