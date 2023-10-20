import logo from '../assets/logo.jpg';

function Footer() {
    return (
        <footer>
            <div className="company">
                <img src={logo} alt="undefined" /><br />
                <div className='brand'>Radioactive, Inc</div>
                <div className='sub'>Code. Test. Deploy.</div>
                <div className='slogan'>Nuclear Tech, Atomic Innovation</div>
            </div>
            <div className="socials">
                <ul>
                    <li>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                        </a>
                    </li>
                    <li>
                        <a href="https://gitlab.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" />
                        </a>
                    </li>
                    <li>
                        <a href="https://npmjs.org" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
                        </a>
                    </li>
                    <li>
                        <a href="https://debian.org" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg" />
                        </a>
                    </li>
                </ul>
            </div>
            <hr />
            <h4>&copy; {new Date().getFullYear()} Copyright by (Authors). All Rights Reserved.</h4>
            <h4>Crafted & Created with ❤️ by Author.</h4>
        </footer>
    );
}

export default Footer;
