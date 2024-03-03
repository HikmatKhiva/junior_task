import React from 'react'
import { Button, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from "../app/index.module.scss"
const SearchForm = ({ onClose, open, handleChange, value, clearValue }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            className={styles.modal}
        >
            <DialogTitle textAlign="center">Filter Search</DialogTitle>
            <Button className={styles.close} onClick={onClose} variant="outlined" color="error">
                <CloseIcon fontSize={"24px"} />
            </Button>
            <DialogContent>
                <form className={styles.filter_form}>
                    <TextField size='small' value={value.minPrice} onChange={handleChange} name='minPrice' id="minPrice" placeholder="MinPrice" type="number" />
                    <TextField size='small' value={value.maxPrice} onChange={handleChange} name='maxPrice' id="maxPrice" placeholder="MaxPrice" type="number" />
                    <TextField size='small' value={value.search} onChange={handleChange} name='search' id="search" placeholder="Search" type="text" />
                    <TextField size='small' value={value.city} onChange={handleChange} name='city' id="city" placeholder="City Name" type="text" />
                    <TextField size='small' value={value.district} onChange={handleChange} name='district' id="district" placeholder="District" type="text" />
                    <Button size='small' variant="outlined" color="success">Filter</Button>
                    <Button variant='contained' color='warning' onClick={clearValue}>Reset Value</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default SearchForm