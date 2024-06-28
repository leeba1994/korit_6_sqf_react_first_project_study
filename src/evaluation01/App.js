import "./App.css"

function App(props) {
    return (
        <div className="container">
            <div className="container-header">
                <h1 className="profile">회원정보 수정</h1>
            </div>

            <label for="">이름:</label>
            <input className="name-input" type="text"  />
            <label for="">이메일:</label>
            <input className="email-input" type="text"  />
            <label for="">비밀번호:</label>
            <input className="password-input" type="text"  />
            <button className="save-button">저장</button>
        </div>
    );
}

export default App;