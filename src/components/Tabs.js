import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Sun from "../components/Days/Sun";
import Sat from "../components/Days/Sat";
import Mon from "../components/Days/Mon";
import Tue from "../components/Days/Tues";
import Fri from "../components/Days/Fri";
import Thu from "../components/Days/Thurs";
import Wed from "../components/Days/Wed";



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          centered
        >
          <Tab label="TODAS LAS CLASS" {...a11yProps(0)} />
          <Tab label="CROSSFIT" {...a11yProps(1)} />
          <Tab label="CROSSFIT HERO" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className='columns'>
          <div className='column is-mobile'><Mon /></div>
          <div className='column is-mobile'><Tue /></div>
          <div className='column is-mobile'><Wed /></div>
          <div className='column is-mobile'><Thu /></div>
          
        </div>
        <div className='columns mt-6'>
          
          <div className='column is-mobile'><Fri /></div>
          <div className='column is-mobile is-3'><Sat /></div>
          <div className='column is-mobile is-3'><Sun /></div>
          
        </div>
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className='columns'>
            <div className='column is-mobile'><Mon /></div>
            <div className='column is-mobile'><Tue /></div>
            <div className='column is-mobile'><Wed /></div>
            <div className='column is-mobile'><Thu /></div>
            
          </div>
          <div className='columns mt-6'>
            
            <div className='column is-mobile'><Fri /></div>
            <div className='column is-mobile is-4'><Sun /></div>
            
          </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className='columns mt-6'>
            
            <div className='column is-mobile'></div>
            <div className='column is-mobile is-5'><Sat /></div>
            <div className='column is-mobile'></div>
            
          </div>
      </TabPanel>
    </div>
  );
}
