import {
  Dialog,
  Stack,
  Typography,
  DialogTitle,
  Button,
  IconButton,
  DialogContent,
  DialogActions,
} from "@mui/material";

const MyModal = ({ open, title, children, onClose, onSubmit }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      scroll="paper"
      fullWidth
      maxWidth={"lg"}
    >
      <DialogTitle id="scroll-dialog-title">
        <Stack
          direction="row"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6">{title}</Typography>
          <IconButton aria-label="close" onClick={onClose}>
            <Close />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      {/* <DialogActions>
        <Button variant="contained" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" onClick={onSubmit}>
          Submit
        </Button>
      </DialogActions> */}
    </Dialog>
  );
};

export default MyModal;

