import { Box, Button, Stack, Typography } from '@mui/material'
import SearchBar from '../components/SearchBar'
import carIcn from "../images/bx-car.svg"

const BookCar = () => {
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
                    Select Car
                </Typography>

                <Stack direction={'row'} gap={"377px"}>
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
                        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",

                        '&:hover': {
                            bgcolor: '#006AFF',
                        }
                    }}>
                        Select
                    </Button>
                </Stack>
            </Box>


            {/* Driver Details Start */}
            <Box
                sx={{
                    px: '28px',
                    py: '32px',
                    borderRadius: '8px',
                    bgcolor: '#fff',
                    width: 'fit-content',
                    boxShadow: "0px 8px 24px 0px rgba(69, 69, 80, 0.10)"
                }}
            >
                <Typography sx={{
                    color: "#1A1919",
                    fontFamily: 'Inter',
                    fontSize: '16px',
                    fontWeight: 600,
                    lineHeight: '24px',
                }}>
                    Driver Details
                </Typography>

                <Box
                    component={'form'}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '50px',
                        mt: '16px',
                    }}
                >
                    <Stack gap={'20px'}>
                        <Box
                            sx={{
                                display: 'flex',
                                width: '320px',
                                padding: '20px 16px',
                                alignItems: 'center',
                                flexShrink: 0,
                                borderRadius: '12px',
                                backgroundColor: '#F1F1F1',

                            }}>
                            <input type="text"
                                required
                                placeholder='Name'
                                style={{
                                    border: 'none',
                                    outline: 'none',
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: '14px',
                                    color: '#454550',
                                    width: '100%',
                                    backgroundColor: 'transparent',
                                }} />
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                width: '320px',
                                padding: '20px 16px',
                                alignItems: 'center',
                                flexShrink: 0,
                                borderRadius: '12px',
                                backgroundColor: '#F1F1F1',

                            }}>
                            <input type="text"
                                required
                                placeholder='Driver License Number'
                                style={{
                                    border: 'none',
                                    outline: 'none',
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: '14px',
                                    color: '#454550',
                                    width: '100%',
                                    backgroundColor: 'transparent',
                                }} />
                        </Box>
                    </Stack>

                    <Stack gap={'20px'}>
                        <Box
                            sx={{
                                display: 'flex',
                                width: '320px',
                                padding: '20px 16px',
                                alignItems: 'center',
                                flexShrink: 0,
                                borderRadius: '12px',
                                backgroundColor: '#F1F1F1',

                            }}>
                            <input type="text"
                                required
                                placeholder='Employee ID'
                                style={{
                                    border: 'none',
                                    outline: 'none',
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: '14px',
                                    color: '#454550',
                                    width: '100%',
                                    backgroundColor: 'transparent',
                                }} />
                        </Box>


                        <Button
                            type="submit"
                            sx={{
                                color: '#fff',
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '16px',
                                fontWeight: 400,
                                lineHeight: '24px',
                                textTransform: 'capitalize',
                                padding: '12px 36px',
                                borderRadius: '4px',
                                bgcolor: '#006AFF',
                                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                                width: 'fit-content',
                                alignSelf: 'flex-end',

                                '&:hover': {
                                    bgcolor: '#006AFF',
                                }
                            }}
                        >Book</Button>

                    </Stack>
                </Box>
            </Box>
            {/* Driver Details End */}
        </Box>
    )
}

export default BookCar
