import Link from 'next/link';

const Navbar = () => (
    <div className="Navbar">
        <div className="header">
            <Link href="/">
                <img src="https://via.placeholder.com/100" alt="" />
            </Link>
            <input type="text" placeholder="Search" />
        </div>
        <div className="nav">
            <ul>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/investors">
                        <a>Investors</a>
                    </Link>
                </li>
                <li>
                    <Link href="/operators">
                        <a>Operators</a>
                    </Link>
                </li>
                <li>
                    <Link href="/careers">
                        <a>Careers</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        </div>

        <style jsx>{`
            .nav {
                width: 100%;
                background: #0071bd;
            }

            .header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                max-width: 800px;
                margin: 0 auto;
            }

            ul {
                max-width: 800px;
                width: 100%;
                margin: 0 auto;
                color: #fff;
                list-style: none;
                display: flex;
                justify-content: flex-end;
            }

            ul li {
                margin-left: 12px;
            }

            ul li a {
                color: #fff;
                text-decoration: none;
            }
        `}</style>
    </div>
);

export default Navbar;
