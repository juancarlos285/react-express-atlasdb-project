import React from "react";
import { Button, Card, Container, Divider, Grid, Typography } from '@mui/material';
import { useStyles } from './styles';

const endpoint = "http://localhost:8000/restaurants/10"

export const MainPage = () => {
    const classes = useStyles()

    const [ info, setInfo ] = React.useState(null)

    const handleClick = async () => {
        const response = await fetch(endpoint)
        const output = await response.json()
        setInfo(output)
    }

    return (
        <Container className={classes.container}>
            <Grid className={classes.grid}>
                <Button variant="outlined" onClick={() => handleClick()}>Click here for restaurants!</Button>
            </Grid>
            {info && info.map((value) => {
                return (
                <Card className={classes.resultsCard}>
                    <Typography>{value.name}</Typography>
                    <Typography>Cuisine: {value.cuisine}</Typography>
                    <Divider className={classes.divider} light/>
                    <Typography>{value.address.street}</Typography>
                    <Typography>{value.borough}, {value.address.zipcode}</Typography>
                    <Divider className={classes.divider} light/>
                    <Typography>Grade: {value.grades[0].grade}</Typography>
                </Card>
            )})}
        </Container>
    )
}