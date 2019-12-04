import * as React from 'react';
import styled from "styled-components"

const ButtonsWrapper = styled.div`
display:flex;
`



interface TitleProps {
    readonly marginRight?: string;
  };
  
  const LoginButton = styled.button<TitleProps>`
    margin-right: ${props => props.marginRight };
  `




const Login = ()=>{

  


    return(
        <ButtonsWrapper>
<LoginButton marginRight ="22px" >Log In</LoginButton>

<LoginButton >Sign Up</LoginButton>
</ButtonsWrapper>
    )
}

export default Login;