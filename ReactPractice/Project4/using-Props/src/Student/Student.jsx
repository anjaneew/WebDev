import PropTypes from 'prop-types'
import Styles from './Student.module.css'


function Student(props){

    return(
        <div className={Styles.card}>
          <a href={props.link}><img src={props.photo}></img></a>
          <h2>{props.fullname}</h2>
          <p>This is {props.name}. {props.name} is {props.age} years old. He/She is {props.isStudent ? "a" : "not a"} student. He/she lives in the underwater city of Bikini Bottom at {props.address}.</p>
        </div>
    );
}

//Proptypes are not used in React 19. so you will have to install manually: 
//npm install prop-types

Student.propTypes = {
    name: PropTypes.string,
    fullname: PropTypes.string,
    link: PropTypes.string,
    photo: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
    address: PropTypes.string,
}


//not supported in react 18+ so dont worry
Student.defaultProps = {
    name: "Guest",
    fullname: "New Student",
    link: "https://spongebob.fandom.com/wiki/SpongeBob_SquarePants_(series)",
    photo: "https://picsum.photos/200",
    age: 18,
    isStudent: true,
    address: "Pacific Ocean beneath Bikini Atoll",
}

export default Student