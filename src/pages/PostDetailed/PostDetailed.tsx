import * as React from 'react';
import {Page, PageDocumentHead, PageHeader, SecondaryHeader} from "../Components/index";
import {MainSection} from './style'
import CurrentPost from './Components/CurrentPost'


const PostDetailed:React.FC = ()=>{

return (


<Page>
 <PageDocumentHead />
    <PageHeader/>
    <SecondaryHeader/>

    <MainSection>
{/* TODO: delete section css in global style when replacing section code */}
<section>BOX LEFT</section>
<CurrentPost/>
<section>BOX RIGHT</section>
 </MainSection>

</Page>
)

}

export default PostDetailed;