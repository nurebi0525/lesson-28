import { Box, Typography } from "@mui/material"
import movies from "../Array-Movie";
import { useParams } from "react-router";



export const MovieDec= () => {
     const {id} = useParams<{id: number | string}>()
    const movie = movies.find((movie) => movie.id.toString() === id);
  return (
<Box key={movie?.id}>
   <img src={movie?.image} alt="" />
   <Typography>
    {movie?.title}
   </Typography>
   <Typography>
    {movie?.raiting}
   </Typography>
   <Typography>
    {movie?.price}
   </Typography>
   
</Box>
  )

}
