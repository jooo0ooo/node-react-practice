import React from 'react'
import { Link } from 'react-router-dom';
import { MdHome, MdAdd, MdCached, MdMenu } from 'react-icons/md'
import './Footer.css';

function Footer() {
    return (
        <nav className="footer">
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
