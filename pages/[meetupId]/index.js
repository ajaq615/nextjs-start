import MeetupDetails from '../../components/meetups/MeetupDetails';

const MeetupDetailsPage = (props) => {
  return (
    <>
      <h1>Meetup Details Page</h1>
      <MeetupDetails
        image={props.image}
        title={props.title}
        address={props.address}
        description={props.description}
      />
    </>
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      id: meetupId,
      title: 'A First Meetup',
      image: 'https://media.timeout.com/images/105387012/750/422/image.jpg',
      address: '35 National Highway, Quezon, San Isidro, Isabela',
      description: 'This a first meetup',
    },
  };
};

export default MeetupDetailsPage;
