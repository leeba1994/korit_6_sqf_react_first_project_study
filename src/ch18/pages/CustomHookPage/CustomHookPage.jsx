import React, { useState } from 'react';
import { useInput } from '../../hooks/useInput';

function CustomHookPage(props) {
    // const [ value, setValue ] = useState("");


    // const handleChange = (e) => {
    //     if(e.target.value.length < 21) {
    //         setValue(e.target.value);
    //     }
    // }

    // const { value, onChange } = useInput("test", 20);
    // const { value, onChange } = useInput("test", 20);
    const usernameInput = useInput("test", 20);
    const passwordInput = useInput("", 10);

    return (
        <div>
            <input type="text" onChange={usernameInput.onChange} value={usernameInput.value} />
            <input type="password" onChange={passwordInput.onChange} value={passwordInput.value} />
        </div>
    );
}

export default CustomHookPage;