import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import TargetingBox from "./TargetingBox";

const PhotoDisplay = () => {
    const [clickPosition, setClickPosition] = useState(null);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        db.collection("characters").get().then((QuerySnapshot) => {
            const data = QuerySnapshot.docs.map((doc) => doc.data());
            setCharacters(data);
        });
    }, []);

    const handleClick = (event) => {
        const x = event.clientX;
        const y = event.clientY;
        setClickPosition({ x, y });
    };

    return (
        <div onClick={handleClick}>
            <img src="path-to-your-photo.jpg" alt="Where's Waldo?" />
            {clickPosition && <TargetingBox position={clickPosition} characters={characters} />}
        </div>
    );
}

export default PhotoDisplay;