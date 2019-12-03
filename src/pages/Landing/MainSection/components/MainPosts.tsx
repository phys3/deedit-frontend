
import styled from 'styled-components/macro';
import * as theme from '../../../../lib/theme/theme';
import * as React from 'react';

const AllPostsWrapper = styled.div`

width:640px;


`
const IndividualPost = styled.div`

width:100%;
display:flex;
flex-direction:column;

`

const UserName = styled.div`

font-size:8px;

`

const MainPosts = ()=>{

   
    
    return(
   <AllPostsWrapper>
    <IndividualPost>
<UserName>Pero Perić</UserName>



    </IndividualPost>
    </AllPostsWrapper>
        
    )
    
    }
    
    export default MainPosts;
    

