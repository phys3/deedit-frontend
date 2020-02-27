import * as React from 'react';
import styled from 'styled-components/macro'

const Content = styled.div`

:hover{
    background-color: #ddd;

}
`


const DropdownContent = styled.div`

display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

`

const Sort = styled.div`
  position: relative;
  display: inline-block;
&:hover ${DropdownContent}{

    display:block;
}

`




const SortBy:React.FC = ()=> {


    return(<Sort>Sort content

<DropdownContent>
<Content>Hot</Content>
<Content>Trending</Content>
<Content>Fresh</Content>
</DropdownContent>

    </Sort>)
}

export default SortBy;