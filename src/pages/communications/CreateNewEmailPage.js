import React from "react";
import EmailEditor from "./EmailEditor";

function CreateNewEmailPage(){
    const initialEmailState = {
        id:"",
        subject:"",
        content:"",
        attachments:null,
        createdBy:1,
        recipients:[],
        recipientGroups:[]
    };
    
    return(<EmailEditor initialEmailState={initialEmailState}/>);
}
export default CreateNewEmailPage;