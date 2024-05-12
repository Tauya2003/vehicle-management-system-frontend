import { Box } from "@mui/material"
import Sidebar from "../components/Sidebar"
import { Route, Routes } from "react-router-dom"
import CarAVailable from "./CarAVailable"
import Dashboard from "./Dashboard"
import BookCar from "./BookCar"
import ServiceStatus from "./ServiceStatus"
import ParkingStatus from "./ParkingStatus"
import FuelStatus from "./FuelStatus"

const Home = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '100vh',
        }}>
            <Sidebar />

            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/car-available" element={<CarAVailable />} />
                <Route path="/book-car" element={<BookCar />} />
                <Route path="/service-status" element={<ServiceStatus />} />
                <Route path="/parking-status" element={<ParkingStatus />} />
                <Route path="/fuel-status" element={<FuelStatus />} />
            </Routes>
        </Box>
    )
}

export default Home
