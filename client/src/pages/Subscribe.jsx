import React, { useState } from 'react';
import { initMercadoPago } from '@mercadopago/sdk-react';
import classnames from 'classnames';
import { Wallet } from '@mercadopago/sdk-react';
import { SpinnerCircular } from 'spinners-react';

initMercadoPago('APP_USR-fd5b1a5b-bbcd-4bb4-891e-cee395c7fa36');

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

  const handleOnReady = () => {
    setIsReady(true);
  };

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
      return (
        <div className="spinner-wrapper">
          <SpinnerCircular />
        </div>
      );
    }
  };

  return (
    <div>
      {renderSpinner()}
      <div className="checkout">
        <div className="container_checkout">
          <div className="block-heading">
            <h2>Blue</h2>
            <p>Anuncios destacados</p>
          </div>
          <div className="form-checkout">
            <div className="form-group">
              <label>Price:</label>
              <p>{orderData.price}</p>
            </div>
            <button className="btn btn-primary" onClick={handleClick}>
              Generate Preference
            </button>
          </div>
        </div>
      </div>
      <div className={paymentClass}>
        <div className="container_payment">
          <div className="block-heading">
            <h2>Checkout Payment</h2>
          </div>
          {renderCheckoutButton(preferenceId)}
        </div>
      </div>
    </div>
  );
};
