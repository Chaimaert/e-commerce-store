import React from 'react';
import { Grid, Button, Box, TextField } from '@mui/material';
import AdressCard from '../AdressCard/AdressCard';

const DeliveryAddressForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        const address = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            streetAddress: data.get('address'),
            city: data.get('city'),
            zipCode: data.get('zip'),
            mobile: data.get('phoneNumber'),
        };

        console.log('address', address);
    };

    return (
        <div className='mb-4'>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={5} className="border rounded-md shadow-md h-[30.5rem] overflow-y-scroll">
                    <div className="p-5 py-7 border-b cursor-pointer">
                        <AdressCard />
                        <Button sx={{ mt: 2, bgcolor: "#ff66cc" }} size="large" variant="contained">
                            Deliver Here
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12} lg={7}>
                    <Box className="border rounded-md shadow-md p-5">
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="First Name"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="lastName"
                                        name="lastName"
                                        label="Last Name"
                                        fullWidth
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        required
                                        id="address"
                                        name="address"
                                        label="Address"
                                        fullWidth
                                        autoComplete="street-address"
                                        multiline
                                        rows={6}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="city"
                                        name="city"
                                        label="City"
                                        fullWidth
                                        autoComplete="address-level2"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="zip"
                                        name="zip"
                                        label="Zip/Postal code"
                                        fullWidth
                                        autoComplete="postal-code"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="state"
                                        name="state"
                                        label="State/Province/Region"
                                        fullWidth
                                        autoComplete="address-level1"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        label="Phone number"
                                        fullWidth
                                        autoComplete="tel"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={10}>
                                    <Button
                                        sx={{ py: 1.5, mt: 2, bgcolor: "#ff66cc" }}
                                        size="large"
                                        variant="contained"
                                        type="submit"
                                    >
                                        Deliver Here
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default DeliveryAddressForm;
