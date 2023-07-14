import React from "react";
import './pagecomponent.css';

export function Profile(props)
{
    return(
        <div>
            <img
                src={props.image}
                className="avatar"
                alt="Katherine Johnson"
            />
        </div>
    )
}

export function Header({profile})
{
    return(
        <div>
            
            <Profile image={profile.image}/>
        </div>
    )
}

export function Body()
{
    return(
        <div>
            <h1>Body</h1>
        </div>
    )
}

export function Footer()
{
    return(
        <div>
            <h1>Footer</h1>
        </div>
    )
}

export default function PageComponent()
{
    let profile = {
        name : 'Katherine Johnson',
        image : "https://i.imgur.com/MK3eW3Am.jpg"
    }
    return(
        <div>
            <Header profile={profile}/>
            <Body/>
            <Footer/>
        </div>
    );
}