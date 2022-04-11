import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import { Fragment, useState } from "react"
import { IconButton, ListItemButton } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

type SectionProps = {
  title: string
  icon: JSX.Element
}

type SidepanelProps = {
  sectionList: SectionProps[]
}

export const Sidepanel = ({ sectionList }: SidepanelProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const SideMenu = () => (
    <Box
      sx={{
        width: 250,
      }}
    >
      <List>
        {sectionList.map(({ title, icon }: SectionProps) => (
          <ListItemButton
            key={title}
            onClick={() => {
              console.log("I'm clicking ", title)
              setIsDrawerOpen(false)
            }}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={title} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <Fragment key={"drawer"}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
          disableRipple
          onClick={() => setIsDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <SideMenu />
        </Drawer>
      </Fragment>
    </>
  )
}
