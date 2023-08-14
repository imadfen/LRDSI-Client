import React, { useState } from 'react'
import PubCommPanel from './PubCommPanel';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function PubCommSection({pubList, commList}) {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    
    return (
        <>
        <Tabs selectedIndex={selectedTabIndex} onSelect={index => setSelectedTabIndex(index)} className="pub-comm-section">
            <TabList className="pubevent-tab-list react-tabs__tab-list">
                <Tab><strong>Publications</strong></Tab>
                <Tab><strong>Communications</strong></Tab>
            </TabList>

            <TabPanel>
                <PubCommPanel panel="pub" List={pubList}/>
            </TabPanel>

            <TabPanel>
                <PubCommPanel panel="comm" List={commList}/>
            </TabPanel>
        </Tabs>
        </>
    )
}

export default PubCommSection