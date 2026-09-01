import React from 'react'
import logoImg from '../../assets/ChatGPT Image Aug 18, 2026, 10_57_16 PM.png';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <div className='w-45'>
            <Link to='/' className=''><img src={logoImg} alt="" /></Link>
        </div>
    )
}

export default Logo