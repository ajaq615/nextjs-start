import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

const imageLink =
  'https://www.peninsula.com/-/media/images/paris/new/dining/loiseau-blanc/ppr-oiseau-blanc-interior-evening-1074/ppr-oiseaublanc.png';
const imageLink2 =
  'https://media.timeout.com/images/105387012/750/422/image.jpg';
const imageLink3 =
  'https://media.architecturaldigest.com/photos/5852f922dcb583e908275de0/master/w_800%2Cc_limit/paris-restaurants-03.jpg';
const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: imageLink,
    address: '35 National Highway, Quezon, San Isidro, Isabela',
    description: 'This a first meetup',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: imageLink2,
    address: '35 National Highway, Quezon, San Isidro, Isabela',
    description: 'This a second meetup',
  },
  {
    id: 'm3',
    title: 'A Third Meetup',
    image: imageLink3,
    address: '35 National Highway, Quezon, San Isidro, Isabela',
    description: 'This a third meetup',
  },
];

const HomePage = (props) => {
 
  return (
    <>
      <h1>Home Page</h1>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export function getStaticProps() {

    

    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
    }
}

// export const getServerSideProps = (context) => {
//     const req = context.req;
//     const res = context.res;
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export default HomePage;
