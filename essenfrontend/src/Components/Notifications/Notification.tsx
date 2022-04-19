import { Snackbar } from "@mui/material"

export const Notification = ({
  text,
  open,
  handleClose,
}: {
  text: string
  open: boolean
  handleClose: () => {}
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={open}
      onClose={handleClose}
      message={text}
      key={"bottom" + "right"}
      autoHideDuration={5000}
    />
  )
}
