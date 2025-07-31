
function List(){
    // const fruits = ["apple", "orange", "banana", "pinapple", "mango", "grapes"];

    const fruits = [
        {id: 1, name: "apple", emoji: '🍎🍏', calories: 95}, 
        {id: 2, name: "orange", emoji: '🍊', calories: 45},
        {id: 3, name: "banana", emoji:'🍌', calories: 105}, 
        {id: 4, name: "pineapple", emoji: '🍍', calories: 159}, 
        {id: 5, name: "mango", emoji: '🥭', calories: 37}, 
        {id: 6, name: "grapes", emoji:'🍇', calories: 118}];

    //sorting    

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); //alphabetical order
    // fruits.sort((a, b) => b.name.localeCompare(a.name));//reverse-alphabetical order
    fruits.sort((a,b) => a.calories - b.calories); // Numeric order
    fruits.sort((a,b) => b.calories - a.calories); //Reverse Numeric

    // fruits.sort();
    // const listItems = fruits.map( fruit => <li>{fruit}</li>);

    //filter
    // const lowCalorie = fruits.filter(fruit => fruit.calories < 100);
    const highCalorie = fruits.filter(fruit => fruit.calories > 100);


    // //                                       react likes a unique key
    const listItems = fruits.map( fruit => <li key={fruit.id}>
                                            {fruit.name}:&nbsp;
                                            <b>{fruit.calories}</b>&nbsp;
                                            {fruit.emoji}</li>);

    const calList = highCalorie.map( fruit => <li key={fruit.id}>{fruit.name}:&nbsp;
                                            <b>{fruit.calories}</b>&nbsp;
                                            {fruit.emoji}</li>);   

    


    return(
        <ul>
            <h1>Fruits</h1>
            {listItems}
            <h1>Calorie Fruits:</h1>
            {calList}
        </ul>
    );
}

export default List