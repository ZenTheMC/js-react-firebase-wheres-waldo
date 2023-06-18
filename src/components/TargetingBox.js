import React from "react";
import CharacterSelection from "./CharacterSelection.js";

const TargetingBox = ({ position }) => {
    return (
        <div style={{ top: position.y, left: position.x }}>
            <CharacterSelection />
        </div>
    );
}

export default TargetingBox;