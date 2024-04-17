import React from "react";

function CreateList(props)
{
    return(
        <div  onClick={() => { props.onChecked(props.id); }}
        >
            <li > {props.text}</li>
        </div>
    );
}

export default CreateList;

