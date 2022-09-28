import React from 'react';
import image from '../../images/amin-sord-img.jpg';
import './Card.css';

const Card = () => {
    return (
        <div className='Card'>
            <section>
                <div className='user-div'>
                    <img src={image} alt="" />
                    <div>
                        <h2>Al Amin</h2>
                        <p>
                            Saudi Arabia Abha
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Card;