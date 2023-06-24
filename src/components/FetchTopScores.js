import React, { useState, useEffect } from "react";
import { db } from "../firebase";

const FetchTopScores = () => {
    const [loading, setLoading] = useState(true);
    const [scores, setScores] = useState([]);

    useEffect(() => {
        const fetchTopScores = async () => {
            const scoresSnapshot = await db.collection("scores")
                .orderBy("score", "desc")
                // .orderBy("timestamp", "asc")
                .limit(10)
                .get();
            setScores(scoresSnapshot.docs.map(doc => doc.data()));
            setLoading(false);
        };
        fetchTopScores();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Leaderboard</h2>
            <ul>
                {scores.map((score, index) => (
                    <li key={index}>
                        {score.username}: {score.score}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FetchTopScores;