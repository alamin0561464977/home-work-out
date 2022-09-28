import React, { useEffect, useState } from 'react';
import ExerciseCard from '../Exercise-card/ExerciseCard';
import './Exercise.css';

const Exercise = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        fetch('exercise.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])
    return (
        <div>
            <div className='title'>
                <div>
                    <h1>Home Work Ut</h1>
                    <h4>Select today’s exercise</h4>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 g-4">
                {
                    exercises.map(exercise => <ExerciseCard
                        key={exercise.id}
                        exercise={exercise}
                    ></ExerciseCard>)
                }
            </div>
        </div>
    );
};

export default Exercise;