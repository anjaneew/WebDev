import RunsEveryReRender from './RunsEveryReRender.jsx';
import RunsOnMount from './RunsOnMount.jsx';
import MountDependencyChange from './MountDependencyChange.jsx';
import CleanUp from './CleanUp.jsx';

/* NOTES: useEffect Hook

React Hook that tells React DO SOME CODE WHEN(following:)
    * This component re-renders
    * This component mounts
    * The state of value

useEffact(function, [dependedncies]): 

    1. useEffect(() => {}) //Runs after every re-render
    2. useEffect(() => {}, []) //Runs only on mount
    3. useEffect(() => {}, [value])//Runs on mount + when value changes
 
USES: 
    1. Event Listeners
    2. DOM manipulation
    3. Subscriptions (real-time updates)
    4. Fetching Date from an API
    5. Clean up when a component unmounts
    
*/

function App() {

    return(
    
    <>
    <CleanUp />
    <RunsEveryReRender />
    <RunsOnMount />
    <MountDependencyChange />
    </>

    );
}

export default App
