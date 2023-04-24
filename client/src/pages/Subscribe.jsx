import React, { useState, useEffect } from 'react';
import { initMercadoPago } from '@mercadopago/sdk-react';
import classnames from 'classnames';
import { Wallet } from '@mercadopago/sdk-react';
import { SpinnerCircular } from 'spinners-react';

initMercadoPago('APP_USR-8c230a5f-f7e1-4a20-9da4-1d3d45c1c226');

export const Subscribe = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [orderData, setOrderData] = useState({
    quantity: '1',
    price: '10',
    amount: 10,
    description: 'Blue',
  });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    handleClick();
  }, []);

  const handleOnReady = () => {
    setIsReady(true);
  };

  const handleClick = () => {
    setIsLoading(true);
    fetch('https://vizta-0hmx.onrender.com/mercadopago/create_preference', {
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

  const paymentClass = classnames('payment-form dark', {
    'payment-form--hidden': !isReady,
  });

  const renderCheckoutButton = (preferenceId) => {
    if (!preferenceId) return null;

    return (
      <Wallet
        initialization={{ preferenceId: preferenceId }}
        onReady={handleOnReady}
      />
    );
  };

  const renderSpinner = () => {
    if (isLoading) {
      return <SpinnerCircular />;
    }
  };

  return (
    <div className="h-full flex flex-col justify-center items-center">
      {renderSpinner()}
      <div className="checkout">
        <div className="container_checkout">
          <div className="block-heading">
            <h2>Blue</h2>
            <p>Featured Announcements</p>
          </div>
          <div className="form-checkout">
            <div className="flex">
              <label>Price:</label>
              <p>{orderData.price}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={paymentClass}>
        <div className="container_payment">
          {renderCheckoutButton(preferenceId)}
        </div>
      </div>
    </div>
  );
};
