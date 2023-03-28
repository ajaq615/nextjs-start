import MeetupDetails from '../../components/meetups/MeetupDetails';

const imageLink =
  'https://media.timeout.com/images/105387012/750/422/image.jpg';
const data = {
  id: 'm1',
  title: 'A First Meetup',
  image: imageLink,
  address: '35 National Highway, Quezon, San Isidro, Isabela',
  description: 'This a first meetup',
};

const MeetupDetailsPage = () => {
  return (
    <>
      <h1>Meetup Details Page</h1>
      <MeetupDetails
        image={data.image}
        title={data.title}
        address={data.address}
        description={data.description}
      />
    </>
  );
};

export default MeetupDetailsPage;
