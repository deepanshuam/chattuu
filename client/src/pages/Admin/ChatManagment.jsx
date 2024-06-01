import { Tables } from "../../components/Shared/Tables";
import React, { useEffect, useState } from "react";
import { dashboardData } from "../../components/constant/sampleData";
import { transformImage } from "../../Lib/Features";
import { AvatarCard } from "../../components/Shared/AvatarCard";
import { Avatar } from "@mui/material";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 200,
    headerClassName: "table-header",
  },
  {
    field: "avatar",
    headerName: "Avatar",
    headerClassName: "table-header",
    width: 150,
    renderCell: (Params) => <AvatarCard avatar={Params.row.avatar} />,
  },
  {
    field: "name",
    headerName: "Name",
    headerClassName: "table-header",
    width: 300,
  },
  {
    field: "totalMembers",
    headerName: "totalMembers",
    headerClassName: "table-header",
    width: 120,
  },
  {
    field: "members",
    headerName: "members",
    headerClassName: "table-header",
    width: 400,
    renderCell: (Params) => (
      <AvatarCard max={100} avatar={Params.row.members} />
    ),
  },
  {
    field: "totalMessages",
    headerName: "Total Messages",
    headerClassName: "table-header",
    width: 120,
  },
  {
    field: "creater",
    headerName: "created by",
    headerClassName: "table-header",
    width: 250,
    renderCell: (Params) => (
      <Stack direction="row" alignItems="center" spacing={"1rem"}>
        <AvatarCard
          alt={Params.row.creator.name}
          src={Params.row.creator.avatar}
        />

        <span> {Params.row.creator.name}</span>
      </Stack>
    ),
  },
];
const ChatManagement = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    setRows(
      dashboardData.chats.map((i) => ({
        ...i,
        id: i._id,
        avatar: transformImage(i.avatar, 50),
        memeber: i.memeber.map((i) => transformImage(i.avatar, 50)),
        creator: {
          name: i.creator.name,
          avatar: transformImage(i.creator.avatar, 50),
        },
      }))
    );
  }, []);
  return (
    <AdminLayout>
      <Tables heading={"all chats"} columns={columns} />
    </AdminLayout>
  );
};

export default ChatManagement;
