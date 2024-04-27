import React, { useState } from "react";
import { Card, CardHeader, CardContent, IconButton,Box, Typography, Menu, MenuItem, Chip, Divider, Avatar, CardMedia, CircularProgress, CardActions } from "@mui/material";
import { Delete, Edit, MoreVert } from "@mui/icons-material";
import { useTheme } from '@mui/material/styles';
import ArtistButton from "../ArtistButton";

const ArtistModernCard = (props) => {
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
  const theme = useTheme();
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
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {title}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', px: 1, pb: 1}}>
          <ArtistButton text="Learn More.." onClick={onEdit} fullWidth />
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="Live from space album cover"
      />
    </Card>
  );
};

export default ArtistModernCard;

