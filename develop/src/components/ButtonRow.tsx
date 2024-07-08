import React from 'react';

type ButtonRowProps = {
    start: number;
    end: number;
    activeButton: number | null;
    onButtonClick: (value: number) => void;
};

const ButtonRow: React.FC<ButtonRowProps> = ({ start, end, activeButton, onButtonClick }) => {
    return (
        <div className="button-row">
            {Array.from({ length: end - start + 1 }, (_, i) => start + i).map(num => (
                <button
                    key={num}
                    className={`button ${activeButton === num ? 'active' : ''}`}
                    onClick={() => onButtonClick(num)}
                >
                    {num}
                </button>
            ))}
        </div>
    );
};

export default ButtonRow;
