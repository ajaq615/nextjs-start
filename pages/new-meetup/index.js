import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetUpPage = () => {
  const router = useRouter();

  const addMeetUpHandler = async (meetupData) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log(data);

    router.push('/');
  };
  return (
    <>
      <h1>New Meet up Page</h1>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </>
  );
};

export default NewMeetUpPage;