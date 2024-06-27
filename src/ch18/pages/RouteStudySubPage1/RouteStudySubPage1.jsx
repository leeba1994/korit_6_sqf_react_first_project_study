/** @jsxImportSource @emotion/react */
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import * as s from "./style";
import MainBody from "../../components/MainBody/MainBody";


function RouteStudySubPage1(props) {

    const navigate = useNavigate();
    const location = useLocation();

    console.log(location.pathname);
    console.log(location.pathname.lastIndexOf("/"));
    const index = location.pathname.lastIndexOf("/");
    console.log(location.pathname.substring(index + 1));

    const handleAgeClick = () => {
        navigate("/routestudy/page1/age", {replace: true});
        // window.location.href = "https://naver.com" => replace: false
        // window.location.replace("https://naver.com") => replace: true
    }

    return (
        <div>
            <ul>
                <Link to={"/routestudy/page1/name"}><li>이름</li></Link>
                <Link to={"/routestudy/page1/age"}><li>나이</li></Link>
                <Link to={"/routestudy/page1/address"}><li>주소</li></Link>
                <Link to={"/"}><li>처음으로</li></Link>
            </ul>
            <button onClick={handleAgeClick}>나이</button>
            <div>
                <Routes>
                    <Route path="/name" element= {<h1>이병안</h1>}/>
                    <Route path="/age" element= {<h1>31</h1>}/>
                    <Route path="/address" element= {<h1>부산시 사상구</h1>}/>
                </Routes>
            </div>
        </div>
    );
}

export default RouteStudySubPage1;