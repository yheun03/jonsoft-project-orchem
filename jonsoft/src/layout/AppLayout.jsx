import { Outlet } from "react-router-dom";
import Gnb from "./Gnb";
import Lnb from "./Lnb";

export default function AppLayout() {
    return (
        <div className="app-layout">
            <Gnb />
            <div className="app-layout__body">
                <Lnb />
                <main className="app-layout__content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
