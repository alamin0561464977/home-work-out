import React from 'react';
import './Exercise-card.css';

const ExerciseCard = ({ exercise }) => {
    console.log(exercise);
    const { name, image, text, time } = exercise;
    return (
        <div className="col">
            <div className="card">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h5>Time: {time}s</h5>
                    <p className="card-text">{text.slice(0, 125)}...</p>
                    <div class="d-grid gap-2">
                        <button class="Button " type="button">Button</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExerciseCard;