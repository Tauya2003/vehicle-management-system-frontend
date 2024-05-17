import { Box, Button, Typography } from "@mui/material"
import { useVehicleQuery } from "../store"
import green from "../images/green.svg"
import red from "../images/red.svg"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
    const navigate = useNavigate()

    const { data } = useVehicleQuery()

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
            {/* Add new Vehicle Button Start */}
            <Button
                onClick={() => navigate('/add-vehicle')}
                sx={{
                    display: 'inline-flex',
                    padding: "12px 24px",
                    borderRadius: "8px",
                    bgcolor: "#4B7BFF",
                    color: "#fff",
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 600,
                    lineHeight: '24px',
                    boxShadow: "0px 8px 24px 0px rgba(69, 69, 80, 0.10)",
                    "&:hover": {
                        bgcolor: "#4B7BFF",
                    }
                }}
            >
                Add New Vehicle
            </Button>
            {/* Add new Vehicle Button End */}

            {/* Fleet Summary Start */}
            <Box sx={{
                display: 'inline-flex',
                padding: "32px 28px 40px 28px",
                flexDirection: "column",
                gap: "16px",
                borderRadius: "8px",
                bgcolor: "#fff",
                boxShadow: "0px 8px 24px 0px rgba(69, 69, 80, 0.10)",
            }}>
                <Typography
                    sx={{
                        color: "#1A1919",
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '18px',
                        fontWeight: 600,
                        lineHeight: '24px',
                    }}
                >
                    Fleet Summary
                </Typography>

                <Box sx={{
                    display: 'inline-flex',
                    gap: "16px",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <Typography
                        sx={{
                            color: "#1A1919",
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '16px',
                            fontWeight: 500,
                            lineHeight: '24px',
                        }}
                    >
                        Total Vehicles
                    </Typography>

                    <Typography
                        sx={{
                            color: "#1A1919",
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '16px',
                            fontWeight: 600,
                            lineHeight: '24px',
                            mr: "200px",
                        }}
                    >
                        {data?.length}
                    </Typography>
                </Box>

                <Box sx={{
                    display: 'inline-flex',
                    gap: "16px",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <Typography
                        onClick={() => navigate('/car-available')}
                        sx={{
                            color: "#1A1919",
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '16px',
                            fontWeight: 500,
                            lineHeight: '24px',
                            cursor: "pointer",
                        }}
                    >
                        Available Vehicles
                    </Typography>

                    <Typography
                        sx={{
                            color: "#1A1919",
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '16px',
                            fontWeight: 600,
                            lineHeight: '24px',
                            mr: "200px",
                        }}
                    >
                        {data?.filter(vehicle => vehicle.availability).length}
                    </Typography>
                </Box>

                <Box sx={{
                    display: 'inline-flex',
                    gap: "16px",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <Typography
                        sx={{
                            color: "#1A1919",
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '16px',
                            fontWeight: 500,
                            lineHeight: '24px',
                        }}
                    >
                        Unavailable Vehicles
                    </Typography>

                    <Typography
                        sx={{
                            color: "#1A1919",
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '16px',
                            fontWeight: 600,
                            lineHeight: '24px',
                            mr: "200px",
                        }}
                    >
                        {data?.filter(vehicle => !vehicle.availability).length}
                    </Typography>
                </Box>
            </Box>
            {/* Fleet Summary End */}

            {/* Fleet Summary Start */}
            <Box sx={{
                display: 'inline-flex',
                padding: "32px 28px 40px 28px",
                flexDirection: "column",
                gap: "16px",
                borderRadius: "8px",
                bgcolor: "#fff",
                boxShadow: "0px 8px 24px 0px rgba(69, 69, 80, 0.10)",
            }}>
                <Typography
                    sx={{
                        color: "#1A1919",
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '18px',
                        fontWeight: 600,
                        lineHeight: '24px',
                    }}
                >
                    Vehicle Status
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        py: '12px',
                        alignItems: 'center',
                        gap: '90px',
                        borderBottom: '1px solid rgba(163, 163, 163, 0.25)'
                    }}
                >
                    {['No.', 'Make & Model', 'License Plate', 'Availability'].map((item, index) => (
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
                    {data?.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
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
                                {item?.licensePlate}
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
                                {`${item?.make} ${item?.model}`}
                            </Typography>


                            <img src={item?.parked ? green : red} alt="green" />

                        </Box>
                    ))}
                </Box>





            </Box>
            {/* Fleet Summary End */}


        </Box>
    )
}

export default Dashboard
