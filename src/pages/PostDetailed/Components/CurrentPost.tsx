import styled from "styled-components/macro";

import * as React from "react";
import  {Link} from "react-router-dom";

type defineProps = {
  fontSize?: string;
  marginTop?: string;
  marginLeft?: string;
  opacity?: string;
};



const IndividualPost = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const UserNameAndTitle = styled.div<defineProps>`
  font-size: ${props => props.fontSize};
  margin-top: ${props => props.marginTop};
  opacity: ${props => props.opacity};
`;

const PostContent = styled.img<defineProps>`
  margin-top: ${props => props.marginTop};
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
  padding-bottom:8px;
  width: 100%;
`;
const PostMeta = styled.div<defineProps>`
  font-size: ${props => props.fontSize};
  margin-top: ${props => props.marginTop};
  opacity: ${props => props.opacity};
`;

const PostButtonsContainer = styled.div<defineProps>`
  width: 100%;
  height: 40px;
  margin-top: ${props => props.marginTop};

  opacity: 1;
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;

 
`;

const ButtonGroupContainer = styled.div`
  height: inherit;
`;
const IndividualButton = styled.img<defineProps>`
  height: inherit;
  border: 2px solid black;
  margin-left: ${props => props.marginLeft};
  box-sizing: border-box;
`;

const CommentsHeader = styled.div<defineProps>`

display:flex;
font-weight:700;
`

const PostComment = styled.div<defineProps>`
margin-top:24px;
display:flex;
padding:8px;
position:relative;

`

const UserAvatar = styled.img`

width:80px;
border-radius: 60px;

`

const SubmitCommentTextArea = styled.textarea`
resize:none;
margin-left:16px;
width:100%;

`

const ButtonPost = styled.button`

position:absolute;
right: 8px;
bottom: -20px;

`




const CurrentPost = () => {
  return (
   
      <IndividualPost>
        <UserNameAndTitle opacity="0.5" marginTop="8px" fontSize="14px">
          Pero_5327 (10h)
        </UserNameAndTitle>
        <UserNameAndTitle marginTop="6px" fontSize="22px">
          Checkmate
        </UserNameAndTitle>
      
        <PostButtonsContainer marginTop="12px">
          <ButtonGroupContainer>
            <IndividualButton src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png" />
            <IndividualButton
              marginLeft="8px"
              src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-512.png"
            />
          </ButtonGroupContainer>
          <PostMeta marginTop="8px" opacity="0.5">
          338 points · 31 comments{" "}
        </PostMeta>
          <ButtonGroupContainer>
            <IndividualButton src="https://i7.pngguru.com/preview/273/136/42/computer-icons-online-chat-text-messaging-sms-comment-pic-png.jpg" />
            <IndividualButton
              marginLeft="8px"
              src="https://images.vexels.com/media/users/3/132093/isolated/lists/9da7cf8cb0c670c8664f5f5629e95e73-share-social-icon.png"
            />
            <IndividualButton
              marginLeft="8px"
              src="https://www.pikpng.com/pngl/m/1-18123_star-png-clipart-png-image-gold-star-transparent.png"
            ></IndividualButton>
          </ButtonGroupContainer>
        </PostButtonsContainer>
        <PostContent
          marginTop="8px"
          src="https://img-9gag-fun.9cache.com/photo/aBgZ2zO_460swp.webp"
        />
    <CommentsHeader>11 Comments</CommentsHeader>
   <PostComment>
<UserAvatar src= "https://accounts-cdn.9gag.com/media/default-avatar/1_0_100_v0.jpg"/>
<SubmitCommentTextArea></SubmitCommentTextArea>
<ButtonPost>Post</ButtonPost>
   </PostComment>
       
       
      </IndividualPost>
    
  );
};

export default CurrentPost;
