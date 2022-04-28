import MeetupItem from './MeetupItem';
import styles from './MeetupList.module.css';


export default function MeetupList(props) {
    return (
        <ul className={styles.list}>
            {props.meetups.map(item => <MeetupItem 
                key={item.id} 
                id={item.id} 
                image={item.image} 
                title={item.title}
                address={item.address}
                description={item.description}
            />)}
        </ul>
    );
}