import { Box, Button, Stack, Typography } from '@mui/material'

const AddVehicle = () => {
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
                component={'form'}
                sx={{
                    px: '28px',
                    py: '32px',
                    borderRadius: '8px',
                    bgcolor: '#fff',
                    width: 'fit-content',
                    boxShadow: "0px 8px 24px 0px rgba(69, 69, 80, 0.10)"
                }}>
                <Typography sx={{
                    color: "#1A1919",
                    fontFamily: 'Inter',
                    fontSize: '16px',
                    fontWeight: 600,
                    lineHeight: '24px',
                }}>
                    Add Vehicle
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '50px',
                        mt: '16px',
                    }}
                >
                    <Stack gap={'20px'}>

                        {['Make', 'Model', 'Year', 'Plate Number', 'VIN',].map((label, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    width: '320px',
                                    padding: '20px 16px',
                                    alignItems: 'center',
                                    flexShrink: 0,
                                    borderRadius: '12px',
                                    backgroundColor: '#F1F1F1',

                                }}>
                                <input type={label === 'Year' ? 'number' : 'text'}
                                    required
                                    placeholder={label}
                                    // value={nationalID}
                                    // onChange={(e) => setNationalID(e.target.value)}
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
                        ))}



                    </Stack>

                    <Button
                        sx={{
                            width: 'fit-content',
                            height: 'fit-content',
                            padding: '10px 24px',
                            borderRadius: '8px',
                            backgroundColor: '#006AFF',
                            color: '#fff',
                            fontSize: '14px',
                            fontWeight: 600,
                            lineHeight: '21px',
                            mt: 'auto',
                            textTransform: 'capitalize',
                            '&:hover': {
                                backgroundColor: '#006AFF',
                            }
                        }}
                    >
                        Add Vehicle
                    </Button>

                </Box>

            </Box>
        </Box>
    )
}

export default AddVehicle
