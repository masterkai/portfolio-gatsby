import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SchoolIcon from '@mui/icons-material/School';
import HistoryIcon from '@mui/icons-material/History';
import {ComputerSkill, InterestsIcon, SuitCase} from '../customIcons'
import Box from '@mui/material/Box';
import styled from 'styled-components';
import useMediaQuery from '@mui/material/useMediaQuery';
import {Resume} from "./Resume";

const PanelBox = styled.div`
  display: flex;
  flex-direction: column;
`

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <PanelBox
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{pl: {xs: 0, md: 3}}}>
          <div>{children}</div>
        </Box>)}
    </PanelBox>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node, index: PropTypes.number.isRequired, value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`, 'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs({data}) {
  const matches = useMediaQuery('(min-width:600px)');

  const {educationData, experienceData, skillData, worksData, interestsData,} = data;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isMatched = (name) => matches ? name : ''

  return (
    <Box
      sx={{display: 'flex', height: '100%', flexGrow: 1, flexDirection: matches ? 'row' : 'column'}}
    >
      <Tabs
        orientation={matches ? "vertical" : "horizontal"}
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={
          {
            borderRight: matches ? 1 : 0,
            borderBottom: matches ? 0 : 1,
            borderColor: 'divider',
            flex: '0 0 20%',
            mb: matches ? 0 : 3,
            mt: matches ? 0 : 3,
          }
        }
      >
        <Tab icon={<SchoolIcon/>} label={isMatched("education")} {...a11yProps(0)} />
        <Tab icon={<HistoryIcon/>} label={isMatched("experience")} {...a11yProps(1)} />
        <Tab icon={<ComputerSkill/>} label={isMatched("skills")} {...a11yProps(2)} />
        <Tab icon={<SuitCase/>} label={isMatched("works")} {...a11yProps(3)} />
        <Tab icon={<InterestsIcon/>} label={isMatched("interests")} {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        {educationData.map((item) => <Resume
          key={item.id}
          title={item.school}
          subtitle={item.major}
          description={item.educationDescription}
          from={item.from}
          to={item.to}
        />)}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {experienceData.map((item) => <Resume
          key={item.id}
          title={item.company}
          subtitle={item.job}
          description={item.experienceDescription}
          chips={item.technologies}
          from={item.from}
          to={item.to}
        />)}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {skillData.map((item) => (<Resume key={item.id} title={item.title} chips={item.skills}/>))}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {worksData.map((item) => (<Resume key={item.id} title={item.name} chips={item.stack} publishedAt={item.publishedAt} description={item.summary}/>))}
      </TabPanel>
      <TabPanel value={value} index={4}>
        {interestsData.map((item) => (<Resume key={item.id} title={item.hobby} description={item.hobbyDescription}/>))}
      </TabPanel>
    </Box>
  );
}
