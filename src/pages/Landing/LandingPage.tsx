
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
<section>BOX LEFT (Mozda levi sidebar sticky s kul stvarima poput keyboard shortcuts, trenutna statistika (brzina misa, scrollano metara ovaj session ...)</section>
<MainPosts/>
<section>BOX RIGHT(Achievementi u real time-u kak ih useri dobivaju<br></br><br></br><br></br>
(pokazuju se samo zesci achievementi(tipa golden))
<br></br><br></br>
Ovotjedni best useri (najvise osvojenih points, (achievements+statistiks))

<br></br>
<br></br>
Best comments od postova from day, week il nest slicno
</section>
 </MainSection>


</Page>

);


};

export default LandingPage;
