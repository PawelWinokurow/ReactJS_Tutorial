import Card from '../ui/Card';
import styles from './NewMeetupForm.module.css';
import { useRef } from 'react';

export default function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const titleImageRef = useRef();
    const titleAddressRef = useRef();
    const titleDescriptionRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage= titleImageRef.current.value;
        const enteredAddress = titleAddressRef.current.value;
        const enteredDescription = titleDescriptionRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        };
        props.onAddMeetup(meetupData);
    
    }

    return (
        <Card>
            <form className={styles.form} onSubmit={submitHandler}>
                <div className={styles.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' required id='title' ref={titleInputRef} />
                </div>
                <div className={styles.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' required id='image' ref={titleImageRef} />
                </div>
                <div className={styles.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' required id='address' ref={titleAddressRef} />
                </div>
                <div className={styles.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' required rows='5' ref={titleDescriptionRef}></textarea>
                </div>
                <div className={styles.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}