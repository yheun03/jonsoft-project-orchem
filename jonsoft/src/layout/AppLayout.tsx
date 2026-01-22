import { Outlet } from "react-router-dom";
import Gnb from "./Gnb";
import Lnb from "./Lnb";

type LayoutType = "lnb-gnb" | "gnb-gnb";

type AppLayoutProps = {
    layoutType?: LayoutType;
};

export default function AppLayout({ layoutType = "lnb-gnb" }: AppLayoutProps) {
    return (
        <div className={`app-layout app-layout--${layoutType}`}>
            <div className="app-layout__grid">
                <div className="app-layout__gnb">
                    <Gnb />
                </div>
                <div className="app-layout__lnb">
                    <Lnb />
                </div>
                <main className="app-layout__content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
