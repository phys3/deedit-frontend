import * as React from 'react';
import {Page, PageDocumentHead, PageHeader, SecondaryHeader} from "../Components/index";
import {MainSection} from './style'
import CreatePost from './Components/CreatePost'


const CreatePostPage = ()=>{

return (


<Page>
 <PageDocumentHead />
    <PageHeader/>
    <SecondaryHeader/>

    <MainSection>
{/* TODO: delete section css in global style when replacing section code */}

<CreatePost/>
<section>BOX RIGHT</section>
 </MainSection>

</Page>
)

}

export default CreatePostPage;