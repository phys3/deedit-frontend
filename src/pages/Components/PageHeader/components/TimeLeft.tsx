import * as React from 'react';
import styled from 'styled-components/macro'



const TimeLeftUntillAchievement = styled.div`


`


const TimeLeft = ()=>{


let now = new Date();

let numberOfDaysInMonth= new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();

let daysLeft= numberOfDaysInMonth+1 - new Date().getDate();
    return(<TimeLeftUntillAchievement>
       Days untill next achievement: {daysLeft} day
        </TimeLeftUntillAchievement>)
}

export default TimeLeft