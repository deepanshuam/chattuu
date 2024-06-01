import {
  Button,
  Dialog,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { sampleUsers } from "../constant/sampleData";
import UserItem from "../Shared/UserItem";
import { useInputValidation } from "6pp";

const NewGroup = () => {
  const groupName = useInputValidation("");

  const sumbitHandler = () => {};

  const closeHandler = () => {};

  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((currElement) => currElement !== id)
        : [...prev, id]
    );
  };
  console.log(selectedMembers);
  return (
    <Dialog open onClose={closeHandler}>
      <Stack
        p={{ xs: "1rem", sm: "3rem" }}
        width={"25rem"}
        spacing={"2rem"}
        variant="h4"
      >
        <DialogTitle>New Group</DialogTitle>

        <TextField
          label="Group Name"
          value={groupName.value}
          onChange={groupName.changeHandler}
        />
        <Typography variant="body1">Members</Typography>

        <Stack>
          {members.map((i) => (
            <UserItem
              user={i}
              key={i._id}
              handler={selectMemberHandler}
              isAdded={selectedMembers.includes(i._id)}
            />
          ))}
        </Stack>

        <Stack direction={"row"} justifyContent={"space-between"}>
          <Button varient="outline" color="error" size="large">
            Cancel
          </Button>
          <Button variant="contained" size="large" onClick={sumbitHandler}>
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
