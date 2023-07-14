import { useState } from 'react';
import './tab2.css';
function TabHeader({header,changeTab,index,active})
{
    let className = 'li';
    active && (className += ' active');
    return(
        <>
            <li className={className}
                onClick={() => {changeTab(index)}}>{header.toUpperCase()}</li>
        </>
    );
}

export default function Tab2({children})
{
    const headers = ['one','two','three'];
    const [activeTab,setActiveTab] = useState(0);
    const changeTab = (tabIndex) => {
        setActiveTab(tabIndex);
    }

    return(
        <div className={'tab2-main'}>
            <div className={'tab2-container'}>
                <ul className={'ul'}>
                    {headers.map((header,index) => <TabHeader header={header}
                                                              key={index}
                                                              index={index}
                                                              active={activeTab == index}
                                                              changeTab={changeTab}/>)}
                </ul>
            </div>
            <div className={'tab2-body'}>
                {children[activeTab]}
            </div>
        </div>
    );
}