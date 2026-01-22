import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.tsx";
import NotFound from "../pages/NotFound.tsx";
import AppLayout from "../layout/AppLayout.tsx";

export default function AppRoutes() {
    return (
        <Routes>
            {/* AppLayout에 속성을 추가하여 레이아웃 타입을 지정할 수 있도록 함 (lnb-gnb, gnb-gnb) */}
            <Route element={<AppLayout layoutType="gnb-gnb" />}>
                <Route path="/" element={<Home />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
