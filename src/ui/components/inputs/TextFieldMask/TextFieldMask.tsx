import React from "react";
import InputMask from 'react-input-mask';
import TextField from 'ui/components/inputs/TextField/TextField';

const TextFieldMask = (props) => {
    return (
        <InputMask mask={'99.999-999'}>
            {()=> {
                return <TextField {...props}/>
            }}
        </InputMask>
    );
}

export default TextFieldMask;