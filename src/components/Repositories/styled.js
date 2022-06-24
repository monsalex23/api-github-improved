import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
font-size: 18px;
width: 50%;
`;

export const WrapperTabLists = styled(TabList)`
list-style-type: none;
padding: 5px;
display: flex;
margin: 0;
`;


export const WrapperTab = styled(Tab)`
border-radius: 18px;
border: 1.5px solid #AEDBCE;
padding: 10px;
user-select: none;
cursor: pointer;


&:focus {
    outline:none;
    box-shadow: 0 0 1em #18978F;
}

&.is-selected {
    border-bottom: 1px solid #18978F;
    border-top-left-radius: 16px;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius:20px ;
}
`;

export const WrapperTabPanel = styled(TabPanel)`
padding: 8px;
border: 1px solid #18978F;
box-shadow: 0 0 0.01em #18978F;
display: none;
margin-top: -2px;
&.is-selected {
    display: block;
}
`;

