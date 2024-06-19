function Button({ text, setNumber }) {

    const handleClick = () => {     
        if(text === "증가") {
            setNumber(number => number + 1); //최적화
        }

        if(text === "감소") {
            setNumber(number => number - 1); //최적화
        }
    }

    return <button onClick={handleClick}>{ text }</button>
}

export default Button;