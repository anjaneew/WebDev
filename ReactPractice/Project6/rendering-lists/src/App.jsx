//rendering lists

import ReusableList from './ReusableList.jsx'

function App() {

   const fruits = [
        {id: 1, name: "apple", emoji: '🍎🍏', calories: 95}, 
        {id: 2, name: "orange", emoji: '🍊', calories: 45},
        {id: 3, name: "banana", emoji:'🍌', calories: 105}, 
        {id: 4, name: "pineapple", emoji: '🍍', calories: 159}, 
        {id: 5, name: "mango", emoji: '🥭', calories: 37}, 
        {id: 6, name: "grapes", emoji:'🍇', calories: 118}];

    const vegitables = [
        {id: 1, name: "cabbage", emoji: '🥬', calories: 95}, 
        {id: 2, name: "carrot", emoji: '🥕', calories: 45},
        {id: 3, name: "beet", emoji:'🫑', calories: 105}, 
        {id: 4, name: "onions", emoji: '🧅', calories: 159}, 
        {id: 5, name: "pumpkin", emoji: '🎃', calories: 37}, ];    


  return(
        <>
        {fruits.length > 0 ? <ReusableList items={fruits} category="~Fruits~"/> : null}
        
        {/* {vegitables.length > 0? <ReusableList items={vegitables} category="Vegitables"/> : null} */}

        {/* shortcircuiting terinary operator is && */}
        { vegitables.length > 0 && <ReusableList items={vegitables} category="~Vegitables~"/>}
        </>
  );
}


export default App
