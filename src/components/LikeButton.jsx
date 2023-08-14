import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

function LikeButton() {
    const min = 15;
    const max = 370;
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    const [likes, setLikes] = useState(number);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        if (isLiked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setIsLiked(!isLiked);
    };

    return (
        <div className="like">
            <p>{likes} likes</p>
            <button onClick={handleLike} className={isLiked ? 'active' : ''}>
                <FontAwesomeIcon icon={faThumbsUp} /> Like
            </button>
        </div>
    );
}

export default LikeButton;
