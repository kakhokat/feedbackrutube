import React from 'react';
import IMAGES from '../assets/assets.tsx';

const Header: React.FC = () => {
    return (
        <>
            <div className="header">
                <img src={IMAGES.Rutube} alt="RUTUBE" />
            </div>
            <div className="divider"></div>
        </>
    );
};

export default Header;
