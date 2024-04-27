import React, { useState } from "react";
import { Card, CardHeader, CardContent, IconButton, Typography, Menu, MenuItem, Chip, Divider, Avatar, CardMedia, CircularProgress, CardActions } from "@mui/material";
import { Delete, Edit, MoreVert } from "@mui/icons-material";
import ArtistButton from "../ArtistButton";

const ArtistBazarDisplayCard = (props) => {
  const {
    title,
    children,
    isEdit,
    isDelete,
    profileType,
    relationship,
    handleEdit,
    handleDelete,
    image,
    description,
    data,
  } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const onDelete = () => {
    setAnchorEl(null);
    // handleDelete?.(data);
  };
  const onEdit = () => {
    setAnchorEl(null);
    // handleEdit?.(data);
  };

  const displayMemberImage = (url) => {
    return (
      <CardMedia
        sx={{ height: 140 }}
        image={url}
        title="green iguana"
      />
    );
  };

  return (
    <Card
      sx={{
        borderRadius: 1,
        boxShadow: "rgba(0, 0, 0, 0.10) 0px 5px 15px",
        width: "100%",
        height: "25rem",
        position: "relative",
      }}
    >
      <CardHeader
        titleTypographyProps={{
          display: "flex",
          alignItems: "center",
          fontSize: 20,
        }}
        title={title || ""}
        action={
          <>
            <IconButton
              aria-label="more"
              aria-controls="card-menu"
              aria-haspopup="true"
              onClick={(e) => {
                setAnchorEl(e.currentTarget);
              }}
            >
              <MoreVert />
            </IconButton>
            <Menu
              id="card-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              sx={{
                "& .MuiMenu-paper": {
                  borderRadius: 1,
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  width: 120,
                },
              }}
            >
              {!isEdit && (
                <MenuItem
                  onClick={onEdit}
                  sx={{
                    p: 0,
                    px: 1,
                    display: "flex",
                    justifyContent: "left !important ",
                  }}
                  id="menuItem"
                >
                  <Edit fontSize="small" />
                  <Typography sx={{ ml: 1 }}>Edit</Typography>
                </MenuItem>
              )}
              {!isDelete && (
                <>
                  <Divider />
                  <MenuItem
                    onClick={onDelete}
                    sx={{
                      p: 0,
                      px: 1,
                      display: "flex",
                      // justifyContent: " !important ",
                    }}
                    id="menuItem"
                  >
                    <Delete fontSize="small" />
                    <Typography sx={{ ml: 1 }}>Delete</Typography>
                  </MenuItem>
                </>
              )}
            </Menu>
          </>
        }
      />
      {displayMemberImage(image || "")}
      <CardContent sx={{ display: "flex" }}>
        <Typography>{description || "No description"}</Typography>
      </CardContent>
      <CardActions sx={{ position: "absolute", bottom: 0, width: "100%" }}>
        <ArtistButton text={"share"} />
        <ArtistButton text={"View"} color="secondary" />
      </CardActions>
    </Card>
  );
};

export default ArtistBazarDisplayCard;

