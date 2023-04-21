import { useState } from 'react';

import { initMercadoPago } from '@mercadopago/sdk-react';

import { SpinnerCircular } from 'spinners-react';

import { Payment } from '../components/Payment';

import { Checkout } from '../components/Checkout';

import { InternalProvider } from '../components/ContextProvider';

initMercadoPago('APP_USR-fd5b1a5b-bbcd-4bb4-891e-cee395c7fa36');

export const Subscribe = () => {
  const [preferenceId, setPreferenceId] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const [orderData, setOrderData] = useState({
    quantity: '1',
    price: '10',
    amount: 10,
    description: 'Some book',
  });

  const handleClick = () => {
    setIsLoading(true);
    fetch('http://localhost:3001/mercadopago/create_preference', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => {
        return response.json();
      })
      .then((preference) => {
        setPreferenceId(preference.id);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const renderSpinner = () => {
    if (isLoading) {
      return (
        <div className="spinner-wrapper">
          <SpinnerCircular сolor="#009EE3" />
        </div>
      );
    }
  };

  return (
    <>
      <InternalProvider
        context={{ preferenceId, isLoading, orderData, setOrderData }}
      >
        <main>
          {renderSpinner()}
          <Checkout onClick={handleClick} description />
          <Payment />
        </main>
      </InternalProvider>
    </>
  );
};
