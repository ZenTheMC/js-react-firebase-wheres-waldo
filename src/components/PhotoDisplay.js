import React, { useEffect, useState } from "react";
import { db } from '../firebase';

function PhotoDisplay() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        db.collection("characters").get().then((QuerySnapshot) => {
            const data = QuerySnapshot.docs.map((doc) => doc.data());
            setCharacters(data);
        });
    }, []);

    return (
        <div>
            {characters.map((character, index) => (
                <img key={index} src={character.image} alt={character.name} />
            ))}
        </div>
    );
}

export default PhotoDisplay;