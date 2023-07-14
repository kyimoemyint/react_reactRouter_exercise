import { useState } from 'react';
import './tab.css';

function TabHeader({header,index,changeTab,active})
{   let className = 'tab-header';
    active && (className += ' active');
    return <h5 className={className}
               onClick={() => changeTab(index)}>
                {header}
           </h5> 
}

export default function Tab({headers,children})
{
    const [activeTab,setActiveTab] = useState(0);
    const changeTab = (tabIndex) => {
        console.log('change Tab happen');
        setActiveTab(tabIndex);
    }
    return(
        <div>
            <div className={'tab-container'}>
                {headers.map((header,index) => <TabHeader
                                                key={index}
                                                header={header}
                                                index={index}
                                                active={activeTab==index}
                                                changeTab={changeTab}
                                                />)}
            </div>
            <div className={'tab-body'}>
                    {children[activeTab]}
            </div>
        </div>
    )
}