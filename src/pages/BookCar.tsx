import { Alert, Box, Button, Snackbar, Stack, Typography } from '@mui/material'
import carIcn from "../images/bx-car.svg"
import { useVehicleQuery, useUpdateVehicle, Vehicle } from '../store'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BookCar = () => {
    const navigate = useNavigate()

    const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null)

    const [nationalID, setNationalID] = useState<string>("")
    const [driverLicense, setDriverLicense] = useState<string>("")
    const [employeeNumber, setEmployeeNumber] = useState<string>("")
    const [success, setSuccess] = useState<boolean>(false)
    const [failure, setFailure] = useState<boolean>(false)

    const { data } = useVehicleQuery()
    const [updateVehicle, { isLoading, error }] = useUpdateVehicle();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Handle case where no vehicle is selected


        const updatedVehicleData = {
            ...selectedVehicle,
            availability: false,
            driverNationalID: nationalID,
            driverLicense: driverLicense,
            employeeNumber: employeeNumber,
            serviceStatus: "In Service",
        };

        // console.log(updatedVehicleData)
        // updateVehicle(updatedVehicleData);
        try {
            const updatedVehicle = await updateVehicle(updatedVehicleData);
            setSuccess(true);

            // Handle successful update response
        } catch (error) {

            setFailure(true);
            // Handle update error
        }

        // Reset form fields
        setNationalID("");
        setDriverLicense("");
        setEmployeeNumber("");
        setSelectedVehicle(null);
    };

    error && console.error(error)

    return (
        <Box
            component={'form'}
            onSubmit={handleSubmit}
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
                            <option value="">{" "}</option>
                            {data?.filter((car) => car.availability).map((car, index) => (
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
                                placeholder='National ID'
                                value={nationalID}
                                onChange={(e) => setNationalID(e.target.value)}
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
                                value={driverLicense}
                                onChange={(e) => setDriverLicense(e.target.value)}
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
                                value={employeeNumber}
                                onChange={(e) => setEmployeeNumber(e.target.value)}
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
                            disabled={isLoading || !selectedVehicle || !nationalID || !driverLicense || !employeeNumber}
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
                                },

                                '&:disabled': {
                                    bgcolor: '#B0B0B0',
                                }


                            }}
                        >Book</Button>

                        <Snackbar
                            open={success}
                            autoHideDuration={6000}
                            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                            onClose={() => setSuccess(false)}
                        >
                            <Alert severity="success">Vehicle booked successfully!</Alert>
                        </Snackbar>

                        <Snackbar
                            open={failure}
                            autoHideDuration={6000}
                            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                            onClose={() => setFailure(false)}
                        >
                            <Alert severity="error">Error booking vehicle!</Alert>
                        </Snackbar>

                    </Stack>
                </Box>
            </Box>
            {/* Driver Details End */}


            <Button
                onClick={() => navigate('/return-vehicle')}
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

                    '&:hover': {
                        bgcolor: '#006AFF',
                    },
                }}
            >Return Vehicle</Button>


        </Box>
    )
}

export default BookCar
