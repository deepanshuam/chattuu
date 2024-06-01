import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import moment from "moment";

const Profile = () => {
  return (
    <Stack spacing={2} direction={"column"} alignItems={"center"}>
      <Avatar
        src="path/to/avatar/image.jpg"
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />

      <ProfileCard heading={"Bio"} text={"djv wdbifbebfw"} />
      <ProfileCard
        heading={"Username"}
        text={"djv wdbifbebfw"}
        Icon={<UserNameIcon />}
      />
      <ProfileCard heading={"Name"} text={"Deeepanshu"} Icon={<FaceIcon />} />
      <ProfileCard
        heading={"Joined"}
        text={moment("2023-11-04T18:30:00.000Z").fromNow()}
        Icon={<CalendarIcon />}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={1}
    color={"white"}
    textAlign={"center"}
  >
    {Icon}
    <Stack>
      <Typography variant="body1">{heading}</Typography>
      <Typography color={"grey"} variant={"caption"}>
        {text}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;
