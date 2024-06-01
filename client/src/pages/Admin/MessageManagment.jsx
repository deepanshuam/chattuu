import React, { useEffect, useState } from 'react'
import AdminLayout from "../../components/Layout/AdminLayout"
import AvatarCard from '../../components/Shared/AvatarCard';
import { Avatar, Table ,Stack} from '@mui/material';
import { transformImage } from '../../Lib/Features';
import RenderAttachment from '../../components/RenderAttachment';
import moment from 'moment';
const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 200,
    headerClassName: "table-header",
  },
  {
    field: "attachments",
    headerName: "attachments",
    headerClassName: "table-header",
    width: 200,
    renderCell: (Params) => {
      const {  attachments } = Params.row;
      return attachments?.lenght>0?attachments.map((i)=>{
        const url=i.url;
        const file=fileFormat(url);
        return <Box>
          <a href={url}
          download target='_blank'style={{
            color:'black'
          }}>
            {RenderAttachment(file,url)}
          </a>
        </Box>

        return<Avatar alt={i.name} src={i.url}/>
      }):"no attachments"
      
    } 
  },
  {
    field: "content",
    headerName: "content",
    headerClassName: "table-header",
    width: 150,
  },
  {
    field: "sender",
    headerName: "sent-by",
    headerClassName: "table-header",
    width: 150,
    renderCell:(params)=>{
      <Stack direction={"row" } spacing={"1rem"} alignItems={"center"}>
        <AvatarCard alt={params.row.sender.name} src ={params.row.avatar} />
       <span>{params.row.sender.name}</span>
      </Stack>

    }

    
  },
  {
    field: "chat",
    headerName: "chat",
    headerClassName: "table-header",
    width: 150,
  },
  {
    field: "groupschat",
    headerName: "groupschat",
    headerClassName: "table-header",
    width: 150,
  },{
    field: "createdAt",
    headerName: "time",
    headerClassName: "table-header",
    width: 150,
  }
];
const MesageManagement = () => {
  const [rows,setRows] =useState([]);
  useEffect(()=>{
    setRows( dashboardData.messages.map(i=>({...i,id:i._id,sender:{
      name:i.sender.name,
      avatar:transformImage(i.sender.avatar,50),
    
    },
    createdAt:moment(i.createdAt).format("MMM Do YYYY,h:mm:ss a")
  })) );
  })

  return (
    <AdminLayout>
        <Table heading={"all messages"} columns={columns} rows={rows} rowHeight={200}/>
    </AdminLayout>
  )
}

export default MesageManagement