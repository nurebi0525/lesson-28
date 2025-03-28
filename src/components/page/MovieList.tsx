import { Box, Button, Card, CardMedia, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import movies from "../Array-Movie";
import { useEffect, useState } from "react";

export const MovieList = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(storedFavorites);
  }, []);

  return (
    <StyledBox>
      <h1>Movie List</h1>
      <StyledCardbox>
        {movies.map((item) => {
          const isFavorite = favorites.includes(item.id);
          return (
            <StyledCard key={item.id} isFavorite={isFavorite}>
              <CardMedia component="img" height="200" image={item.image} />
              <Typography color="white" textAlign="center" paddingTop="10px">
                <Button component={Link} to={`/movie/${item.id}`} sx={{ color: "white" }}>
                  {item.title}
                </Button>
              </Typography>
            </StyledCard>
          );
        })}
      </StyledCardbox>
    </StyledBox>
  );
};

// Styled Components
const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  padding-top: 50px;
`;

const StyledCardbox = styled(Box)`
  width: 1090px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const StyledCard = styled(Card)<{ isFavorite: boolean }>`
background-color: #02558b;
  width: 200px;
  border: 2px solid ${(props) => (props.isFavorite ? "red" : "null")};
  transition: background-color 0.3s ease-in-out;
`;
