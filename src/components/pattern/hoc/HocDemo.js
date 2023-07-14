import withHover from "./withHover";
import withLoader from "./withLoader";

function DogImages(props) {
    console.log(props);
    return(
        <div {...props} /* react original event (onMouseEnter..etc) need to pass down if u don't use it in component*/>
             {props.hover == true ? <h2>Hovering</h2> : null}
             <div>
                {
                    props.data.message.map((dog, index) => (
                        <img src={dog} alt="Dog" key={index} />
                    ))
                }
            </div>
        </div>
        
    );
}

export default function HocDemo()
{
    let DogImagesWithLoader = withHover(withLoader(
        DogImages,
        "https://dog.ceo/api/breed/labrador/images/random/6"
    ));
    // console.log(typeof DogImagesWithLoader);
    return <DogImagesWithLoader/>
}