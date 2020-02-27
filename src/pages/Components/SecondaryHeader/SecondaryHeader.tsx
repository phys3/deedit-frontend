import * as React from 'react';
// import styled from 'styled-components/macro';

import  {HeaderWrapper } from './style'

import SortBy from './components/Sort'
import TrendingTags from './components/TrendingTags'
import AchievementBrowser from './components/AchievementBrowser'



const SecondaryHeader:React.FC = ()=>{


    return(
    
        <HeaderWrapper>

<SortBy/>
<TrendingTags/>
<AchievementBrowser/>
        </HeaderWrapper>
    )
}

export default SecondaryHeader;