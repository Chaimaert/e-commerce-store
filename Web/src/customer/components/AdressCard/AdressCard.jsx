import React from 'react';

const AddressCard = () => {
    return (
        <div className='space-y-3'>
          <h1 className='font-bold' style={{ color: '#cdb4db' }}>Delivery Address</h1>
            <p className='font-semibold'>
                Latifa Didi
            </p>
            <p>
                Av. Ismailia, Rue Roumania, Lot Lazrak Zohor 2, Fes
            </p>
            <div className='space-y-1'>
                <p className='font-semibold'>
                    Phone Number
                </p>
                <p>
                    0666655545
                </p>
            </div>
        </div>
    );
};

export default AddressCard;
