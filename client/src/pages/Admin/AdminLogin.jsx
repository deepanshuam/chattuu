import { useInputValidation } from "6pp";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// import { bgGradient } from "../../constants/color";
// import { adminLogin, getAdmin } from "../../redux/thunks/admin";

const AdminLogin = () => {
    // const { isAdmin } = useSelector((state) => state.auth);
       const isAdmin = true;
      
    const secretKey = useInputValidation("");

    const sumbitHandler=(e)=>{
        e.preventDefault();
    }

    if (isAdmin) return <Navigate to="/admin/dashboard" />;

  return (
    <div style={{
        backgroundImage:
        "linear-gradient(rgba(132,136,139),rgba(215,218,223))"
      }}>
      <Container component={"main"} maxWidth='xs'
       sx={{
        height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"
       }}
      >
        <Paper 
          elevation={3}
          sx={{
            padding:4, display:"flex", flexDirection:"column", alignItems:"center"
          }}
        >
           
            
            <Typography varient="h5">
              Admin Login
            </Typography>
            <form 
            style={{
              width:"100%",
              marginTop:"1rem"
            }} 
            onSubmit={sumbitHandler}>

  
              <TextField required fullWidth 
              label="Secret Key" type='password' margin='normal' variant='outlined'
              value={secretKey.value} onChange={secretKey.changeHandler}
              />
  
              <Button 
              sx={{
                marginTop:"1rem"
              }} fullWidth
              variant="contained" color="primary" type="sumbit"> 
              Login 
              </Button>
  
            </form>
            

        </Paper>
        
      </Container>
      </div>
  )
}

export default AdminLogin