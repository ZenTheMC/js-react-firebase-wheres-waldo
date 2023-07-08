import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";

const FetchTopScores = () => {
    const [loading, setLoading] = useState(true);
    const [scores, setScores] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTopScores = async () => {
            try {
                const scoresCollection = collection(db, "scores");
                const q = query(scoresCollection, orderBy("score", "desc"), orderBy("time", "asc"), limit(10));
                const scoresSnapshot = await getDocs(q);
                setScores(scoresSnapshot.docs.map(doc => doc.data()));
            } catch (err) {
                setError("Failed to fetch scores");
                console.error(err);
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
                        {score.username}: {score.score}, Time: {score.time}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FetchTopScores;
