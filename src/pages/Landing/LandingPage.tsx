
import * as React from 'react';
import  {Link} from "react-router-dom";
import {Page, PageDocumentHead, PageHeader} from "../Components/index";


const LandingPage =()=>{

return (
<Page>
{/* <PageDocumentHead/> */}
    <PageHeader/>
    <Link to="/post">Landing page</Link>
</Page>

);


};

export default LandingPage;