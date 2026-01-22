import { useState } from "react";
import SettingIcon from "../assets/icons/28/ic-setting.svg?react";

export default function Lnb() {
    const [isClosed, setIsCollapsed] = useState(false);

    return (
        <aside className={`lnb${isClosed ? " lnb--closed" : ""}`}>
            <nav className="lnb__nav">
                <button type="button" className="lnb__icon-button" aria-label="설정">
                    <SettingIcon className="lnb__icon" aria-hidden="true" focusable="false" />
                </button>
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
