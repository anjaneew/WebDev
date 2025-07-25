//Inline - CSS - the worse type
// 
//Changes
//       1. kebab-case to camelCase
//       2. all values are strings
//       3. commas instead of ;
//       4. no psudo classes so not that advance 
//       5. <button style={styles}>Inline</button>

function Button3(){

    const styles = {
            backgroundColor:"rgba(212, 41, 112, 1)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: 'none',
            margin: "20px",
            cursor: "pointer",
            boxShadow: "3px 3px 5px black",
    }

    return(
        <button style={styles}>Inline</button>
    );
}

export default Button3