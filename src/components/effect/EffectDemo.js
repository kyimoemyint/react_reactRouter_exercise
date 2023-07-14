import { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying }){
    const ref = useRef(null);
  
    // useEffect(() => {
    //     function handleScroll(e) {
    //       console.log(window.scrollX, window.scrollY);
    //     }
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    //   }, []);
      
    useEffect(() => {
        console.log('use Effect render');
        if (isPlaying) {
            ref.current.play();  // Calling these while rendering isn't allowed.
          } else {
            ref.current.pause(); // Also, this crashes.
          }
        return () => console.log('cleaning up');        //clean up the use effect
    },[isPlaying]);
    
    console.log('video render');
    console.log('ref.current ', ref.current);
    return <video ref={ref} src={src} loop playsInline />;
}

export default function EffectDemo()
{
    const [isPlaying, setIsPlaying] = useState(false);
    // console.log('effect demo render');
    const [text, setText] = useState('');

    return(
        <div>
            <input value={text} onChange={e => setText(e.target.value)} />
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <VideoPlayer
                isPlaying={isPlaying}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />
        </div>
    );
}