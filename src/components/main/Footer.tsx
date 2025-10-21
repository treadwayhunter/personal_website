import '../../styles/Footer.css';
import data from '../../utils/versioning.json';

const Footer = () => {
    return (
        <div className="footer">
            <span>Date Last Modified: {data.date}</span>
            <span>Version: {data.version}</span>
        </div>
    );
}

export default Footer;