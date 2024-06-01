import { Box, Typography } from '@mui/material';
import React, { memo } from 'react'
import { lightBlue } from "../constant/color"
import moment from 'moment';
import { fileFormat } from "../../Lib/Features"
import RenderAttachement from './RenderAttachement';

const MessageComponent = ({message,user}) => {
    const {sender,content, attachements=[], createdAt}= message;

    const sameSender = sender?._id === user?._id;

    const timeAgo = moment(createdAt).fromNow();

  return (
    <div
    style={{
    alignSelf:sameSender?"flex-end":"flex-start",
    backgroundColor:"white",
    color:"black",
    borderRadius:"5px",
    padding:"0.5rem",
    width:"fit-content"
    }}>

     { !sameSender && <Typography color={lightBlue} fontWeight={"600"}>{sender.name}</Typography> }
    
     { content&&<Typography >{content}</Typography> }

     {/* Attachement */}
     {attachements.length>0 && attachements.map((attachement,index)=>{
        const url = attachement.url
        const file = fileFormat(url);

        return <Box key={index}>
            <a href={url} target='_blank' download 
            style={{color:'black'}}
            >
                {RenderAttachement(file,url)}
            </a>

        </Box>
     })}

     <Typography variant='caption' color={"text.secondary"}> {timeAgo}</Typography>
        </div>
  )
}

export default memo(MessageComponent);