import styled from "styled-components/macro";

import * as React from "react";
// import  {Link} from "react-router-dom";

type defineProps = {
  fontSize?: string;
  fontWeight?: string;
  marginTop?: string;
  marginLeft?: string;
  opacity?: string;
  transform?: string;
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

const CreatePost = () => {
  return (
    <CreatePostFormMainContainer>
      <CreatePostFormContainer>
        <CreatePostHeader>
          <ChooseHeader>Post</ChooseHeader>
          <ChooseHeader>Image</ChooseHeader>
          <ChooseHeader>Link</ChooseHeader>
        </CreatePostHeader>
        bok bok
      </CreatePostFormContainer>
    </CreatePostFormMainContainer>
  );
};

export default CreatePost;
