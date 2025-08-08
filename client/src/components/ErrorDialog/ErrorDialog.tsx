import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";

import Button from "@mui/material/Button";

import generics from "~/generics.json";

type ErrorDialogProps = {
  open: boolean;
  errorMessage: string | undefined;
  onClose: () => void;
};

function ErrorDialog({ open, onClose, errorMessage }: ErrorDialogProps) {
  return (
    <>
      <Dialog open={open}>
        <DialogTitle>{generics.ErrorGenerics[0].msg}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {errorMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ErrorDialog;
