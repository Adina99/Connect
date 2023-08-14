import Button from './Button';
import './Add.css';

export default function Add(props) {
    return (
        <div className="add">
            <h3 className="add-title">{props.title}</h3>
            <img src={props.image} className="add-image" />
            <p className="add-description">{props.description}</p>
            <Button text="See more" />
        </div>
    );
}
