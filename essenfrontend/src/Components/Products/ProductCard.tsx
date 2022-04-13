import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import { Typography } from "@material-ui/core"
import { Button, CardActionArea, CardActions } from "@mui/material"

export default function ProductCard({
  title,
  shortDescription,
  image,
}: {
  title: string
  shortDescription: string
  image: string
}) {
  return (
    <Card
      sx={{
        width: "90%",
        maxheight: 290,
        paddingBottom: 0,
        alignSelf: "center",
        marginRight: "auto",
        marginLeft: "auto",
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent sx={{ height: 150 }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">{shortDescription}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Mas informacion
        </Button>
      </CardActions>
    </Card>
  )
}
