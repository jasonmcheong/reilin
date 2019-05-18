import Link from 'next/link';

const Footer = () => (
    <footer>
        <div className="contain">
            <div className="footer-nav">
                <Link href="/">
                    <img src="https://via.placeholder.com/100" alt="" />
                </Link>
                <ul>
                    About Us
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                </ul>
                <ul>
                    Shortcut Links
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                </ul>
                <ul>
                    Address
                    <li>
                        lorem lorem lorem loreml orem lorem lorem lorem lorem
                        lore mlor eml orem
                    </li>
                    <li>loremipsum loremipsum</li>
                </ul>
            </div>
            <div className="copyright">Copyright 2019 Reilin</div>
        </div>

        <style jsx>{`
            footer {
                background: #111;
                color: #fff;
            }

            .contain {
                max-width: 1100px;
                margin: 0 auto;
            }

            .footer-nav {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 0.8fr;
            }

            .copyright {
                border-top: 1.5px solid #e5e5e5;
                text-align: center;
                padding: 12px 0;
            }
        `}</style>
    </footer>
);

export default Footer;
