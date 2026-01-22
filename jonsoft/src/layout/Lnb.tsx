import { useState } from "react";
import { Link } from "react-router-dom";
import SettingIcon from "../assets/icons/28/ic-setting.svg?react";

export default function Lnb() {
    const [isClosed, setIsCollapsed] = useState(false);

    return (
        <aside className={`lnb${isClosed ? " lnb--closed" : ""}`}>
            <div className="lnb-header">
                <button
                    type="button"
                    className="lnb__toggle"
                    aria-expanded={!isClosed}
                    onClick={() => setIsCollapsed((prev) => !prev)}
                >
                    <SettingIcon aria-hidden="true" focusable="false" />
                </button>
            </div>
            <div className="lnb-body">
                <nav className="lnb__nav">
                    <ul className="lnb__nav-list">
                        <li className="lnb__nav-item">
                            <Link to="/" className="lnb__nav-link">
                                <span className="lnb__nav-text">Home</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}
