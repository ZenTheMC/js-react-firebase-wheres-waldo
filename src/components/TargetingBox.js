import React from "react";
import CharacterSelection from "./CharacterSelection";

const TargetingBox = ({ position }) => {
    return (
        <div data-testid="targeting-box" datateststyle={{ top: position.y, left: position.x }}>
            <CharacterSelection />
        </div>
    );
}

export default TargetingBox;