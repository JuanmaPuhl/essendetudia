import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import { useTheme } from "@material-ui/core"
import { Container, Grid, IconButton } from "@mui/material"
import { useState } from "react"

const pages = [
  { title: "Inicio", url: "/" },
  { title: "Productos", url: "/products" },
  { title: "Recetas", url: "/recipes" },
  { title: "Contacto", url: "/contact" },
]

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const theme = useTheme()
  const path = window.location.pathname
  console.log(path)
  const parsedPath = path.split("/")[1] || ""
  console.log(parsedPath)
  const [activeTab, setActiveTab] = useState<string>("/" + parsedPath)
  return (
    <AppBar
      position="static"
      sx={{
        // backgroundColor: "#FFFFFF1E",
        backgroundColor: "#00000000",
        color: "black",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Essendetudia
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none", width: "100%" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.title}
                  onClick={() => {
                    window.location.href = page.url
                    handleCloseNavMenu()
                  }}
                >
                  <Typography
                    key={page.title}
                    component="a"
                    variant="body1"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      marginRight: "5px",
                      marginLeft: "5px",
                    }}
                  >
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              position: "absolute",
              left: 0,
              width: "100%",
              textAlign: "center",
              zIndex: "-1",
              display: { xs: "inline", md: "none" },
            }}
          >
            Essendetudia
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Typography
                key={page.title}
                component="a"
                variant="body1"
                href={page.url}
                style={{
                  textDecoration: "none",
                  marginRight: "5px",
                  marginLeft: "5px",
                }}
                sx={{
                  color: page.url === activeTab ? "#439d98" : "black",
                  ":hover": {
                    color: "#439d98",
                    transition: "all .2s ease-in",
                  },
                }}
              >
                {page.title}
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
