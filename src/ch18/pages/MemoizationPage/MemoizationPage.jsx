import React, { useCallback, useMemo, useState } from 'react';

function MemoizationPage(props) {
    const [ value, setValue ] = useState(0);
    const [ value2, setValue2 ] = useState(0);
    const [ num, setNum ] = useState(0);
    const [ num2, setNum2 ] = useState(0);


    const a = useMemo(() => {
        console.log(num);
        return num + 10;
    }, [num]);
    // const a = num + 10;
    // console.log(a);
    
    const b = num2 + 20;
    // console.log(b);

    // const handleChange = (e) => {
    //     setValue(e.target.value);
    // }

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const handleChange2 = (e) => {
        setValue2(e.target.value);
    }

    // const handleClick = () => {
    //     setNum(parseInt(value));
    // }

    const handleClick = useCallback(() => {
        setNum(parseInt(value));
    }, [value]);

    const handleClick2 = () => {
        setNum2(parseInt(value2));
    }

    return (
        <div>
            <h1>{a}</h1>
            <h1>{b}</h1>
            <input type="text" onChange={handleChange} />
            <input type="text" onChange={handleChange2} />
            <button onClick={handleClick}>확인</button>
            <button onClick={handleClick2}>확인2</button>
        </div>
    );
}

export default MemoizationPage;