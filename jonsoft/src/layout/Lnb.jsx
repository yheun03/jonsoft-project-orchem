import { useState } from "react";

export default function Lnb() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <aside className={`lnb${isCollapsed ? " lnb--collapsed" : ""}`}>
            <nav className="lnb__nav">
                <button
                    type="button"
                    className="lnb__toggle"
                    aria-expanded={!isCollapsed}
                    onClick={() => setIsCollapsed((prev) => !prev)}
                >
                    {isCollapsed ? ">" : "<"}
                </button>
                <span className="lnb__title">
                    <span className="lnb__title-text">LNB</span>
                </span>
            </nav>
        </aside>
    );
}
