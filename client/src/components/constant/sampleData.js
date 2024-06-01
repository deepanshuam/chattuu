import { avatarClasses } from "@mui/material";


export const sampleChats = [
  {
    avatar: ["https://"],
    name: "john",
    _id: "1",
    groupChat: false,
    memeber: ["1", "2"],
  },
  {
    avatar: ["https://"],
    name: "john bio",
    _id: "2",
    groupChat: false,
    memeber: ["1", "2"],
  },
];
export const sampleUsers = [
  {
    avatar: "https://",
    name: "john",
    _id: "1",
  },
  {
    avatar: "https://",
    name: "john",
    _id: "2",
  },
];
export const sampleNotifications = [
  { sender:{
    avatar: "https://",
    name: "john",
    
  }, _id: "1" },
  { sender:{
    avatar: "https://",
    name: "john",
    
  }, _id: "2" },
];
export const sampleMessage = [
  {
     attachements:[
 
     ],
     content:"Messge from megha",
     _id:"DFHSgdafgdfgfs",
     sender:{
         _id:"user._id",
         name:"Pawan",
     },
     chat:"chatId",
     createdAt:"2024-05-23T09:10:30.630Z",
  },   
  {
     attachements:[
         {
     public_id:"ASDFG2",
     url:"https://www.w3schools.com/howto/img_avatar.png",
         }
     ],
     content:"",
     _id:"DFHSgdafdfggdfgfs2",
     sender:{
         _id:"dsafghg",
         name:"Pawan22",
     },
     chat:"chatId",
     createdAt:"2024-05-23T09:10:30.630Z",
  },   

  
]
export const dashboardData ={
  users:[
    {
      avatar: "https://",
      name: "john",
      _id: "1",
      freinds:20,
      group:5,
    },
    {
      avatar: "https://",
      name: "john",
      _id: "2",
      freinds:20,
      group:5,
    },
  ],
  chats:[
    {
      avatar: ["https://"],
      name: "john",
      _id: "1",
      groupChat: false,
      memeber: [{_id:"1",avatar:"https://"}, {_id:"2",avatar:"https://"}],
      totalMessages:20,
      totalMembers:2,
      creator:{
        name: "John",
        avatar: "https://",
      }
    },
    {
      avatar: ["https://"],
      name: "john bio",
      _id: "2",
      groupChat: false,
      memeber: [{_id:"1",avatar:"https://"}, {_id:"2",avatar:"https://"}],
      totalMessages:20,
      totalMembers:2,
      creator:{
        name: "John",
        avatar: "https://",
      }
    }
  ],
  Messages:[{
    attachements:[],
    content:"Messge from megha",
    _id:"DFHSgdafgdfgfs",
    sender:{
      avatar: "https://",
      name:"deepu",

    },
    chat:"chatId",groupChat:false,
    createdAt:"2024-05-23T09:10:30.630Z",
  },


  {
    attachements:[],
    content:"Messge from megha",
    _id:"DFHSgdafgdfgfs",
    sender:{
      avatar:"https://",
      name:"deepu",},
      chat:"chatId",groupChat:"true",
      createdAt:"2024-05-23T09:10:30.630Z",
  }
]

}
