import ChatStatus from './ChatStatus.jsx'
import UserGreeting from './UserGreeting.jsx'
import HolidayPackage from './HolidayPackage.jsx'

function App() {
  return(
    <>
      <ChatStatus isOnline={true} username="Robin Hood 🏹"/>
      <ChatStatus isOnline={false} username="Brother Tuck ✝️"/>

      <UserGreeting isLoggedIn={true}/>

      <HolidayPackage name="Summar"/>
      <HolidayPackage name="Winter"/>
    </>
  );
}

export default App
