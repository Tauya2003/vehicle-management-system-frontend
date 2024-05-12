import { Box, Button, Stack, Typography } from '@mui/material'
import SearchBar from '../components/SearchBar'
import filterIcn from "../images/filter.svg"
import green from "../images/green.svg"
import red from "../images/red.svg"

const ParkingStatus = () => {
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
            }}>

            <SearchBar />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: '#fff',
                    padding: '32px 28px 40px 28px',
                    boxShadow: '0px 8px 24px 0px rgba(69, 69, 80, 0.10)',
                }}>

                <Stack direction={'row'}
                    alignItems={"center"}
                    width={"100%"}
                    justifyContent={"space-between"}
                >
                    <Typography
                        sx={{
                            color: "#1A1919",
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '16px',
                            fontWeight: 600,
                            lineHeight: '24px',
                        }}
                    >
                        Park Information
                    </Typography>

                    <Button
                        startIcon={
                            <img src={filterIcn} alt="filter" />
                        }
                        sx={{
                            color: '#525256',
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '16px',
                            fontWeight: 500,
                            lineHeight: '24px',
                            textTransform: 'capitalize',
                        }}>
                        Filter
                    </Button>
                </Stack>

                <Box
                    sx={{
                        display: 'flex',
                        py: '12px',
                        alignItems: 'center',
                        gap: '90px',
                        borderBottom: '1px solid rgba(163, 163, 163, 0.25)'
                    }}
                >
                    {['No.', 'Car no.', 'Model', 'Park Status'].map((item, index) => (
                        <Typography
                            key={index}
                            sx={{
                                width: '150px',
                                color: '#656575',
                                textAlign: 'start',
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '12px',
                                fontWeight: 300,
                                lineHeight: '16px',
                            }}
                        >
                            {item}
                        </Typography>
                    ))}
                </Box>


                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                    }}
                >
                    {[1, 2, 3, 4, 5,].map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
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
                                    pr: '220px'
                                }}
                            >
                                {index + 1}
                            </Typography>

                            <Typography
                                sx={{
                                    color: '#1A1919',
                                    textAlign: 'center',
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '12px',
                                    fontWeight: 400,
                                    lineHeight: '14px',
                                    padding: '4px 12px',
                                    borderRadius: '4px',
                                    bgcolor: "rgba(153, 153, 153, 0.10)",
                                    mr: '180px'
                                }}
                            >
                                123456
                            </Typography>

                            <Typography
                                sx={{
                                    color: '#656575',
                                    textAlign: 'center',
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '12px',
                                    fontWeight: 300,
                                    lineHeight: 'NORMAL',
                                    mr: '160px'
                                }}
                            >
                                Toyota Corolla
                            </Typography>

                            <Typography
                                sx={{
                                    color: '#656575',
                                    textAlign: 'center',
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '12px',
                                    fontWeight: 300,
                                    lineHeight: 'NORMAL',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px',

                                }}
                            >
                                <img src={green} alt="green" />
                                Parked
                            </Typography>

                        </Box>
                    ))}
                </Box>
            </Box>

        </Box>
    )
}

export default ParkingStatus