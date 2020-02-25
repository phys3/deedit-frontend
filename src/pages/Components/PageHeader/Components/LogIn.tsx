import * as React from 'react';
import styled from "styled-components"
import Button from 'react-bootstrap/Button';


const ButtonsWrapper = styled.div`
display:flex;
`



interface TitleProps {
    readonly marginRight?: string;
  };
  
  const LoginButton = styled(Button)<TitleProps>`
    margin-right: ${props => props.marginRight };
  `




const Login = ()=>{

  


    return(
        <ButtonsWrapper>
<LoginButton variant="secondary" marginRight ="22px" >Log In</LoginButton>

<LoginButton variant="secondary" >Sign Up</LoginButton>
</ButtonsWrapper>
    )
}

export default Login;