import Link from 'next/link';

const toggleMenu = e => {
    e.target.classList.toggle('open');
    document.querySelector('.nav').classList.toggle('open');
};

const Navbar = () => (
    <div className="Navbar">
        <div className="header">
            <Link href="/">
                <img src="https://via.placeholder.com/100" alt="" />
            </Link>
            <div className="menu" onClick={toggleMenu}>
                <div className="bar bar-1" />
                <div className="bar bar-2" />
                <div className="bar bar-3" />

                <div className="cross cross-1" />
                <div className="cross cross-2" />
            </div>
        </div>

        <div className="nav">
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
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
                    <Link href="/operations">
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
            .Navbar {
                padding-bottom: 130px;
                position: relative;
            }
            .header {
                width: 100%;
                z-index: 10;
                position: fixed;
                background: #fff;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px;            
            }
            .menu {
                z-index: 1;
                cursor: pointer;
                width: 60px;
                height: 60px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                position: relative;
            }
            .bar {
                pointer-events: none;
                width: 75%;
                height: 4px;                
                background: #0071bd;
                position: absolute;
            }
            .bar-1 {
                transition: width 1s ease-in-out;
                transition-delay: 0.9s;
                top: 17px;
                right: 8px; 
            }
            .bar-2 {
                transition: width 0.6s ease-in-out;
                transition-delay: 0.9s;
                top: 27px;
                right: 8px; 
            }
            .bar-3 {
                transition: width 0.8s ease-in-out;
                transition-delay: 0.9s;
                top: 37px;
                right: 8px;  
            }
            .cross {
                pointer-events: none;
                opacity: 0;
                width: 100%;
                height 4px;
                background: #0071bd;
                position: absolute;
            }
            .cross-1 {
                transition: opacity 0.8s ease-out;
                transform: rotate(45deg);
                top: 27px;
                left: 0;
            }
            .cross-2 {
                transition: opacity 0.8s ease-out;
                transform: rotate(-45deg);
                top: 27px;
                right: 0;
            }

            .nav {
                transition: max-height 0.9s ease-out, height 0.9s ease-out, opacity 0.9s ease-out;
                opacity: 0;
                position: fixed; 
                top: 0;
                left: 0;
                z-index: -10;   
                width: 100%;
                height: 0;
                max-height: 0; 
                margin-top: 120px;           
                background: #fff;
            }

            .nav.open {
                transition: max-height 0.9s ease-out, height 0.9s ease-out, opacity 0.9s ease-out;
                opacity: 1;
                position: fixed;
                top: 0;
                left: 0;
                z-index: 3;  
                width: 100%;
                height: 100%;
                max-height: 850px;
                margin-top: 120px;
                background: #fff;
            }

            .nav ul {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 1rem 0;
            }
            .nav ul li {
                margin: 15px 0;
            }

            .menu.open > .bar {
                width: 0px;
            }
            .menu.open > .bar-1 {
                transition: width 1s ease-in-out;
            }
            .menu.open > .bar-2 {
                transition: width 0.6s ease-in-out;
            }
            .menu.open > .bar-3 {
                transition: width 0.8s ease-in-out;
            }
            .menu.open > .cross {
                opacity: 1;
            }
            .menu.open > .cross-1 {
                transition: opacity 0.8s ease-out;
                transition-delay: 0.9s;
            }
            .menu.open > .cross-2 {
                transition: opacity 0.8s ease-out;
                transition-delay: 0.9s;
            }

        `}</style>
    </div>
);

export default Navbar;
