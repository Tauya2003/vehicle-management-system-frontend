import { Box, IconButton } from '@mui/material'
import searchIcn from "../images/search.svg"

const SearchBar = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: '12px 24px 12px 32px',
                alignItems: "center",
                borderRadius: "12px",
                bgcolor: "#Fff",
                boxShadow: "0px 2.703px 27.031px 0px rgba(69, 69, 80, 0.10)",
                width: "366px",
                gap: "10px",
            }}>
            <input type="text" style={{
                border: "none",
                outline: "none",
                width: "100%",
                fontSize: "16px",
                color: "#454550",
            }} placeholder="Search here" />

            <IconButton sx={{ p: 0, m: 0 }}>
                <img src={searchIcn} alt="search" />
            </IconButton>
        </Box>
    )
}

export default SearchBar
