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
