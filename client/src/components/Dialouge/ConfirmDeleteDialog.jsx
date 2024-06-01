import { Dialog, DialogContent, DialogTitle,DialogContentText, DialogActions, Button } from '@mui/material'
import React from 'react'

const ConfirmDeleteDialog = ({open,handleClose,deleteHandler}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
        ConfirmDeleteDialog
        </DialogTitle>

        <DialogContent>
            <DialogContentText>
                Are You sure want to delete this group.
            </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose}>No</Button>
        <Button onClick={deleteHandler} color="error">
          Yes
        </Button>
      </DialogActions>
</Dialog>
  )
}

export default ConfirmDeleteDialog