import { useNavigate } from 'react-router-dom';

export default function NewMeetupPage(){
    const navigate = useNavigate();
    async function onAddMeetupHandler(meetupData){
        await fetch('https://react-meetups-5bb03-default-rtdb.europe-west1.firebasedatabase.app/meetups.json', {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }}
        );
        navigate('/');    

    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
        </section> );
}

import NewMeetupForm from '../components/meetups/NewMeetupForm';
