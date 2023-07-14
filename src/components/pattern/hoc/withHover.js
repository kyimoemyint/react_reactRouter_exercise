import { useEffect, useState } from "react"

export default function withHover(Element)
{
    return (props) => {
        const [hover,setHover] = useState(false);
        // useEffect(() => {
           
        // },[]);
        return <Element {...props}
                        hover={hover}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}/>
    }
}