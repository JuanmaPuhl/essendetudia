import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import { Fab } from "@mui/material"

export const WhatsappButton = () => {
  return (
    <Fab
      color="success"
      aria-label="whatsapp"
      href="https://wa.me/+5492914670881"
      target="_blank"
      sx={{ position: "fixed", bottom: 20, right: 20 }}
    >
      <WhatsAppIcon />
    </Fab>
  )
}
