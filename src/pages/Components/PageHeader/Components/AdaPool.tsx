import * as React from 'react';
import styled from 'styled-components/macro'

const AdaWrapper = styled.div`



`

const AdaPoolHeader = ()=>{

let currentAda:number = 200531;

return(
<AdaWrapper >
Ada Pool: {currentAda} ADA
</AdaWrapper>
    
)

}

export default AdaPoolHeader;
