import styled from "styled-components/macro";

import * as React from "react";
import {useState, useRef} from "react";
import JoditEditor from "jodit-react";

type defineProps = {
 
  marginPost?:any;
};



const CreatePostFormMainContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  
`;

const CreatePostFormContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  background: #575757;
  /* background-color: green; */

  height:max-content;
  border-radius: 6px;
  margin-top:80px;
`;

const CreatePostHeader = styled.div`
  display: flex;
  justify-content:space-between;
  border-bottom:1px solid gray;
`;
const ChooseHeader = styled.div<defineProps>`

width: 100%;
text-align: center;
font-weight:700;
color:gray;

padding:20px;
transition:0.3s all;
:hover{color:white;}
`;

const ChooseHeaderPost = styled(ChooseHeader)`
border-bottom : ${props => props.marginPost ==="post" && "2px solid gray"};
`

const ChooseHeaderImage = styled(ChooseHeader)`
border-bottom : ${props => props.marginPost ==="image" && "2px solid gray"};
`

const ChooseHeaderUrl = styled(ChooseHeader)`
border-bottom : ${props => props.marginPost ==="url" && "2px solid gray"};
`


const PostContentContainer = styled.section`

padding: 16px 12px 12px 12px;
width: 100%;
height: 100%;
border: unset;
margin:unset;
box-sizing:border-box;


`

const PostTitle = styled.input`

color:white;
background-color:#272729;
width:100%;
padding: 0 20px;
border-radius:4px;

:focus{

  border:3px solid #D7DADC;
}
`
const PostTitleWrapper = styled.div`

display:flex;
width: 100%;
box-sizing: border-box;
height: 42px;
margin-bottom: 32px;
border-radius: 4px;
background-color:#272729;
position:relative;


`

const Counter = styled.div`
position:absolute;
right: 10px;
height: 42px;
top: 10px;
color:white;

`

const SubmitContainer = styled.div`

display:flex;
`



const CreatePost = () => {

const [Limit, setLimit] = useState(0);

const [PostType, setPostType] = useState("post")

let postSection;


const editor = useRef(null)
	const [content, setContent] = useState('')
	
	const config = {
    readonly: false,
    minHeight: 350,
    theme: "dark"// all options from https://xdsoft.net/jodit/doc/
	}
	


// TODO: use better definitions for types

let testniObjekt :any = {

  post:<JoditEditor
  ref={editor}
    value={content}
    config={config}
  
  onBlur={newContent => setContent(newContent)} 
    // onChange={newContent => {console.log(newContent)}}
  />,
  image:<div>upload image  </div>,
  url:<div>url</div>
  
  } 
  


  return (
    <CreatePostFormMainContainer>
      <CreatePostFormContainer>
        <CreatePostHeader>
          <ChooseHeaderPost marginPost={PostType} onClick={()=>{

setPostType("post")
          }}>Post</ChooseHeaderPost>
          <ChooseHeaderImage marginPost={PostType} onClick={()=>{

setPostType("image")
          }}>Image</ChooseHeaderImage>
          <ChooseHeaderUrl marginPost={PostType}  onClick={()=>{

setPostType("url")
          }}>Link</ChooseHeaderUrl>
        </CreatePostHeader>
        <PostContentContainer>  
          <PostTitleWrapper> 
         <PostTitle  maxLength={50} onChange={e => {
          //  console.log(e.target.value.length)
         setLimit(e.target.value.length)}}
         type='text' name='Post Title'  placeholder="Post Title"/>
<Counter>{Limit}/50</Counter>
</PostTitleWrapper>
{testniObjekt[PostType] } 

<SubmitContainer>ded</SubmitContainer>
           </PostContentContainer>
   
      </CreatePostFormContainer>
    </CreatePostFormMainContainer>
  );
};

export default CreatePost;
