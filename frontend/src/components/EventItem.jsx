import styles from './EventItem.module.scss';
import {Link, useLoaderData, useNavigate} from "react-router-dom";

const EventItem = ({ event }) => {
    const {
        title,
        desc: description,
        'img-url': image,

        'start-date': date,
    } = event;

    const detailEvent = useLoaderData();

    // console.log(detailEvent.id);
    const navigate = useNavigate();


    // delete 요청
     const deleteEvent = async () => {
         console.log('삭제요청')
         const response = await fetch(`http://localhost:9000/api/events/${detailEvent.id}`, {
             method: 'DELETE'
         })
         if(response.ok) {
             alert('삭제되었습니다.');
             console.log(response.json())
             // 이벤트 페이지로 돌아가기
             navigate('/events');
         }
     }



    return (
        <article className={styles.event}>
            <img
                src={image}
                alt={title}
            />
            <h1>{title}</h1>
            <time>{date}</time>
            <p>{description}</p>
            <menu className={styles.actions}>
                {/* 상대경로로 edit만 적어주면 /edit이 붙음 */}
                <Link to='edit'>Edit</Link>
                <button onClick={deleteEvent}>Delete</button>
            </menu>
        </article>
    );
};

export default EventItem;
