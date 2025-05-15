import Link from 'next/link';
import './header.css';
// import "../app/globals.css";

const Header = () => {
    return (
        <div className="header">
            <Link href="/">
            <img className="nav-icon"src="/favicon.jpeg" alt="Logo"></img>
            </Link>
            <h1 className="logo">BankAware</h1>
            <div className="links">
                <Link href="/">Home Page</Link>
                <Link href="/subscription">Subscriptions</Link>
                <Link href="/dictionary">Dictionary</Link>
            </div>
        </div>
    );
}

export default Header;
