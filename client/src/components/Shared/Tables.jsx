
import React from 'react'
import {DataGrid} from '@mui/x-data-grid'
import {Paper, Typography,Container}from "@mui/material"
import { matBlack } from '../constant/color'

const Tables = ({rows, columns,heading,rowheight=52}) => {
  return (
    <Container sx={{height:"100vh"}}>
      <Paper elevation={3}sx={{padding:"1rem 4rem",borderRadius:"1rem",margin:"auto",width:"100%",overflow:"hidden",height:"100%",boxShadow:"none"}}>
      <Typography textAlign={"center"}
      variant='h4' sx={{margin:"2rem", textTransform:"uppercase"}}>
      {heading}
      <DataGrid rows={rows} columns={columns} rowheight={rowheight}
      style={{
        height:"80%"
      }} sx={{
        border:"none",".table-header":{bgcolor:"matBlack",color:"white"}
      }}/>
      </Typography>
      </Paper>
    </Container>
  )
}

export default Tables
