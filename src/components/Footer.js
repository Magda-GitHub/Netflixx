
import React from 'react'
import "../components/Footer.scss";
function Footer() {
  return <footer className="footer">
    <div className="container">
        <ul className="footer_links">
            <li className="footer_links">
                <a href="/">Audio description</a>
            </li>
            <li className="footer_links">
                <a href="/">Work</a>
            </li>
            <li className="footer_links">
                <a href="/">Cookie settings</a>
            </li>
            <li className="footer_links">
                <a href="/">Gift cards</a>
            </li>
            <li className="footer_links">
                <a href="/">Terms of use</a>
            </li>
            <li className="footer_links">
                <a href="/">Informations about company</a>
            </li>
            <li className="footer_links">
                <a href="/">Media center</a>
            </li>
            <li className="footer_links">
                <a href="/">Privacy</a>
            </li>
            <li className="footer_links">
                <a href="/">Contact Us</a>
            </li>
            <li className="footer_links">
                <a href="/">Investro relations</a>
            </li>
        </ul>
        <div className="footer_date">Netflixx 2022 </div>
    </div>
  </footer>
}

export default Footer;
