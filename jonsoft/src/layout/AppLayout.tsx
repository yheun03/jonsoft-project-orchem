import { useState } from "react";
import { Outlet } from "react-router-dom";
import Gnb from "./Gnb.tsx";
import Lnb from "./Lnb.tsx";

type LayoutType = "lnb-gnb" | "gnb-gnb";

type AppLayoutProps = {
    layoutType?: LayoutType;
};

export default function AppLayout({ layoutType = "lnb-gnb" }: AppLayoutProps) {
    const [isLnbClosed, setIsLnbClosed] = useState(false);
    const handleToggleLnb = () => setIsLnbClosed((prev) => !prev);

    return (
        <div className={`app-layout app-layout--${layoutType}`}>
            <div className="app-layout__grid">
                <div className="app-layout__gnb">
                    <Gnb onToggleLnb={handleToggleLnb} />
                </div>
                <div className="app-layout__lnb">
                    <Lnb isClosed={isLnbClosed} onToggle={handleToggleLnb} />
                </div>
                <main className="app-layout__content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
