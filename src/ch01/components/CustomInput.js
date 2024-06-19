function CustomInput({ ph, disabled, value }) {
    // console.log(props);
    return <input type="text" placeholder={ph} disabled={disabled} value={value} />
}

// function CustomInput({ ph = "test", disabled = false, value = "빈값" }) {
//     // console.log(props);
//      return <input type="text" placeholder={ph} disabled={disabled} defaultValue={value} />
// }

CustomInput.defaultProps = {
    ph: "test",
    disabled: false,
    value: "빈값",
}

export default CustomInput;