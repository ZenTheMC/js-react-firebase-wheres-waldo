import React from "react";

const Character = ({ onClick }) => {
    return (
        <div data-testid="character" onClick={onClick}>
            Character
        </div>
    );
};

export default Character;