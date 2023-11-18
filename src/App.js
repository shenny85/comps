import Button from './Button';
import {GoBell, GoCloud, GoDatabase} from "react-icons/go";

//Button is a custom component and not the button tag
function App() {
   

    return <div>
        <div>
            <Button secondary rounded outline className="mb-5" ><GoBell />Click Me!!</Button>
        </div>
        <div>
            <Button danger outline className="mb-5"><GoCloud/>Buy Now!</Button>
        </div>
        <div>
            <Button warning className="mb-5"><GoDatabase/>Hide Ads!</Button>
        </div>
        <div>
            <Button secondary outline className="mb-5">Something!</Button>
        </div>
        <div>
            <Button primary rounded className="mb-5">Music!</Button>
        </div>
    </div>;
}

export default App;