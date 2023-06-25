import React, { useState, useEffect } from "react";
import { db } from "../firebase";

const FetchTopScores = () => {
    const [loading, setLoading] = useState(true);
    const [scores, setScores] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTopScores = async () => {
            try {
                const scoresSnapshot = await db.collection("scores")
                    .orderBy("score", "desc")
                    .orderBy("timestamp", "asc")
                    .limit(10)
                    .get();
                setScores(scoresSnapshot.docs.map(doc => doc.data()));
            } catch (err) {
                setError("Failed to fetch scores");
            } finally {
                setLoading(false);
            }
        };
        fetchTopScores();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
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