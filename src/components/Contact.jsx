import './Contact.css';
export default function Contact(props) {
    return (
        <div className="contact">
            <img src={props.picture} className="contact-picture" />
            <p className="contact-name">{props.user}</p>
        </div>
    );
}
