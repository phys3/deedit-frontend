import * as React from 'react';
import styled from 'styled-components/macro'

const SearchPost = styled.img`

width:20px;
`

const Search:React.FC = ()=>{


    return(<SearchPost src="https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon-by-vexels.png"/>)
}

export default Search