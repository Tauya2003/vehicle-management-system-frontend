import { Box, Button, Stack, Typography } from "@mui/material"
import carIcn from "../images/bx-car.svg"
import calenderIcn from "../images/calendar-check.svg"
import filterIcn from "../images/filter.svg"
import SearchBar from "../components/SearchBar"
import { useVehicleQuery } from "../store"

const CarAVailable = () => {
    const { data } = useVehicleQuery(undefined)

    if (!data) return 'loading..'

    return (
        <Box
            sx={{
                padding: "56px 82px",
                display: "flex",
                flexDirection: "column",
                gap: "50px",
                height: "100vh",
                overflowY: "auto",
                width: "100%",
            }}
        >
            {/* <Box
                sx={{
                    display: 'inline-flex',
                    width: 'fit-content',
                    padding: "32px 28px 40px 28px",
                    flexDirection: "column",
                    gap: "16px",
                    borderRadius: "8px",
                    bgcolor: "#fff",
                    boxShadow: "0px 8px 24px 0px rgba(69, 69, 80, 0.10)",
                }}
            >
                <Typography
                    sx={{
                        color: "#1A1919",
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontWeight: 600,
                        lineHeight: '24px',
                    }}
                >
                    Car Availablity
                </Typography>

                <Stack direction={'row'} gap={"25px"}>
                    <Box sx={{
                        display: 'flex',
                        padding: '12px 16px',
                        alignItems: 'flex-start',
                        gap: '12px',
                        borderRadius: '8px',
                        border: '1px solid #DEDEDE',
                    }}>
                        <img src={carIcn} alt="car" />

                        <select style={{
                            border: 'none',
                            outline: 'none',
                            fontSize: '16px',
                            color: '#454550',
                            alignSelf: 'stretch',
                            width: '100%',
                        }}>
                            <option value="">Car Number</option>
                        </select>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        padding: '12px 16px',
                        alignItems: 'flex-start',
                        gap: '12px',
                        borderRadius: '8px',
                        border: '1px solid #DEDEDE',
                    }}>
                        <img src={calenderIcn} alt="car" />

                        <input type="date" style={{
                            border: 'none',
                            outline: 'none',
                            fontSize: '16px',
                            color: '#454550',
                            width: '100%',
                        }} />
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        padding: '12px 16px',
                        alignItems: 'flex-start',
                        gap: '12px',
                        borderRadius: '8px',
                        border: '1px solid #DEDEDE',
                    }}>

                        <input type="time" style={{
                            border: 'none',
                            outline: 'none',
                            fontSize: '16px',
                            color: '#454550',
                            width: '100%',
                        }} />
                    </Box>

                    <Button sx={{
                        padding: '12px 36px',
                        borderRadius: '4px',
                        fontFamily: 'Inter, sans-serif',
                        textTransform: 'capitalize',
                        bgcolor: '#006AFF',
                        color: '#fff',
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '24px',

                        '&:hover': {
                            bgcolor: '#006AFF',
                        }
                    }}>
                        Check
                    </Button>
                </Stack>
            </Box> */}

            <Box
                sx={{
                    width: '90%',
                    padding: '32px 28px 24px 28px',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: '8px',
                    boxShadow: "0px 8px 24px 0px rgba(101, 101, 117, 0.05)",
                }}
            >
                <Box
                    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}
                >
                    <Typography
                        sx={{
                            color: "#1A1919",
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '16px',
                            fontWeight: 600,
                            lineHeight: '24px',
                        }}
                    >Available Cars</Typography>

                    <Button
                        startIcon={<img src={filterIcn} alt="filter" />}
                        sx={{
                            textTransform: 'capitalize',
                            color: "#525256",
                            fontSize: "16px",
                            fontWeight: 500,
                            lineHeight: "24px",
                        }}
                    >
                        Filter
                    </Button>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        // width: '744px',
                        pb: '12px',
                        alignItems: 'center',
                        gap: '120px',
                        borderBottom: '1px solid rgba(163, 163, 163, 0.25)'
                    }}
                >
                    <Typography
                        sx={{
                            color: '#656575',
                            textAlign: 'center',
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '14px',
                            fontWeight: 300,
                            lineHeight: '16px',
                        }}
                    >
                        No.
                    </Typography>

                    <Typography
                        sx={{
                            color: '#656575',
                            textAlign: 'center',
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '14px',
                            fontWeight: 300,
                            lineHeight: '16px',
                        }}
                    >
                        Car no.
                    </Typography>

                    <Typography
                        sx={{
                            color: '#656575',
                            textAlign: 'center',
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '14px',
                            fontWeight: 300,
                            lineHeight: '16px',
                            ml: "78px"
                        }}
                    >
                        Model
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                    }}
                >

                    {data.filter((item) => item.availability === true).map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '120px',
                                p: '12px 0px',
                                borderBottom: '1px solid rgba(163, 163, 163, 0.25)'
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#1A1919',
                                    textAlign: 'center',
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '12px',
                                    fontWeight: 400,
                                    lineHeight: '16px',
                                    pl: '5px',
                                }}
                            >
                                {index + 1}
                            </Typography>

                            <Typography
                                sx={{
                                    color: '#1A1919',
                                    textAlign: 'center',
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    lineHeight: '16px',
                                    padding: '4px 12px',
                                    borderRadius: '4px',
                                    bgcolor: "rgba(153, 153, 153, 0.10)"
                                }}
                            >
                                {item.licensePlate}
                            </Typography>

                            <Typography
                                sx={{
                                    color: '#656575',
                                    textAlign: 'center',
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '16px',
                                    fontWeight: 300,
                                    lineHeight: 'NORMAL',
                                    ml: "70px"
                                }}
                            >
                                {`${item.make} ${item.model}`}
                            </Typography>
                        </Box>
                    ))
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default CarAVailable
