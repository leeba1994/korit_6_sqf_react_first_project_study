/** @jsxImportSource @emotion/react */
import { Link, Route, Routes } from "react-router-dom";
import * as s from "./style";
import RouteStudyPage from "../../pages/RouteStudyPage/RouteStudyPage";
import HomePage from "../../pages/HomePage/HomePage";
import ParamsStudyPage from "../../pages/ParamsStudyPage/ParamsStudyPage";
import SearchParamsStudy from "../../pages/SearchParamsStudy/SearchParamsStudy";
import CustomHookPage from "../../pages/CustomHookPage/CustomHookPage";
import MemoizationPage from "../../pages/MemoizationPage/MemoizationPage";


function MainBody(props) {
    return (
        <div css={s.layout}>
            <Link to={"/routestudy"}><h1>routestudy이동</h1></Link>
            <Link to={"/routestudy/page1/name"}><h1>이름 페이지이동</h1></Link>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/routestudy/*" element={<RouteStudyPage />} /> 
                <Route path="/params/:name/*" element={<ParamsStudyPage />} />
                <Route path="/searchparams" element={<SearchParamsStudy />} />
                <Route path="/customhook/:id" element={<CustomHookPage />} />
                <Route path="/memoization" element={<MemoizationPage />} />
            </Routes>
        </div>
    );
}

export default MainBody;
