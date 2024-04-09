import React, { useRef } from 'react';
import { Grid, Stack, Typography } from "@mui/material";
import ProfileCreationFrame2 from '../../../../public/assets/icons/LandingPage/ProfileCreationFrame2';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    carouselStyle: {
        zIndex: 0,
        position: "relative",
        width: "fit-content",
        maxWidth: "60%",
        width: "60%"
    },
    customDotListStyle: {
        '& > li > button': {
            border: "none"
        },
    }

});

function AuthLeftPannel() {

    const carouselRef = useRef();


    const classes = useStyles();

    const authSlideData = [
        {
            id: "1",
            title: "Apply for your dream job",
            desc: "Ullamcorper urna fringilla lorem scelerisque nunc. Amet odio cras amet adipiscing ut adipiscing urpis donec vel",
            image: ProfileCreationFrame2,
        },
        {
            id: "2",
            title: "Apply for your dream job",
            desc: "Ullamcorper urna fringilla lorem scelerisque nunc. Amet odio cras amet adipiscing ut adipiscing urpis donec vel",
            image: ProfileCreationFrame2,
        },
        {
            id: "3",
            title: "Apply for your dream job",
            desc: "Ullamcorper urna fringilla lorem scelerisque nunc. Amet odio cras amet adipiscing ut adipiscing urpis donec vel",
            image: ProfileCreationFrame2,
        },
        {
            id: "4",
            title: "Apply for your dream job",
            desc: "Ullamcorper urna fringilla lorem scelerisque nunc. Amet odio cras amet adipiscing ut adipiscing urpis donec vel",
            image: ProfileCreationFrame2,
        },

    ];

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 0 },
            items: 1,
        },
        // desktop2: {
        //     breakpoint: { max: 3001, min: 1600 },
        //     items: 1,
        // },
        // desktop1: {
        //     breakpoint: { max: 1601, min: 1000 },
        //     items: 1,
        //     // gap: 2,
        // },
        // tablet2: {
        //     breakpoint: { max: 1001, min: 770 },
        //     items: 1,
        // },
        // tablet1: {
        //     breakpoint: { max: 771, min: 464 },
        //     items: 1,
        // },
        // mobile: {
        //     breakpoint: { max: 465, min: 0 },
        //     items: 1,
        // },
    };


    return (
        <React.Fragment>
            <Grid container
                sx={{
                    minHeight: "100%",
                    minWidth: "100%",
                    margin: "auto",
                    padding: "5px",
                    background: "var(--app-button-color1)",
                    position: "relative",
                    zIndex: "1",
                    "&::before": {
                        content: "''",
                        position: "absolute",
                        top: "0",
                        bottom: "0",
                        width: "100%",
                        zIndex: "-1",
                        opacity: "0.5",
                        background: "linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px) 0 0/10px 100%, linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px) 25% 0/10px 100%, linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px) 50% 0/10px 100%, linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px) 75% 0/10px 100%",
                        backgroundRepeat: "no-repeat"
                    }

                }}
            >
                {/*Auth Right Main */}
                <Grid item xs={12} sm={12}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Carousel
                        ref={carouselRef}
                        responsive={responsive}
                        className={classes.carouselStyle}
                        dotListClass={classes.customDotListStyle}
                        arrows={false}
                        showDots={true}
                        renderButtonGroupOutside={true}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={5000}
                    >
                        {authSlideData?.map((item, index) => (
                            <Stack
                                key={index}
                                sx={{
                                    width: "fit-content",
                                    gap: "20px",
                                    paddingBottom: "25px",


                                }}>
                                <Stack
                                    justifyContent="center"
                                    alignItems="center"
                                    sx={{
                                        borderRadius: "15px",
                                        padding: "10px"

                                    }}
                                >
                                    {item?.image({ width: "100%", height: "unset" })}
                                </Stack>
                                <Stack>
                                    <Typography
                                        sx={{
                                            textAlign: "center",
                                            fontSize: "32px",
                                            color: "#FFFFFF",
                                            fontWeight: "700",
                                        }}
                                    >{item?.title}</Typography>
                                    <Typography
                                        sx={{
                                            textAlign: "center",
                                            fontSize: "16px",
                                            color: "#FFFFFF80",
                                            fontWeight: "400",
                                        }}
                                    >{item?.desc}</Typography>
                                </Stack>
                            </Stack>
                        ))}
                    </Carousel>
                </Grid>

            </Grid>
        </React.Fragment>
    )
}

export default AuthLeftPannel