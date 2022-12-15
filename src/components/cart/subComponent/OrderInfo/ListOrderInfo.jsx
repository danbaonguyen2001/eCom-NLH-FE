import React from 'react'
import { ListItem,ListItemText } from '@mui/material' 
const ListOrderInfo = (props) => {
  return (
    <ListItem
    sx={props.wrapSx}
    >
    <ListItemText
      {...props}
      secondaryTypographyProps={{
        style: { fontSize: "13px" },
      }}
      primaryTypographyProps={{
        style: { fontWeight: "bold", fontSize: "14px" },
      }}
    ></ListItemText>
  </ListItem>
  )
}

export default ListOrderInfo