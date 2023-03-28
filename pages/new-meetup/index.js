import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetUpPage = () => {
    const addMeetUpHandler = (meetupData) => {
        console.log(meetupData)
    }
  return (
    <>
      <h1>New Meet up Page</h1>
      <NewMeetupForm onAddMeetup={addMeetUpHandler}/>
    </>
  );
};

export default NewMeetUpPage;