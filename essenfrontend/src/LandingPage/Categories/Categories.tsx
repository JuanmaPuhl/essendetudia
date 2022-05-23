import { Typography } from "@material-ui/core"
import { Box, Button, Container, Grid } from "@mui/material"

const Category = ({
  imgUrl,
  text,
  width,
  maxWidth,
  height,
  maxHeight,
}: {
  imgUrl: string
  text: string
  width?: string
  maxWidth?: string
  height?: string
  maxHeight?: string
}) => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "0",
          left: "0",
          width: width ?? "100%",
          height: height ?? "100%",
          maxWidth: maxWidth ?? "100%",
          maxHeight: maxHeight ?? "100%",
          backgroundColor: "rgba(0,0,0,0.3)",
          zIndex: "1",
          color: "white",
          fontSize: "2em",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          //Set react on  hover style
          transition: "background 0.5s ease-in",
          padding: 0,
          margin: 0,
          "&:hover": {
            //change background color after some time
            transition: "background 0.5s ease-out",
            backgroundColor: "rgba(0,0,0,0.6)",
            cursor: "pointer",
          },
          borderRadius: "10px",
        }}
      >
        {text}
      </Box>
      <img
        src={imgUrl}
        style={{
          height: height ?? "auto",
          maxWidth: maxWidth ?? "100%",
          width: width ?? "auto",
          maxHeight: maxHeight ?? "100%",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      ></img>
    </>
  )
}

export const Categories = () => {
  return (
    <Container style={{ height: "auto", marginTop: "20px" }}>
      <Grid
        container
        columns={12}
        marginTop="20px"
        sx={{ width: "100%", marginRight: "auto", marginLeft: "auto" }}
      >
        <Grid item md={11}>
          <Typography variant="h5">Categorias</Typography>
        </Grid>
        <Grid item md={1}>
          <Button>Ver todo</Button>
        </Grid>
      </Grid>

      {/* <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          height: "auto",
          position: "relative",
          marginTop: "20px",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            gridRow: "span 2",
            position: "relative",
            height: "600px",
          }}
        >
          <Category
            text="Linea Aqua"
            imgUrl="https://www.essen.com.ar/imgs/w510-h400-c510.400/contenido/objetos/1/Conteporanea.jpg"
            height="100%"
          />
        </div>
        <div
          style={{
            gridColumn: "span 2",
            position: "relative",
            height: "300px",
            padding: "0",
            margin: "0",
          }}
        >
          <Category
            text="Linea Terra"
            imgUrl="https://www.essen.com.ar/imgs/w510-h400-c510.400/contenido/objetos/1/Terra.jpg"
            width="100%"
            maxHeight="100%"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gridColumn: "span 2",
            height: "300px",
            width: "100%",
            backgroundColor: "red",
          }}
        >
          <div
            style={{
              position: "relative",
              height: "100%",
              backgroundColor: "pink",
              flex: 1,
            }}
          >
            <Category
              text="Linea Marsala"
              imgUrl="https://www.essen.com.ar/imgs/w510-h400-c510.400/contenido/objetos/1/ClasicaMarsala.jpg"
              height="100%"
            />
          </div>
          <div style={{ position: "relative", flex: 1 }}>
            <Category
              text="Complementos"
              imgUrl="https://www.essen.com.ar/imgs/w510-h400-c510.400/contenido/objetos/1/portadacomplementos.jpg"
              height="100%"
            />
          </div>
        </div>
      </div> */}
      <Grid container columns={4} columnSpacing={2}>
        <Grid item md={1}>
          <div
            style={{
              position: "relative",
              height: "600px",
            }}
          >
            <Category
              text="Linea Aqua"
              imgUrl="https://www.essen.com.ar/imgs/w510-h400-c510.400/contenido/objetos/1/Conteporanea.jpg"
              height="100%"
            />
          </div>
        </Grid>
        <Grid item md={1}>
          <div
            style={{
              gridRow: "span 2",
              position: "relative",
              height: "600px",
            }}
          >
            <Category
              text="Linea Terra"
              imgUrl="https://www.essen.com.ar/imgs/w510-h400-c510.400/contenido/objetos/1/Terra.jpg"
              height="100%"
            />
          </div>
        </Grid>
        <Grid item md={1}>
          <div
            style={{
              gridRow: "span 2",
              position: "relative",
              height: "600px",
            }}
          >
            <Category
              text="Linea Marsala"
              imgUrl="https://www.essen.com.ar/imgs/w510-h400-c510.400/contenido/objetos/1/ClasicaMarsala.jpg"
              height="100%"
            />
          </div>
        </Grid>
        <Grid item md={1}>
          <div
            style={{
              gridRow: "span 2",
              position: "relative",
              height: "600px",
            }}
          >
            <Category
              text="Complementos"
              imgUrl="https://www.essen.com.ar/imgs/w510-h400-c510.400/contenido/objetos/1/portadacomplementos.jpg"
              height="100%"
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}
