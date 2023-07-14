import './GrayBorder.css'
export default function GrayBorder({children})
{
    console.log('props', children)
    return(
        <div className="gray-border">
            {children[1]} 
        </div>
    );
}