import * as React from 'react';
import styled from 'styled-components/macro'




const TagsContainer = styled.div`

display:flex;

color:blue;
text-decoration:underline;
font-weight: 700;

` 

const TrendingTags = ()=>{






return (<TagsContainer> 
    Thanksgiving,
    Black Friday,
    Pokemon,
    Tesla,
    Yoda
    </TagsContainer>)

}

export default TrendingTags;