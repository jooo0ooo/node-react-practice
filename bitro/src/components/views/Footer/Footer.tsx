import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { MdHome, MdAdd, MdCached, MdMenu } from 'react-icons/md'
import './Footer.css';

function Footer() {
    const location = useLocation();
    const [FooterCss, setFooterCss] = useState<React.CSSProperties>({
        opacity: '1',
        visibility: 'visible',
        transition: 'opacity 500ms linear, visibility 0s linear'
    });

    useEffect(() => {
        if (location.pathname === '/add') {
            setFooterCss({
                opacity: '0',
                visibility: 'hidden',
                transition: 'opacity 500ms linear, visibility 0s linear 500ms'        
            });
        } else {
            setFooterCss({
                opacity: '1',
                visibility: 'visible',
                transition: 'opacity 500ms linear, visibility 0s linear'
            });
        }
    }, [location]);

    return (
        <nav className="footer" style={FooterCss}>
            <Link className="menu" to="/">
                <MdHome /><br/>
                홈
            </Link>
            <Link className="menu" to="/add">
                <MdAdd /><br />
                글쓰기
            </Link>
            <Link className="menu" to="/mine">
                <MdCached /><br />
                나의 거래
            </Link>
            <Link className="menu" to="/setting">
                <MdMenu /><br />
                설정
            </Link>
        </nav>
    )
}

export default Footer
