import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddPrescription from './AddPrescription';
import UpdateProfile from './UpdateProfile';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import InsertReport from './InsertReport';
import ShowAllReport from './ShowAllReport';
import ShowSpecificReport from './ShowSpecificReport';
import InsertDoctor from './InsertDoctor';
import DoctorAdvice from '../Videocalling/DoctorAdvice';
import FriendSection from './FriendSection';
import PeopleYouMayKnowSection from './PeopleYouMayKnowSection';
const drawerWidth = 240;

function DashBoard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleClick=(text,index)=>{
 if(index===0){
     document.getElementById("updateProfile").style.display="block";
     document.getElementById("addPrescription").style.display="none";
     document.getElementById("insertReport").style.display="none";
     document.getElementById("showAllReport").style.display="none";
     document.getElementById("showSpecificReport").style.display="none";
     document.getElementById("addDoctor").style.display="none";
    document.getElementById("doctorAdvice").style.display="none";
    document.getElementById("friendSection").style.display="none";
    document.getElementById("peopleYouMayKnowSection").style.display="none";
 }
 else if(index===1){
    document.getElementById("updateProfile").style.display="none";
    document.getElementById("insertReport").style.display="none";
    document.getElementById("addDoctor").style.display="none";
    document.getElementById("addPrescription").style.display="block";
    document.getElementById("showAllReport").style.display="none";
    document.getElementById("showSpecificReport").style.display="none";
    document.getElementById("doctorAdvice").style.display="none";
    document.getElementById("friendSection").style.display="none";
    document.getElementById("peopleYouMayKnowSection").style.display="none";
 }
 else if(index===2){
    document.getElementById("updateProfile").style.display="none";
    document.getElementById("addPrescription").style.display="none";
    document.getElementById("addDoctor").style.display="block";
    document.getElementById("insertReport").style.display="none";
    document.getElementById("showAllReport").style.display="none";
    document.getElementById("showSpecificReport").style.display="none";
    document.getElementById("doctorAdvice").style.display="none";
    document.getElementById("friendSection").style.display="none";
    document.getElementById("peopleYouMayKnowSection").style.display="none";
 }
 else if(index===3){
  document.getElementById("updateProfile").style.display="none";
  document.getElementById("addPrescription").style.display="none";
  document.getElementById("insertReport").style.display="block";
  document.getElementById("showAllReport").style.display="none";
  document.getElementById("showSpecificReport").style.display="none";
  document.getElementById("addDoctor").style.display="none";
  document.getElementById("doctorAdvice").style.display="none";
  document.getElementById("friendSection").style.display="none";
  document.getElementById("peopleYouMayKnowSection").style.display="none";
 }
 else if(index===4){
  document.getElementById("updateProfile").style.display="none";
  document.getElementById("addPrescription").style.display="none";
  document.getElementById("insertReport").style.display="none";
  document.getElementById("showAllReport").style.display="none";
  document.getElementById("showSpecificReport").style.display="block";
  document.getElementById("addDoctor").style.display="none";
  document.getElementById("doctorAdvice").style.display="none";
  document.getElementById("friendSection").style.display="none";
  document.getElementById("peopleYouMayKnowSection").style.display="none";
 }
 else if(index===5){
  document.getElementById("updateProfile").style.display="none";
  document.getElementById("addPrescription").style.display="none";
  document.getElementById("insertReport").style.display="none";
  document.getElementById("showAllReport").style.display="block";
  document.getElementById("showSpecificReport").style.display="none";
  document.getElementById("addDoctor").style.display="none";
  document.getElementById("doctorAdvice").style.display="none";
  document.getElementById("friendSection").style.display="none";
  document.getElementById("peopleYouMayKnowSection").style.display="none";
 }
 else if(index===6){
  document.getElementById("doctorAdvice").style.display="block";
  document.getElementById("updateProfile").style.display="none";
  document.getElementById("addPrescription").style.display="none";
  document.getElementById("insertReport").style.display="none";
  document.getElementById("showAllReport").style.display="none";
  document.getElementById("showSpecificReport").style.display="none";
  document.getElementById("addDoctor").style.display="none";
  document.getElementById("friendSection").style.display="none";
  document.getElementById("peopleYouMayKnowSection").style.display="none";
  
 }
 else if(index==7){
  document.getElementById("updateProfile").style.display="none";
  document.getElementById("addPrescription").style.display="none";
  document.getElementById("insertReport").style.display="none";
  document.getElementById("showAllReport").style.display="none";
  document.getElementById("showSpecificReport").style.display="none";
  document.getElementById("addDoctor").style.display="none";
  document.getElementById("doctorAdvice").style.display="none";
  document.getElementById("friendSection").style.display="block";
  document.getElementById("peopleYouMayKnowSection").style.display="none";
 }
 else if(index==8){
  document.getElementById("updateProfile").style.display="none";
  document.getElementById("addPrescription").style.display="none";
  document.getElementById("insertReport").style.display="none";
  document.getElementById("showAllReport").style.display="none";
  document.getElementById("showSpecificReport").style.display="none";
  document.getElementById("addDoctor").style.display="none";
  document.getElementById("doctorAdvice").style.display="none";
  document.getElementById("friendSection").style.display="none";
  document.getElementById("peopleYouMayKnowSection").style.display="block";
  
 }
 else{
  document.getElementById("updateProfile").style.display="none";
  document.getElementById("addPrescription").style.display="none";
  document.getElementById("insertReport").style.display="none";
  document.getElementById("showAllReport").style.display="none";
  document.getElementById("showSpecificReport").style.display="none";
  document.getElementById("addDoctor").style.display="none";
  document.getElementById("doctorAdvice").style.display="none";
  document.getElementById("friendSection").style.display="none";
  document.getElementById("peopleYouMayKnowSection").style.display="none";
 }
}
  const drawer = (
    <div>
    
    <Link style={{textDecoration:'none',marginTop:'10px'}} to="/"><h3 style={{color:'#172fa6',marginTop:'15px'}}>MediExpress</h3></Link>
      <Toolbar />
      <Divider />
      <List>
        {['Update Profile', 'Upload Prescription','Add Doctor','Update Report by Value', 'Show Specific Report','Show All Report','Doctor Advice','friendSection','peopleYouMayKnow'].map((text, index) => (
          <ListItem button key={text} onClick={()=>handleClick(text,index)}>
            <ListItemIcon>
              {index % 2 === 0 ? <AccountCircleIcon /> : <AddBoxIcon/>}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <div id="updateProfile" style={{"display":"block"}}>
        <UpdateProfile></UpdateProfile>
        </div>
        <div id="addPrescription" style={{"display":"none"}}>
            <AddPrescription></AddPrescription>
        </div>
        <div id="addDoctor" style={{"display":"none"}}>
        <InsertDoctor></InsertDoctor>
        </div>
        <div id="insertReport" style={{"display":"none"}}>
        <InsertReport></InsertReport>
        </div>
        <div id="showAllReport" style={{"display":"none"}}>
        <ShowAllReport></ShowAllReport>
        </div>
        <div id="showSpecificReport" style={{"display":"none"}}>
        <ShowSpecificReport></ShowSpecificReport>
        </div>
        <div id="doctorAdvice" style={{"display":"none"}}>
       <DoctorAdvice></DoctorAdvice> 
        </div>
        <div id="friendSection" style={{"display":"none"}}>
        <FriendSection></FriendSection>
        </div>
        <div className="div" id="peopleYouMayKnowSection" style={{"display":"none"}}>
        <PeopleYouMayKnowSection></PeopleYouMayKnowSection>
        </div>
      </Box>
    </Box>
  );
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;