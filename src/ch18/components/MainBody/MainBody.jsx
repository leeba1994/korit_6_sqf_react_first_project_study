/** @jsxImportSource @emotion/react */
import { Link, Route, Routes } from "react-router-dom";
import * as s from "./style";
import RouteStudyPage from "../../pages/RouteStudyPage/RouteStudyPage";


function MainBody(props) {
    return (
        <div css={s.layout}>
            <Link to={"/routestudy"}><h1>routestudy이동</h1></Link>
            <Link to={"/routestudy/page1/name"}><h1>이름 페이지이동</h1></Link>
            <Routes>
                <Route path="/routestudy/*" element={<RouteStudyPage />} /> 
            </Routes>
        </div>
    );
}

export default MainBody;