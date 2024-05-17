import { Box, IconButton } from '@mui/material'
import searchIcn from "../images/search.svg"

import { useDispatch, useSelector } from 'react-redux'
import { selectSearch, setSearch } from '../store'
import { useEffect } from 'react'

const SearchBar = () => {
    const search = useSelector(selectSearch)
    const dispatch = useDispatch()

    // create a function that check whether the url has changed or not
    // if it has changed, then set the search value to empty string
    // This will be used to clear the search bar when the url changes
    useEffect(() => {
        return () => {
            dispatch(setSearch(""))
        }
    }, [dispatch])

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
            <input
                type="text"
                value={search}
                onChange={(e) => dispatch(setSearch(e.target.value))}
                style={{
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
