import { Button, Grid, IconButton } from "@mui/material"
import FacebookIcon from "@mui/icons-material/Facebook"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import { copyTextToClipboard } from "../Clipboard/clipboard"
export const Share = ({ urlToShare }: { urlToShare: string }) => {
  return (
    <Grid container direction="column">
      <Grid item sx={{ marginLeft: "auto", marginRight: "auto" }}>
        <h3>Compartir</h3>
      </Grid>
      <Grid
        container
        direction={"row"}
        justifyContent="center"
        marginBottom={"20px"}
      >
        <Grid
          item
          md={4}
          sx={{
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <hr></hr>
        </Grid>
        <Grid item md={2}>
          <Grid
            container
            justifyContent={"center"}
            sx={{ verticalAlign: "middle" }}
          >
            <Grid item md={3} textAlign={"center"} sx={{}}>
              <IconButton
                href={`http://www.facebook.com/sharer.php?u=${urlToShare}`}
                target="_blank"
              >
                <FacebookIcon fontSize="large" sx={{ color: "#006CB9" }} />
              </IconButton>
            </Grid>
            <Grid item md={3} textAlign={"center"} sx={{}}>
              <IconButton
                href={`https://api.whatsapp.com/send?text=${urlToShare}`}
                target="_blank"
              >
                <WhatsAppIcon fontSize="large" sx={{ color: "#2FAF1E" }} />
              </IconButton>
            </Grid>
            <Grid item md={3} textAlign={"center"} sx={{}}>
              <IconButton
                onClick={() => {
                  copyTextToClipboard(urlToShare)
                }}
              >
                <ContentCopyIcon fontSize="large" sx={{ color: "gray" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          md={4}
          textAlign={"center"}
          sx={{
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <hr></hr>
        </Grid>
      </Grid>
    </Grid>
  )
}
