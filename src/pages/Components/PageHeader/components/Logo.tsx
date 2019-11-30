import * as React from 'react';
import styled from 'styled-components/macro'



const LogoWrapper =styled.div`

display:flex;
height:100%;

`

const LogoImage = styled.img`

width:50px;

`



const LogoSection = ()=>{


return(
<LogoWrapper>
    <LogoImage src = "https://www.pngix.com/pngfile/middle/193-1937265_png-wic-logo-png-transparent-png.png"/>
</LogoWrapper>


)

}

export default LogoSection