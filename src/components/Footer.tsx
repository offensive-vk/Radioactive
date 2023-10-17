import logo from '../assets/logo.jpg';

function Footer() {
    return (
        <footer>
            <div className="company">
                <img src={logo} alt="undefined" /><br />
                <div className="brand">Radioactive, Inc</div>
                <h3>Code. Test. Deploy.</h3>
                <h4>&copy; {new Date().getFullYear()} Copyright by (Authors). All Rights Reserved.</h4>
            </div>
            {/* <div className="socials">
                <ul>
                    <li><a href="https://github.com" target="_blank" rel="noopener noreferrer"></a></li>
                    <li><a href="https://gitlab.com" target="_blank" rel="noopener noreferrer"></a></li>
                    <li><a href="https://vercel.com" target="_blank" rel="noopener noreferrer"></a></li>
                    <li><a href="https://radioactive.com" target="_blank" rel="noopener noreferrer"></a></li>
                </ul>
            </div> */}
            <hr />
            <h4>Crafted & Created with ❤️ by Author.</h4>
        </footer>
    );
}

export default Footer;
