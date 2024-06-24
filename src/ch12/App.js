import { useEffect, useState } from "react"

function App() {
    const [ number, setNumber ] = useState(0);
    const [ number2, setNumber2 ] = useState(0);
    const [ number3, setNumber3 ] = useState(0);

    useEffect(() => {
        // 마운트 지점
        console.log(number2);
        setNumber3(number * 10);
        return () => {
            // 언마운트 지점
        }
        // setNumber2(number * 10);
    }, [number, number2]);            /* 훅함수 -  2 함수 [] 디펜던시, 첫 호출 한번만 작동후 이후 number 상태변화 후 작동, 디펜던시가 없으면 첫 렌더링때 1번만 작동*/

    const handleButtonClick = (e) => {
        setNumber(a => a + 1);
        // setNumber2(number * 10);
    }

    const handleButtonClick2 = (e) => {
        setNumber2(b => b + 10);
        
    }

    return (
        <>
            <h1>{number}</h1>
            <h1>{number2}</h1>
            <h1>{number3}</h1>
            <button onClick={handleButtonClick}>num1 증가</button>
            <button onClick={handleButtonClick2}>num2 증가</button>
        </>
    );
}

export default App;