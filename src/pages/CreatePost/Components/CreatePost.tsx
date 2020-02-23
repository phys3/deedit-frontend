import styled from "styled-components/macro";

import * as React from "react";
import {useState} from "react";
// import SunEditor from 'suneditor-react';
// import  {Link} from "react-router-dom";

// type defineProps = {
//   fontSize?: string;
//   fontWeight?: string;
//   marginTop?: string;
//   marginLeft?: string;
//   opacity?: string;
//   transform?: string;
//   size?: string;
// };

const CreatePostFormMainContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
`;

const CreatePostFormContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  background: #1a1a1b;
  height: 400px;
  border-radius: 6px;
  margin-top:80px;
`;

const CreatePostHeader = styled.div`
  display: flex;
  justify-content:space-between;
  border-bottom:1px solid gray;
`;
const ChooseHeader = styled.div`


font-weight:700;
color:gray;
padding:20px;
transition:0.3s all;
:hover{color:white;}
`;

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



const CreatePost = () => {

const [Limit, setLimit] = useState(0);

const [PostType, setPostType] = useState(1)

let postSection;

// if(Limit ===5){ postSection = <div>fef</div>}

  return (
    <CreatePostFormMainContainer>
      <CreatePostFormContainer>
        <CreatePostHeader>
          <ChooseHeader>Post</ChooseHeader>
          <ChooseHeader>Image</ChooseHeader>
          <ChooseHeader>Link</ChooseHeader>
        </CreatePostHeader>
        <PostContentContainer>  
          <PostTitleWrapper> 
         <PostTitle  maxLength={50} onChange={e => {console.log(e.target.value.length)
         setLimit(e.target.value.length)}}
         type='text' name='Post Title'  placeholder="Post Title"/>
<Counter>{Limit}/50</Counter>
</PostTitleWrapper>

           </PostContentContainer>
   
      </CreatePostFormContainer>
    </CreatePostFormMainContainer>
  );
};

export default CreatePost;
