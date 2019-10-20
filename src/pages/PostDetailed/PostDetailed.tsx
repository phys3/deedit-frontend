import * as React from 'react';
import {Link} from "react-router-dom";
import {Page, PageDocumentHead, PageHeader} from "../Components/index";

const PostDetailed = ()=>{

return (


<Page>
 <PageDocumentHead />
    <PageHeader/>
    <Link to ="/">posts detailed</Link>
</Page>
)

}

export default PostDetailed;