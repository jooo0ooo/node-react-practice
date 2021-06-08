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

        let els = document.getElementsByClassName('menu');
        Array.prototype.forEach.call(els, function(el) {
            if(el.classList.contains('active')) {
                el.classList.remove('active');
            }
        });

        if (location.pathname === '/') {
            document.getElementById('home')?.classList.add('active');
        } else if (location.pathname === '/add') {
            document.getElementById('add')?.classList.add('active');
        } else if (location.pathname === '/mine') {
            document.getElementById('mine')?.classList.add('active');
        } else if (location.pathname === '/setting') {
            document.getElementById('setting')?.classList.add('active');
        }
    }, [location]);

    return (
        <nav className="footer" style={FooterCss}>
            <Link id="home" className="menu" to="/">
                <MdHome /><br/>
                홈
            </Link>
            <Link id="add" className="menu" to="/add">
                <MdAdd /><br />
                글쓰기
            </Link>
            <Link id="mine" className="menu" to="/mine">
                <MdCached /><br />
                나의 거래
            </Link>
            <Link id="setting" className="menu" to="/setting">
                <MdMenu /><br />
                설정
            </Link>
        </nav>
    )
}

export default Footer
