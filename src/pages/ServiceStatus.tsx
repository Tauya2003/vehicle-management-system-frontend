import { Box, Button, Stack, Typography } from '@mui/material'
import SearchBar from '../components/SearchBar'
import filterIcn from "../images/filter.svg"
import green from "../images/green.svg"
import red from "../images/red.svg"
import { selectVehicle, useVehicleQuery } from '../store'
import { useSelector } from 'react-redux'

const ServiceStatus = () => {
    const { data } = useVehicleQuery();
    const vehicles = useSelector(selectVehicle)

    if (!data) return <div>Loading...</div>

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
                        Service Information
                    </Typography>


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
                    {['No.', 'Car no.', 'Model', 'Service Status'].map((item, index) => (
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
                    {vehicles.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                // gap: '140px',
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
                                    fontSize: '12px',
                                    fontWeight: 400,
                                    lineHeight: '14px',
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
                                    fontSize: '12px',
                                    fontWeight: 300,
                                    lineHeight: 'NORMAL',
                                }}
                            >
                                {`${item.make} ${item.model}`}
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
                                    mr: '50px',
                                }}
                            >
                                {item?.serviceStatus}
                            </Typography>

                        </Box>
                    ))}
                </Box>
            </Box>

        </Box>
    )
}

export default ServiceStatus
