import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  Stack,
  TextField,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useInputValidation } from "6pp";
import { Search as SearchIcon } from "@mui/icons-material";
import UserItem from "../Shared/UserItem";
import { sampleUsers } from "../constant/sampleData";

const Search = () => {
  const search = useInputValidation("");
  const [users, setUsers] = useState(sampleUsers);
  const isLoadingSendFriendRequest = false; // corrected typo
  const addFriendHandler = (id) => {
    console.log(id);
  };

  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>find people</DialogTitle>
        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <List>
          {users.map((i) => (
            <UserItem
              user={i} // corrected to use 'user'
              key={i._id} // corrected to use 'user._id'
              handler={addFriendHandler} // corrected typo
              handlerIsLoading={isLoadingSendFriendRequest} // corrected typo
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;
