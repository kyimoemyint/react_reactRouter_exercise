import React from "react";
export default function List({list})
{
  console.log('typeof list', typeof list);
 return list.map((item) => <Item key={item.objectID} item={item}/>);
                                                // title={item.title}
                                                // url={item.url}
                                                // author={item.author}
                                                // num_comments={item.num_comments}
                                                // points={item.points}/>);
}

const Item = ({item}) => {
  return(
    <>
        <ul>
        <li>
            <a href={item.url}>{item.title}</a>
        </li>
        <li>{item.author}</li>
        <li>{item.num_comments}</li>
        <li>{item.points}</li>
        </ul>
    </>
  )
}