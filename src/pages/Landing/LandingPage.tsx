
import * as React from 'react';
// import  {Link} from "react-router-dom";
import {Page, PageDocumentHead, PageHeader, SecondaryHeader} from "../Components/index";
// import styled from 'styled-components';
import {MainSection} from './style'
import MainPosts from './MainSection/components/MainPosts'


// const LinkStyled = styled(Link)`

// width: max-content;
// `

const LandingPage =()=>{




return (
<Page>
 <PageDocumentHead />
    <PageHeader/>
    <SecondaryHeader/>
    {/* <LinkStyled to="/post">Landing page !</LinkStyled> */}
  
 <MainSection>

<section>box</section>
<MainPosts/>
<section>box</section>
 </MainSection>


</Page>

);


};

export default LandingPage;
