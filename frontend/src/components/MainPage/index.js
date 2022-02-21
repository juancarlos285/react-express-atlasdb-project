import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { useStyles } from './styles';

// [...Array(5).keys()]
const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const endpoint = "https://localhost:5000/restaurants/1"



export const MainPage = () => {
    const classes = useStyles()
    const data = async () => {
        const response = await fetch(endpoint, {
            method: "GET", // POST, PUT, DELETE, etc.
            headers: {
              // the content type header value is usually auto-set
              // depending on the request body
              "Content-Type": "text/plain;charset=UTF-8",
              "Access-Control-Allow-Origin": "*"
            },
            body: undefined, // string, FormData, Blob, BufferSource, or URLSearchParams
            referrer: "",
            cache: "default", // no-store, reload, no-cache, force-cache, or only-if-cached
            redirect: "follow", // manual, error
            integrity: "", // a hash, like "sha256-abcdef1234567890"
            keepalive: false, // true
            signal: undefined, // AbortController to abort request
            window: window // null
          })
        return response
    }
    console.log(data()) 
    
    

    return (
        <Container id="primaryContainer" className={classes.container}>
            <div id ="header" className={classes.header}>
                <Typography variant="h4">Main Page</ Typography>
            </div>
            <div id ="body" className={classes.body}>
                <Typography variant="h5">Body</ Typography>
                <Card
                    className={classes.card}
                    raised={true}
                >
                    Card Item
                </ Card>
                {/* {
                    arr.map((num) => {
                        return (
                            <Card
                                className={classes.card}
                                raised={true}
                            >
                                Card Item {num}
                            </ Card>
                        )
                    })
                } */}
            </div>
        </Container>
    )
}