// eventsData.js
import eventImage1 from '../assets/profile.png';
import eventImage2 from '../assets/profile.png';
import eventImage3 from '../assets/profile.png';
import eventImage4 from '../assets/profile.png';

const EventsData = [
  {
    name: 'Event 1',
    description: 'Description for Event 1',
    type: 'current',
    date: '10/12/2024',
    time: '6:00 pm - 11:00 pm',
    venue: 'Yoga Hall, NSC',
    image: eventImage1,
    pocs: [
      { name: 'Vikas', contact: '9594939359' },
      { name: 'Khushi', contact: '9594939359' },
    ],
  },
  {
    name: 'Event 2',
    description: 'Description for Event 2',
    type: 'upcoming',
    date: '11/12/2024',
    time: '5:00 pm - 9:00 pm',
    venue: 'Main Auditorium',
    image: eventImage2,
    pocs: [
      { name: 'Rahul', contact: '9876543210' },
      { name: 'Simran', contact: '9876543211' },
    ],
  },
  {
    name: 'Event 3',
    description: 'Description for Event 3',
    type: 'upcoming',
    date: '12/12/2024',
    time: '7:00 pm - 10:00 pm',
    venue: 'Conference Room',
    image: eventImage3,
    pocs: [
      { name: 'Amit', contact: '9123456789' },
      { name: 'Priya', contact: '9123456788' },
    ],
  },
  {
    name: 'Event 4',
    description: 'Description for Event 4',
    type: 'past',
    date: '13/12/2024',
    time: '4:00 pm - 8:00 pm',
    venue: 'Community Center',
    image: eventImage4,
    pocs: [
      { name: 'Neha', contact: '9988776655' },
      { name: 'Arjun', contact: '9988776656' },
    ],
  },
];

export default EventsData;
