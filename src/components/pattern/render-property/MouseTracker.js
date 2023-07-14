import { useState } from 'react';
import './Mouse-Tracker.css';
// import { render } from '@testing-library/react';

export function Cat({mouse})
{
    return(
        <div>
            <img src={'https://i.pinimg.com/originals/6f/df/bc/6fdfbc41d6a8e26d4b9073bc1afd899f.jpg'}
                 style={{position : 'absolute',left : mouse.x,top : mouse.y,width : '20px'}}/>
        </div>
    );
}

export default function MouseTracker({render})
{
    const [position,setPosition] = useState({
        x : 0,
        y : 0
    });

    const handleMouseMove = (event) => {
        setPosition({
            x : event.clientX,
            y : event.clientY
        });
    }
    return(
        <div className="mouse-tracker"
             onMouseMove={handleMouseMove}>
            Mouse Tracker
            {/* <p>the current mouse position is ({position.x},{position.y})</p> */}
            {/* <Cat mouse={position}/>      //break open close principle*/}
            {
                render(position)
            }
        </div>
    );
}