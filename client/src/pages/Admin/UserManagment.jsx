import { Avatar } from "@mui/material";
import { Tables } from "../../components/Shared/Tables";
import React, { useEffect, useState } from "react";
import { dashboardData } from "../../components/constant/sampleData";
import { transformImage } from "../../Lib/Features";

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
    renderCell: (Params) => <Avatar alt={Params.row.avatar} src ={Params.row.avatar} />,
  },
  {
    field: "name",
    headerName: "Name",
    headerClassName: "table-header",
    width: 150,
  },
  {
    field: "username",
    headerName: "username",
    headerClassName: "table-header",
    width: 150,
  },
  {
    field: "freinds",
    headerName: "friends",
    headerClassName: "table-header",
    width: 150,
  },
  {
    field: "groups",
    headerName: "groups",
    headerClassName: "table-header",
    width: 150,
  },
];
const UserManagement = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    setRows(
      dashboardData.users.map((i) => ({
        ...i,
        id: i._id,
        avatar: transformImage(i.avatar, 50),
      }))
    );
  }, []);
  return (
    <AdminLayout>
      <Tables heading={"all users"} columns={columns} />
    </AdminLayout>
  );
};

export default UserManagement;
