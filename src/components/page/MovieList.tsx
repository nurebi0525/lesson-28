import { Box, Button, Card, CardMedia, styled, Typography } from "@mui/material"
import movies from "../Array-Movie"
import { Link } from "react-router"



export const MovieList = () => {
  return (
    <StyledBox>
        <h1>Movie List</h1>
        <StyledCardbox>
            {movies.map((item) => {
                return (
                    <StyledCard key={item.id}>
                    <CardMedia 
                    component="img"
                    height="200"
                    image={item.image}
                    />
                        <Typography color="white" textAlign='center' paddingTop="10px">
                            <Button>
                            <Link to={`/${item.id}`}>
                            
                            {item.title}
                            </Link>
                            </Button>
                        </Typography>
                 

                </StyledCard>
                )
            })}
        </StyledCardbox>
    </StyledBox>
  )
}

const StyledBox = styled(Box)`
    display: flex; 
    justify-content: center;
    flex-direction: column;
    gap: 25px;
    align-items: center;
    padding-top: 50px;
`
const StyledCardbox = styled(Box)`
width: 1090px;
    display: flex;
    gap: 20px;
    /* flex-direction: column; */
    flex-wrap: wrap;

`
const StyledCard = styled(Card)`
    width: 200px;
    background-color: #02558b;
`