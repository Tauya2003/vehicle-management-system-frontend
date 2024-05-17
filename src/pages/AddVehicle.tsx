import { Alert, Box, Button, Snackbar, Stack, Typography } from '@mui/material'
import { useAddVehicle } from '../store'
import { useState } from 'react'

const AddVehicle = () => {
    const [addVehicle] = useAddVehicle()

    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
    const [year, setYear] = useState('')
    const [plateNumber, setPlateNumber] = useState('')
    const [vin, setVin] = useState('')

    const [success, setSuccess] = useState<boolean>(false)
    const [failure, setFailure] = useState<boolean>(false)
    const [errorMsg, setErrorMsg] = useState<string>('')


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const vehicle = {
            make,
            model,
            year: Number(year),
            licensePlate: plateNumber,
            vin,
            availability: true,
            parked: true,
            serviceStatus: "Serviced",
        }

        try {
            const response = await addVehicle(vehicle)
            if (response.error) {
                setErrorMsg(response?.error?.data?.message || "An error occurred!")
                setFailure(true)
                return
            }

            setSuccess(true)
            setMake('')
            setModel('')
            setYear('')
            setPlateNumber('')
            setVin('')
        } catch (error) {

            setErrorMsg("An error occurred!")
            setFailure(true)
        }
    }

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
                onSubmit={handleSubmit}
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
                                    value={
                                        label === 'Make' ? make :
                                            label === 'Model' ? model :
                                                label === 'Year' ? year :
                                                    label === 'Plate Number' ? plateNumber :
                                                        vin
                                    }
                                    onChange={(e) => {
                                        if (label === 'Make') setMake(e.target.value)
                                        if (label === 'Model') setModel(e.target.value)
                                        if (label === 'Year') setYear(e.target.value)
                                        if (label === 'Plate Number') setPlateNumber(e.target.value)
                                        if (label === 'VIN') setVin(e.target.value)
                                    }}
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
                        type='submit'
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


            <Snackbar
                open={success}
                autoHideDuration={6000}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                onClose={() => setSuccess(false)}
            >
                <Alert severity="success">
                    Vehicle added successfully!
                </Alert>
            </Snackbar>

            <Snackbar
                open={failure}
                autoHideDuration={6000}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                onClose={() => setFailure(false)}
            >
                <Alert severity="error">
                    {errorMsg}
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default AddVehicle
