
import styled from 'styled-components/macro';
import * as theme from '../../../lib/theme/theme';

const HeaderBox = styled.header`

width:100%;
height:50px;
background:green;
padding: 0 40px;
box-sizing: border-box;
width: 100%;

box-shadow: 0 8px 16px 0 rgba(61,61,77,0.1);
background-color: #3D9970;
position: fixed;
z-index: 101;
/* ${theme.Devices.large}{


    background:green;
} */
`

const HeaderWrapper = styled.div`
max-width:1032px;
margin: 0 auto;
display:flex;
height: 100%;
align-items: center;
justify-content:space-between;
`

const Test = styled.div`


`

const Logo = styled.img`


`

const MarginSpacer = styled.div `
margin-bottom:50px;
`





export{HeaderBox, HeaderWrapper, MarginSpacer, Logo, Test}