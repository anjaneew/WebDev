//Using Props 
//           - sending read only data from parent to child
//      Props  + PropTypes + DefaultProps
 

import Student from './Student/Student.jsx'

function App() {
  return(
    <>
    <Student fullname="SpongeBob SquarePants" photo="https://nickelodeonuniverse.com/wp-content/uploads/Spongebob.png" name="SpongeBob" age={30} isStudent={true} address="124 Conch Street" link="https://spongebob.fandom.com/wiki/SpongeBob_SquarePants_(character)"/>
    
    <Student fullname="Patrick Star" photo="https://nickelodeonuniverse.com/wp-content/uploads/Patrick.png" name="Patrick" age={42} isStudent={false} address="120 Conch Street" link="https://spongebob.fandom.com/wiki/Patrick_Star"/>

    <Student fullname="Sandy Cheeks" photo="https://nickelodeonuniverse.com/wp-content/uploads/Sandy.png" name="Sandy" age={27} isStudent={true} address="126 Conch Street" link="https://spongebob.fandom.com/wiki/Sandy_Cheeks"/>
    
    
    <Student/>

    </>
  );
}

export default App
