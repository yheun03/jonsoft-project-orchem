import { useState } from "react";

export default function Lnb() {
    const [isClosed, setIsCollapsed] = useState(false);

    return (
        <aside className={`lnb${isClosed ? " lnb--closed" : ""}`}>
            <nav className="lnb__nav">
                <button
                    type="button"
                    className="lnb__toggle"
                    aria-expanded={!isClosed}
                    onClick={() => setIsCollapsed((prev) => !prev)}
                >
                    {isClosed ? ">" : "<"}
                </button>
            </nav>
        </aside>
    );
}
