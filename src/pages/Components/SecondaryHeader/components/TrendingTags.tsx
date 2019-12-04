import * as React from 'react';
import styled from 'styled-components/macro'




const TagsContainer = styled.div`

display:flex;

color:blue;
text-decoration:underline;
font-weight: 700;

`

const Span = styled.span`
color:#3D9970;
text-decoration:inherit;

`

const TrendingTags = ()=>{






return (<TagsContainer> 
   <Span>THE DEEDS </Span>  &nbsp; Thanksgiving,
    Black Friday,
    Pokemon,
    Tesla,
    Yoda
    </TagsContainer>)

}

export default TrendingTags;