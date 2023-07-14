import { useLayoutEffect, useRef } from "react";

const list = [
    'apple','orange','banana'
]
export default function LayoutEffectDemo()
{
    const ref = useRef(null);
    useLayoutEffect(() => {
        const {height} = ref.current.getBoundingClientRect();
        console.log('height is ', height);
    },[])
    return(
        <div ref={ref}>
            Layout Effect Demo
            {
                list.map((item,index) => {
                    return <div key={index}>{item}</div>
                })
            }
        </div>
    );
}