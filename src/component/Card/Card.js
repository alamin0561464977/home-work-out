import React from 'react';
import image from '../../images/amin-sord-img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './Card.css';

const Card = () => {
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
                        <button>10s</button>
                        <button>20s</button>
                        <button>30s</button>
                        <button>40s</button>
                        <button>50s</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Card;