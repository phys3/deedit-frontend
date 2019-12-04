
import * as React from 'react';
// import  {Link} from "react-router-dom";
import {Page, PageDocumentHead, PageHeader, SecondaryHeader} from "../Components/index";
// import styled from 'styled-components';
import {MainSection} from './style'
import MainPosts from './MainSection/Components/MainPosts'


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
{/* TODO: delete section css in global style when replacing section code */}
<section>BOX LEFT</section>
<MainPosts/>
<section>BOX RIGHT</section>
 </MainSection>


</Page>

);


};

export default LandingPage;
