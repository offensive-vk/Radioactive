import logo from '../assets/logo.jpg';

function Footer() {
    return (
        <footer>
            <div className="company">
                <img src={logo} alt="undefined" /><br />
                <div className='text brand'>Radioactive, Inc</div><br />
                <div className='text sub'>Code. Test. Deploy.</div><br />
                <div className='text slogan'>Nuclear Tech, Atomic Innovation</div><br />
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
                <hr />
                <div className='text copyright'>&copy; {new Date().getFullYear()} Copyright by (Authors). All Rights Reserved.</div>
                <div className='text last'>Crafted & Created with ❤️ by Author.</div>
            </div>
            {/* <div className='others'></div> */}
        </footer>
    );
}

export default Footer;
