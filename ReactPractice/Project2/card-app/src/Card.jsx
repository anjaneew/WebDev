import dogPic from './assets/bawwa.jpg'

function Card(){
    return(<div className="card">
        {/* <img src="https://picsum.photos/200" alt="picture"></img> */}
        <img src={dogPic} alt="dog picture"></img>
        <h2>Bawwa</h2>
        <p>A domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, non-retractable claws, and a barking, howling, or whining voice.</p>
    </div>);
}

export default Card