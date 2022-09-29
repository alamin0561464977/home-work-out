import React, { useEffect, useState } from 'react';
import ExerciseCard from '../Exercise-card/ExerciseCard';
import './Exercise.css';

const Exercise = ({ addToCard }) => {
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
                        addToCard={addToCard}
                    ></ExerciseCard>)
                }
            </div>
            <div className="row mt-5 row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
                <div className='col'>
                    <div className="sm-w-100 card text-bg-secondary mb-3">
                        <div className="card-body">
                            <h4 className="card-title">how does react js works?</h4>
                            <hr />
                            <p className="card-text">React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="card text-bg-secondary mb-3">
                        <div className="card-body">
                            <h4 className="card-title">React props state difference?</h4>
                            <hr />
                            <p className="card-text">The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component.</p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="card text-bg-secondary mb-3" >
                        <div className="card-body">
                            <h4 className="card-title">React useEffect</h4>
                            <hr />
                            <p className="card-text">The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exercise;