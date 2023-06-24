import React from "react";
import { Card, CardActions, CardMedia } from "@mui/material";
import { PlayCircleOutline, AddCircleOutline } from "@mui/icons-material";

export const MovieCard = (props) => {
  const { movie, handleMovieSelection, index, isSelected } = props;
  return (
    <>
      <Card
        sx={{
          maxWidth: 178,
          borderRadius: "10px",
          boxShadow: isSelected ? "0 0 0 3px #00E0FF" : "",
        }}
        className={"movie-card"}
        onClick={() => handleMovieSelection(movie, index)}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height={190}
          width={159}
          image={movie.Poster}
          className="card-poster"
        />
        <div className="movie-card__title">{movie.Title}</div>
        <CardActions className="card-actions">
          <PlayCircleOutline />
          <AddCircleOutline />
        </CardActions>
      </Card>
    </>
  );
};
