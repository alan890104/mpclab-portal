import React from "react";
import { FaGithub } from "react-icons/fa"

const Footer = () => {
    const year = new Date().getFullYear();
    let styles = {
        marginRight: '20px',
    }
    return <footer className="footer">
        <span style={styles}>{`Copyright © MPCLab ${year}`}</span>
        <a href="https://github.com/alan890104/mpclab-portal" target="_blank"><FaGithub size={20} /></a>
    </footer >;
};

export default Footer;