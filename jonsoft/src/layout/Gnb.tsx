type GnbProps = {
    onToggleLnb: () => void;
};

export default function Gnb({ onToggleLnb }: GnbProps) {
    return (
        <header className="gnb">
            <button type="button" onClick={onToggleLnb} aria-label="LNB 토글" />
            <div className="gnb__inner">
                <span className="gnb__title">JO&amp;SOFT</span>
            </div>
        </header>
    );
}
