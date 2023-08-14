import React, { useState } from 'react'
import ThesMemoPanel from './ThesMemoPanel';
import PubCommPanel from './PubCommPanel';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function ThesMemoSection({ThesList, memoList}) {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    
    return (
        <>
        <Tabs selectedIndex={selectedTabIndex} onSelect={index => setSelectedTabIndex(index)} className="thes-memo-section">
            <TabList className="thesmemo-tab-list react-tabs__tab-list">
                <Tab><strong>Thèses</strong></Tab>
                <Tab><strong>Mémoires</strong></Tab>
            </TabList>

            <TabPanel>
                <ThesMemoPanel panel="thes" List={ThesList} />
            </TabPanel>

            <TabPanel>
                <ThesMemoPanel panel="memo" List={memoList} />
            </TabPanel>
        </Tabs>
        </>
    )
}

export default ThesMemoSection