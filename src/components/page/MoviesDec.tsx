import { Box, Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import movies from "../Array-Movie";
import { useState, useEffect } from "react";

export const MovieDec = () => {
  const { id } = useParams<{ id: string }>();
  const movie = movies.find((movie) => movie.id.toString() === id);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(storedFavorites.includes(movie?.id));
  }, [movie?.id]);

  const toggleFavorite = () => {
    let storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (isFavorite) {
      storedFavorites = storedFavorites.filter((favId: number) => favId !== movie?.id);
    } else {
      storedFavorites.push(movie?.id);
    }
    localStorage.setItem("favorites", JSON.stringify(storedFavorites));
    setIsFavorite(!isFavorite);
  };

  if (!movie) return <Typography variant="h4">Movie not found</Typography>;

  return (
    <Box key={movie.id} textAlign="center" padding="20px">
      <img src={movie.image} alt={movie.title} width="300px" />
      <Typography variant="h3">{movie.title}</Typography>
      <Typography>Rating: {movie.raiting}</Typography>
      <Typography>Price: {movie.price}</Typography>
      <Button
        onClick={toggleFavorite}
        variant="contained"
        color={isFavorite ? "secondary" : "primary"}
        sx={{ marginTop: "10px" }}
      >
        {isFavorite ? "Unfavorite" : "Favorite"}
      </Button>
    </Box>
  );
};
