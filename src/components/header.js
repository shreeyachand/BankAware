import Link from 'next/link';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <h1 className="logo">Home Page</h1>
            <div className="links">
                <Link href="/">Home Page</Link>
                <Link href="/subscription">Subscriptions</Link>
                <Link href="/dictionary">Dictionary</Link>
            </div>
        </div>
    );
}

export default Header;
