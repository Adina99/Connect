import './PostCard.css';
import { useRef, useState } from 'react';
import LikeButton from './LikeButton';
import { faArrowAltCircleDown, faComment, faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { posts } from '../data/Posts';

export default function PostCard(props) {
    const commentInputRef = useRef(null);
    const [showComments, setShowComments] = useState(false);
    const [user, setUser] = useState('');
    const [comment, setComment] = useState('');
    const [post, setPost] = useState({ comments: [] });

    const toggleComments = () => {
        setShowComments(!showComments);
    };

    function addComment() {
        setPost((prev) => ({
            ...prev,
            comments: [...prev.comments, { user: 'You', comment }],
        }));
        setComment('');
        commentInputRef.current.value = '';
    }

    return (
        <div className="post-card">
            <div className="user">
                <img src={props.image} className="user-image" />
                <h3 className="user-name">{props.user}</h3>
            </div>
            <p className="post-description">{props.description}</p>
            <img src={props.photo} className="post-photo" />
            <div className="post-buttons">
                <LikeButton />
                <div className="show-comments">
                    <p className="number-of-comments">. </p>
                    <button onClick={toggleComments} className={showComments ? 'active' : ''}>
                        <FontAwesomeIcon icon={faComment} /> Comment
                    </button>
                </div>
            </div>
            <div className="post-comments">
                {showComments && (
                    <div>
                        <form className="comment-form">
                            <input
                                ref={commentInputRef}
                                type="text"
                                placeholder="Write a comment"
                                onChange={(event) => {
                                    setComment(event.target.value);
                                }}
                            ></input>
                            <button disabled={!comment} onClick={addComment}>
                                <FontAwesomeIcon icon={faArrowAltCircleDown} size="lg" />
                            </button>
                        </form>
                        {post.comments.map((comment, index) => (
                            <div key={index}>
                                <div className="comment-section">
                                    <div className="comment-profile">
                                        <img
                                            className="comment-picture"
                                            src="https://i.pinimg.com/564x/e2/72/52/e272528102be868e5be2e1e17e686f36.jpg"
                                        />
                                        <p className="comment-user">{comment.user}</p>
                                    </div>
                                    <hr />
                                    <p className="comment">{comment.comment}</p>
                                </div>
                            </div>
                        ))}

                        <div className="comment-section">
                            <div className="comment-profile">
                                <img className="comment-picture" src={props.commentPicture} />
                                <p className="comment-user">{props.commentUser}</p>
                            </div>
                            <hr />
                            <p className="comment">{props.commentOfUser}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
