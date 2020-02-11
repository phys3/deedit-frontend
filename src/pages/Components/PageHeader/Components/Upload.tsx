import * as React from 'react';
import  {useState} from 'react';
import styled from 'styled-components/macro'
import  {Link} from "react-router-dom";

type defineProps={
displaybutton?:string


}






const UploadPost = styled(Link)<defineProps>`

:hover{
    background:#272729;

}
text-align:center;
vertical-align: middle;
line-height: 40px;  
width:fit-content;
padding:0px 16px;
border-radius:32px;
position: absolute;
right: 33px;
background:#1A1A1B;
color:white;
font-weight:700;
display:${props => props.displaybutton };

`

const Upload = ()=>{

    const [uploadButton, setUploadButton] = useState(false)
    const [uploadSwitcher, setUploadSwitcher] = useState(true)
    if (window.location.pathname.includes("create-post") && uploadSwitcher){
        setUploadSwitcher(false);
        setUploadButton(true);  
    }

    return(<UploadPost displaybutton = {uploadButton ?"none":"block"} to ="/create-post" >&#10010; Upload</UploadPost>)
}

export default Upload