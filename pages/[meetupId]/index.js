import MeetupItem from '../../components/meetups/MeetupItem';
import { useRouter } from 'next/router';
const MeetupDetailsPage = () => {
  const router = useRouter();
  const id = router.query.meetupId;
  console.log(id)
  return (
    <>
      <h1>Meetup Details Page</h1>
      <MeetupItem meetupId={id} />
    </>
  );
};

export default MeetupDetailsPage;
