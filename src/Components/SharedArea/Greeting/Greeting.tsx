import { memo } from 'react';
import "./Greeting.css";

interface GreetingProps {
    hour: number;
}

function Greeting(props: GreetingProps): JSX.Element {
    console.log('Greeting');

    function getGreeting(): string {
        if (props.hour >= 6 && props.hour <= 10) return 'Good Morning!';
        if (props.hour >= 11 && props.hour <= 15) return 'Good Afternoon!';
        if (props.hour >= 16 && props.hour <= 20) return 'Good Evening!';

        return 'Good Night!';
    }

    return (
        <div className="Greeting">
            <span>{getGreeting()}</span>
        </div>
    );
}

export default memo(Greeting);  //Higher Order Component (HOC)

//Default Implementation:
// export default memo(Greeting, (prevProps, nextProps) => {
//     return prevProps.hour === nextProps.hour;   //Can change this default
// });  //Higher Order Component (HOC)
