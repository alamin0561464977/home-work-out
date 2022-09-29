import React, { useState } from 'react';
import image from '../../images/amin-sord-img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import './Card.css';

const Card = ({ totalSeconds }) => {
    localStorage.setItem('totalSeconds', totalSeconds);
    const tSeconds = localStorage.getItem('totalSeconds');
    const [times, setTimes] = useState(localStorage.getItem('breakTime'));
    const breakTime = time => {
        setTimes(time);
    };
    localStorage.setItem('breakTime', times);

    const activityCompleted = () => {
        localStorage.removeItem('totalSeconds');
        toast("Wow so easy!");
    }
    return (
        <div className='Card'>
            <section>
                <div className='user-div'>
                    <div className='user'>
                        <img src={image} alt="" />
                        <div>
                            <h2>Al Amin</h2>
                            <p>
                                <FontAwesomeIcon className='icon' icon={faLocationDot} />
                                Saudi Arabia Abha
                            </p>
                        </div>
                    </div>
                    <div className="user-info">
                        <div>
                            <h3>50</h3>
                            <p>Weight</p>
                        </div>
                        <div>
                            <h3>5.5</h3>
                            <p>Height</p>
                        </div>
                        <div>
                            <h3>21</h3>
                            <p>Age</p>
                        </div>
                    </div>
                </div>
                <div className="add-a-break">
                    <h3>Add A Break</h3>
                    <div className='button'>
                        <button onClick={() => breakTime(10)}>10s</button>
                        <button onClick={() => breakTime(20)}>20s</button>
                        <button onClick={() => breakTime(30)}>30s</button>
                        <button onClick={() => breakTime(40)}>40s</button>
                        <button onClick={() => breakTime(50)}>50s</button>
                    </div>
                </div>
                <div className="Exercise-Details">
                    <h3>Exercise Details</h3>
                    <h5>Exercise time: {tSeconds}s</h5>
                    <h5>Break time: {localStorage.getItem('breakTime')}s</h5>
                </div>
                <div className="d-grid gap-2">
                    <button onClick={activityCompleted} className="Button " type="button">Activity Completed</button>
                </div>
            </section>
        </div>
    );
};

export default Card;