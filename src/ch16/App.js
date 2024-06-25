import { useState } from "react";
import "./App.css"

function App() {
    const emptyUser = {
        name: "",
        email: ""
    }
    const [ userList, setUserList ] = useState([]);
    const [ inputData, setInputData ] = useState({...emptyUser});
    const [ imgSrc, setImgSrc ] = useState("");
    
    const handleImgClick = () => {
        const fileElement = document.createElement("input");
        fileElement.setAttribute("type", "file");
        fileElement.click();
        fileElement.onchange = (e) => {
            const file = e.target.files[0];
            const fileReader = new FileReader();

            fileReader.onload = (e) => {
                setImgSrc(e.target.result);
            }
            fileReader.readAsDataURL(file);
        }
    }

    const handleInputKeyDown = (e) => {

    }


    return ( 
        <div className="flex container">
            <h1 className="profile">프로필</h1>
            <div className="img-frame">
                <img src={imgSrc} alt="" onClick={handleImgClick}/>
            </div>
            <label for="name">이름</label>
            <input className="name-input" type="text" name="name" value={inputData.name} />
            <label for="email">이메일</label>
            <input className="email-input" type="text" name="email" value={inputData.email} />
            <button className="save-button">저장</button>
        </div>
     );
}

export default App;