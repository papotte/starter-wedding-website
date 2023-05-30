'use client';
import styles from '@/app/event/page.module.scss';
import { useFormattedDates } from '@hooks/useFormattedDates';
import { CalendarIcon, ClockIcon } from '@radix-ui/react-icons';
import { eventData } from '@utils/eventData';

const EventDetails = () => {
    const { ceremony, party } = eventData.events;

    const events = [
        {
            name: 'Ceremony',
            ...useFormattedDates(ceremony.start, ceremony.end),
            description:
                'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
        },
        {
            name: 'Wedding Party',
            ...useFormattedDates(party.start, party.end),
            description:
                'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
        },
    ];

    return (
        <div className="pt-16 row w-3/4 lg:w-2/3 gap-8">
            {events.map((event, index) => (
                <div key={index} className={styles.eventBox}>
                    <h3>{event.name}</h3>
                    <div className={styles.details}>
                        <div className={styles.time}>
                            <ClockIcon />
                            <span>{event.startTime}</span>
                            <span>{event.endTime}</span>
                        </div>
                        <div className={styles.date}>
                            <CalendarIcon />
                            <span>{event.startDayMonth}</span>
                            <span>{event.startMonthYear}</span>
                        </div>
                    </div>

                    <div className={styles.description}>{event.description}</div>
                </div>
            ))}
        </div>
    );
};

export default EventDetails;