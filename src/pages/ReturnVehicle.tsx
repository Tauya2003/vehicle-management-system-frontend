import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useVehicleQuery, useUpdateVehicle, Vehicle } from '../store';
import { Alert, Snackbar, Stack, Typography } from '@mui/material';
import carIcn from "../images/bx-car.svg"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReturnVehicle = () => {
    const navigation = useNavigate()

    const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null)
    const [success, setSuccess] = useState<boolean>(false)
    const [failure, setFailure] = useState<boolean>(false)

    const { data } = useVehicleQuery()
    const [updateVehicle] = useUpdateVehicle();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
            }}
        >
            <Typography id="modal-modal-title" sx={{
                textAlign: 'center',
                color: '#fff',
                fontSize: '28px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                lineHeight: '42px',
            }}>
                Return Vehicle
            </Typography>

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
                <Stack direction={'row'} gap={'20px'}>
                    <Box sx={{
                        display: 'flex',
                        padding: '12px 16px',
                        alignItems: 'flex-start',
                        gap: '12px',
                        borderRadius: '8px',
                        border: '1px solid #DEDEDE',
                        height: 'fit-content',
                    }}>
                        <img src={carIcn} alt="car" />

                        <select
                            required
                            onChange={(e) => {
                                setSelectedVehicle(data?.find((car) => car.licensePlate === e.target.value) || null)
                            }}
                            style={{
                                border: 'none',
                                outline: 'none',
                                fontSize: '16px',
                                color: '#454550',
                                alignSelf: 'stretch',
                                width: '100%',
                            }}>
                            <option value="">{"Select Vehicle"}</option>
                            {data?.filter((car) => !car.availability).map((car, index) => (
                                <option key={index} value={car.licensePlate}>{car.licensePlate}</option>
                            ))}
                        </select>
                    </Box>

                    {selectedVehicle && (
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '8px',
                            padding: '16px',
                            borderRadius: '8px',
                            border: '1px solid #DEDEDE',
                        }}>
                            <Typography
                                sx={{
                                    color: "#1A1919",
                                    fontFamily: 'Inter',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    lineHeight: '24px',
                                }}
                            >
                                {selectedVehicle.licensePlate}
                            </Typography>
                            {" | "}
                            <Typography
                                sx={{
                                    color: "#1A1919",
                                    fontFamily: 'Inter',
                                    fontSize: '16px',
                                    fontWeight: 400,
                                    lineHeight: '24px',
                                }}
                            >
                                {selectedVehicle.make} {selectedVehicle.model} {" | "} {selectedVehicle.year}
                            </Typography>
                            <Typography
                                sx={{
                                    color: "#1A1919",
                                    fontFamily: 'Inter',
                                    fontSize: '16px',
                                    fontWeight: 400,
                                    lineHeight: '24px',
                                }}
                            ></Typography>
                        </Box>
                    )}


                </Stack>

            </Box>


            <Typography id="modal-modal-description" sx={{
                textAlign: 'center',
                color: '#fff',
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '24px',
                marginTop: '20px',
            }}>
                Are you sure you want to return the vehicle?
            </Typography>


            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
                <Button
                    onClick={() => {
                        setSelectedVehicle(null)
                        navigation('/book-car')
                    }}
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

                        '&:hover': {
                            bgcolor: '#006AFF',
                        },
                    }}
                >
                    Cancel
                </Button>

                <Button
                    disabled={!selectedVehicle}
                    onClick={() => {
                        if (!selectedVehicle || !selectedVehicle.licensePlate) {
                            return
                        }


                        const updatedVehicleData = {
                            ...selectedVehicle,
                            availability: true,
                            driverNationalID: "",
                            driverLicense: "",
                            employeeNumber: "",
                        };

                        try {
                            updateVehicle(updatedVehicleData);
                            setSuccess(true);
                        } catch (error) {

                            setFailure(true);
                        }

                    }}
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

                        '&:hover': {
                            bgcolor: '#006AFF',
                        },

                        '&:disabled': {
                            bgcolor: '#B0B0B0',
                        }
                    }}
                >Return</Button>
            </Box>



            <Snackbar
                open={success}
                autoHideDuration={3000}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                onClose={() => setSuccess(false)}
            >
                <Alert severity="success">
                    Vehicle successfully returned!
                </Alert>
            </Snackbar>

            <Snackbar
                open={failure}
                autoHideDuration={6000}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                onClose={() => setFailure(false)}
            >
                <Alert severity="error">
                    Failed to return vehicle!
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default ReturnVehicle