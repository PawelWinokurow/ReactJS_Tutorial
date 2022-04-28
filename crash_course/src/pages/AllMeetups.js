import MeetupList from '../components/meetups/MeetupList';
import {useState, useEffect} from 'react';


export default function AllMeetupsPage(){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeeputs, setLoadedMeeputs] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://react-meetups-5bb03-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'
        ).then(reponse => {
            return reponse.json();
        }
        ).then(data => {
            const meetups = [];
            for (const key in data){
                const meetup = {
                    id: key, 
                    ...data[key]
                };
                meetups.push(meetup);
            }
            setIsLoading(false);
            setLoadedMeeputs(meetups);
        });
    }, []);



    if (isLoading)
        return (
            <section>
                <p>Loading...</p>
            </section>
        );

    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeeputs} />
        </section>
    );
}

