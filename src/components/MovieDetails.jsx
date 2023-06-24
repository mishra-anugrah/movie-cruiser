import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  LinearProgress,
  Typography,
} from "@mui/material";
import React from "react";
import { Animate } from "react-simple-animate";

export const MovieDetails = (props) => {
  const { movie, className, row } = props;
  return (
    <div className={`movie-details ${className}`} style={{ gridRowStart: row }}>
      <Animate
        play={className === "details-visible"}
        duration={0.2}
        delay={0.3}
        start={{ transform: "scaleY(0)" }}
        end={{ transform: "scaleY(1)" }}
      >
        <Card sx={{ display: "flex", maxHeight: "390px" }}>
          <CardMedia
            component="img"
            image={movie.Poster}
            alt={movie.Title}
            sx={{ width: "auto" }}
          />
          <Box
            className="movie-details-content"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Animate
              play={className === "details-visible"}
              duration={0.4}
              delay={0.6}
              start={{ transform: "translate(0, 2%)", opacity: 0 }}
              end={{ transform: "translate(0, 0)", opacity: 1 }}
            >
              <CardContent sx={{ marginLeft: "20px", paddingRight: "5em" }}>
                <Typography
                  className="details-title details-section"
                  component="div"
                  sx={{ fontSize: "30px" }}
                >
                  {movie.Title}
                </Typography>
                <div className="movie-rating details-section">
                  <LinearProgress
                    value={movie.imdbRating * 10}
                    variant="determinate"
                  />
                  {movie.imdbRating}/10
                </div>
                <Box className="info-group details-section">
                  <div className="labels">
                    <div>Year: </div>
                    <div>Running Time: </div>
                    <div>Directed by: </div>
                    <div>Language: </div>
                  </div>

                  <div className="values">
                    <div>{movie.Year}</div>
                    <div>{movie.Runtime}</div>
                    <div>{movie.Director}</div>
                    <div>{movie.Language}</div>
                  </div>
                </Box>

                <Box className="details-section movie-description">
                  {movie.Plot}
                </Box>

                <Box className="details-section details-watch-buttons">
                  <Button variant="contained">Play Movie</Button>
                  <Button variant="outlined">Watch Trailer</Button>
                </Box>
              </CardContent>
            </Animate>
          </Box>
        </Card>
      </Animate>
    </div>
  );
};
