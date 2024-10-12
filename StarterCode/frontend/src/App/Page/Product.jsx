import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

export default function MediaCard({ product, clickDelete }) {
  return (
    <Card className="card">
      <Box sx={{ position: 'relative' }}>
        <CardMedia sx={{ height: 125 }} image={product.imageUrl} title={product.name} />

        <IconButton
          onClick={() => clickDelete(product.id)}
          sx={{ position: 'absolute', top: 2, left: 2, color: 'red' }}
          aria-label="delete"
          size="small"
        >
          <DeleteIcon />
        </IconButton>
      </Box>

      <CardContent
        sx={{
          padding: '6px 11px ',
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            padding: '3px',
            marginTop: '5px',
            marginBottom: '5px',
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          {product.name}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.primary' }}>
          ${product.price}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {product.description}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
