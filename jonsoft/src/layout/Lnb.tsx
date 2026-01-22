import { Link } from "react-router-dom";

type LnbProps = {
    isClosed: boolean;
    onToggle: () => void;
};

export default function Lnb({ isClosed, onToggle }: LnbProps) {
    return (
        <aside className={`lnb${isClosed ? " lnb--closed" : ""}`}>
            <button type="button" onClick={onToggle} aria-label="LNB 토글" />
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
