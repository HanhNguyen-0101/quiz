import React from 'react';
import imgLogo from './../assets/quiz-logo.png';

function Header() {
    return (
        <header>
            <img src={imgLogo} alt='Quiz Logo' />
            <h1>ReactQuiz</h1>
        </header>
    );
}

export default Header;