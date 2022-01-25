import { useState, useEffect } from "react";
import Axios from "axios"
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from "@mui/material/TextField"
import Snackbar from "@mui/material/Snackbar";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {useRef} from "react"
import Super from "../components/Super";
import Online from "../components/Online"

const Officers = () => {
const facilityRef = useRef(null);
const regionRef = useRef(null);
const districtRef = useRef(null);
const typeRef = useRef(null);
const [modaldisplay, setmodaldisplay] = useState('none')
const [requestfeedbackdisplay, setrequestfeedbackdisplay] = useState('none')
const [token , settoken] = useState(null)
const [AllOfficers, setAllOfficers] = useState(null);
const [anchorEl, setAnchorEl] = React.useState(null);
const [snackbar, setsnackbar] = useState(false);
const [message, setmessage] = useState("");
const dropdown = Boolean(anchorEl);

const endPoint = "https://e-referral-api.herokuapp.com"

const handledropopen = (event) => {
  setAnchorEl(event.currentTarget);
};
const handledropclose = () => {
  setAnchorEl(null);
};
const Handleviewform = ()=>{
 setmodaldisplay('block')
 setrequestfeedbackdisplay('none')
}
const Closeviewmodal = ()=>{
setmodaldisplay('none')
}

const Handlefeedback = ()=>{
 setrequestfeedbackdisplay('block')
 setmodaldisplay('none')
}
const closerequestfeedback = ()=>{
    setrequestfeedbackdisplay('none')
}

const [filter, setfilter] = useState("")
const [search, setsearch] = useState("")

useEffect(async() => {
    const parsedtoken = JSON.parse(sessionStorage.getItem("token"));
    settoken(parsedtoken)
    await Axios.get( endPoint + "/staff/showall",
    {
        headers: {
           authorization: `Bearer ${token}`,
         
        }
     }   
    ).then((data)=>setAllOfficers(data.data.staff))
    .catch(error=>console.log(error))

        // if(JSON.parse(sessionStorage.getItem("token")) != null){
        //     const parsedtoken = JSON.parse(sessionStorage.getItem("token"));
        //     alert(JSON.parse(localStorage.getItem("data").role))   
        // }
    })


    //delete
    const [Deletemodal, setDeletemodal] = React.useState(false);
    const [DeleteOfficer, setDeleteOfficer] = useState("");;
    const HandleDelete = (Officer)=>{
        setDeletemodal(true)
        setDeleteOfficer(Officer)

    }

    const Delete = async()=>{
        if(DeleteOfficer.role === "Super"){
            setmessage("Account can not be deleted.")
            setsnackbar(true)
            setDeletemodal(false)
        }else{
      await  Axios.delete(`${endPoint}/staff/delete/${DeleteOfficer._id}` , 
      {
        headers: {
           authorization: `Bearer ${token}`,
         
        }
     }  
        ).then(()=>{s
            setmessage( DeleteOfficer.email + " " + "deleted successfully")
            setDeletemodal(false)
            setsnackbar(true)

        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    }
}
    //editfacility
    const [EditModal, setEditModal] = useState(false);
    const [EditId, setEditId] = useState("");
    const [currentfacility, setcurrentfacility] = useState("");
    const [defaultValue, setdefaultValue] = useState(false);
    const HandleEdit = async(id)=>{
        setEditModal(true)
        setEditId(id)
        await Axios.get( endPoint + "/facility/find/:" + id,
        {
            headers: {
               authorization: `Bearer ${token}`,
             
            }
         }   
        ).then((data)=>{
            setcurrentfacility(data.data.facility)
            setdefaultValue(true)
        })
    }

    const UpdateFacility = async()=>{
        const reffacility = facilityRef.current;
        const updatefacility = reffacility["facility"].value

        const refdistrict = districtRef.current;
        const updatedistrict = refdistrict["district"].value

        const refregion = regionRef.current;
        const updateregion = refregion["region"].value
        
        const reftype = typeRef.current;
        const updatetype = reftype["type"].value

        await Axios .patch(endPoint + "/facility/update/:" + EditId , {name:updatefacility , region:updateregion , district:updatedistrict, type_of_facility:updatetype},
        {
            headers: {
               authorization: `Bearer ${token}`,
             
            }
         }  
        ).then(()=>{
            setmessage("updated successfully")
            setsnackbar(true)
        })
    }

    const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={()=>setsnackbar(false)}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
    )
    return ( 
        <section className="padding-top-100">
          <Online />
            <Snackbar
                open={snackbar}
                autoHideDuration={6000}
                onClose={()=>setsnackbar(false)}
                message={message}
                action={action}
                />
      <Dialog
        open={Deletemodal}
        // onClose={handledropclose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete Officer"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
              <div className="">
                 Are you sure you want to delete {DeleteOfficer.email}
              </div>
            Deleting an officer will wipe out all the database related to that officer.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setDeletemodal(false)}>Cancel</Button>
          <Button onClick={Delete} autoFocus variant="outlined" color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={EditModal}
        // onClose={handledropclose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Update Facility"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
              {
                  defaultValue === true && 
                  <div className="width-400-max">
            <div className="section">
                <form ref={facilityRef}>
                <TextField 
                  variant="outlined"
                  defaultValue={currentfacility.name}
                  label="Facility"
                  fullWidth
                  name="facility"
                  />
                </form>
              </div>
                  <div className="section">
                      <form ref={regionRef}>
                      <TextField 
                  variant="outlined"
                  select
                  defaultValue={currentfacility.region}
                  label="Region"
                  fullWidth
                  SelectProps={{
                    native: true,
                }}
                name="region"
                  >
                    <option value="Upper West Region">WA UPPER WEST REGION</option>
                    <option value="Upper East Region">UPPER EAST REGION</option>
                    <option value="Northen Region">NORTHEN REGION</option>
                    </TextField>
                      </form>
              </div>
                  <div className="section">
                      <form ref={districtRef}>
                      <TextField 
                  variant="outlined"
                  select
                  defaultValue={currentfacility.district}
                  label="District"
                  fullWidth
                  SelectProps={{
                    native: true,
                }}
                name="district"
                  >
                  <option value="Wa Municipal">Wa Municipal</option>
                    <option value="Jirapa">Jirapa</option>
                    <option value="Labussie Karni">Lambussie Karni</option>
                    <option value="Sissla East">Sissala East</option>
                    <option value="Sissla West">Sissala West</option>
                    <option value="Wa East">Wa East</option>
                    <option value="Wa West">Wa West</option>
                </TextField>
                      </form>
      
              </div>
                  <div className="section">
                      <form ref={typeRef}>
                      <TextField
                  fullWidth
                select
                label="facility type"
                defaultValue={currentfacility.district.type_of_facility}
                SelectProps={{
                    native: true,
                }}
                variant="outlined"
                name="type"
                >
                        <option value="Regional Office">Regional Office</option>
                <option value="District Office">District Office</option>
                <option value="Hospital">Hospital</option>
                <option value="Health Center">Health Center</option>
                <option value="CHPS">CHPS</option>
                <option value="Ply Clinic">Poly Clinic</option>
        </TextField>  
                      </form>
              </div>
                  </div>
              }
  
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setEditModal(false)}  variant="outlined" color="error">Cancel</Button>
          <Button onClick={UpdateFacility} autoFocus variant="contained" color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    <section className="padding-20">

      <Super />
    <div className="h2">All Officers</div>

<div className="section">
    <input type="text" className="input bordered padding" placeholder="search patient" onChange={(e)=>setsearch(e.target.value)}/>
</div>
  <div className="horizontal-scroll">

<table className="table stripped text-small">
    <thead className="indigo">
        <th>Full Name</th>
        <th>Email</th>
        <th>Region</th>
        <th>District</th>
        <th>Facility</th>
        <th>Role</th>
        <th className="text-center">Actions</th>
     
    </thead>
    {  AllOfficers != null &&
        AllOfficers.filter(data=>{
         if(search === ""){
             return AllOfficers;
         }else if(
         data.firstName.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
         data.middleName.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
         data.lastName.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
         data.region.trim().toLowerCase().includes(search.trim().toLowerCase())||
         data.district.trim().toLowerCase().includes(search.trim().toLowerCase())||
         data.email.trim().toLowerCase().includes(search.trim().toLowerCase())||
         data.role.trim().toLowerCase().includes(search.trim().toLowerCase())

         ){
             return data;
         }
        }).map(staff =>(
            <tr key={staff._id}>
                <td>
                    {staff.firstName}  {staff.middleName}  {staff.lastName}
                </td>
                <td>{staff.email}</td>
                <td>{staff.region}</td>
                <td>{staff.district}</td>
                <td>{staff.facility}</td>
                <td>{staff.role}</td>
                <td className="text-center">

                    <button className="button">
                    <MoreHorizIcon
        id="basic-button"
        aria-controls={dropdown ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={dropdown ? 'true' : undefined}
        onClick={handledropopen}
       />
                    </button>
   
      <Menu
       id="basic-menu"
       anchorEl={anchorEl}
       open={dropdown}
       onClose={handledropclose}
       MenuListProps={{
         'aria-labelledby': 'basic-button',
       }}
      >
        {/* <MenuItem onClick={}>Edit</MenuItem> */}
        <MenuItem onClick={()=>HandleEdit(staff._id)}>Edit</MenuItem>
        <MenuItem onClick={()=>HandleDelete(staff)}>Delete</MenuItem>
      </Menu>
                </td>
            </tr>
        ))
    }
</table>

  </div>

    </section> 
        </section>
     );
}
 
export default Officers;