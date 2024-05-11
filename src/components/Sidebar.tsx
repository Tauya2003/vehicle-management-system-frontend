import { Box, Button, Stack, Typography } from "@mui/material"
import logo from '../../public/logo.svg'
import dashboardIcn from "../images/menu-dashboard.svg"
import bookIcn from "../images/menu-book.svg"
import bellIcn from "../images/menu-bell.svg"
import carIcn from "../images/menu-car.svg"
import logoutIcn from "../images/logout.svg"
import { useState } from "react"

const buttons = [
    { "icon": dashboardIcn, "text": "Dashboard" },
    { "icon": carIcn, "text": "Car Available" },
    { "icon": bookIcn, "text": "Book Car" },
    { "icon": bellIcn, "text": "Service Status" },
    { "icon": bellIcn, "text": "Parking Status" },
    { "icon": bellIcn, "text": "Fuel Status" },
]

const Sidebar = () => {
    const [selected, setSelected] = useState("Dashboard")

    return (
        <Box
            sx={{
                display: "flex",
                height: '100vh',
                width: 'fit-content',
                padding: '24px',
                flexDirection: 'column',
                alignItems: 'flex-start',
                flexShrink: 0,
                bgcolor: '#1A1919',
            }}
        >
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: '44px',
            }}>
                <img src={logo} alt="logo" />

                <Typography
                    sx={{
                        color: "#fff",
                        fontFamily: 'Inter, sans-sarif',
                        fontSize: '26px',
                        fontWeight: 700,
                        lineHeight: '30px',
                    }}
                >
                    CAR RENT
                </Typography>
            </Box>

            <Stack gap={"8px"} alignItems={'flex-start'}>
                {buttons.map((button, index) => (
                    <Button
                        onClick={() => setSelected(button.text)}
                        key={index}
                        startIcon={
                            <img src={button.icon} alt="icon" style={{ width: '24px' }} />
                        }
                        sx={{
                            color: '#fff',
                            fontFamily: 'Inter, sans-sarif',
                            fontSize: '16px',
                            fontWeight: 400,
                            lineHeight: '24px',
                            textTransform: 'none',
                            borderRadius: '0 8px 0 8px',
                            opacity: button.text === selected ? 1 : 0.75,
                            padding: '12px 16px',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            bgcolor: button.text === selected ? "#006AFF" : '',
                            borderLeft: button.text === selected ? '4px solid #FFf' : '4px solid transparent',
                            transition: "ease 0.3s",

                            "&:hover": {
                                bgcolor: '#006AFF',
                                opacity: 1,
                            }
                        }}
                    >
                        {button.text}
                    </Button>
                ))}
            </Stack>

            <Button
                startIcon={
                    <img src={logoutIcn} alt="icon" style={{ width: '20px' }} />
                }
                sx={{
                    color: '#FFF',
                    fontFamily: 'Inter, sans-sarif',
                    fontSize: '18px',
                    fontWeight: 500,
                    lineHeight: '24px',
                    textTransform: 'none',
                    mt: 'auto',
                    alignSelf: 'stretch',
                    padding: '12px 46px',
                    borderRadius: '8px',
                    bgcolor: 'rgba(255, 255, 255, 0.20)',

                    "&:hover": {
                        bgcolor: 'rgba(255, 255, 255, 0.15)',
                    }
                }}
            >
                Logout
            </Button>

        </Box >
    )
}

export default Sidebar
