import React from 'react';

type ButtonColProps = {
    options: string[];
    activeButton: number;
    onButtonClick: (value: number) => void;
};

const ButtonCol: React.FC<ButtonColProps> = ({ options, activeButton, onButtonClick }) => {
    return (
        <div className="button-col">
            {
                options.map((option, index) => (
                    <button
                        key={index+1}
                        className={`button ${activeButton === index+1 ? 'active' : ''}`}
                        onClick={() => onButtonClick(index+1)}
                        >
                        {option}
                    </button>
                ))
            }
        </div>
    );
};

export default ButtonCol;