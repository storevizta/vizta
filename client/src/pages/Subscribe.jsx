import React, { useState, useEffect } from 'react';

import { initMercadoPago } from '@mercadopago/sdk-react';

import classnames from 'classnames';

import { Wallet } from '@mercadopago/sdk-react';

import { SpinnerCircular } from 'spinners-react';

import { useAuth0 } from '@auth0/auth0-react';

initMercadoPago('APP_USR-8c230a5f-f7e1-4a20-9da4-1d3d45c1c226');

export const Subscribe = () => {
  const { user, isLoading: loadingAuth } = useAuth0();

  if (loadingAuth) return 'Loading';

  const [preferenceId, setPreferenceId] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const [orderData, setOrderData] = useState({
    quantity: '1',
    price: '0.5',
    amount: 0.5,
    description: 'Blue',
    userId: user.sub,
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
      <div>
        <div>
          <div>
            <h2>Verification </h2>
            <p>Featured Ads</p>
            <p>
              Get the visibility your ads deserve with our verified featured
              ads! When you sign up for our verification subscription, your ads
              will not only be verified for authenticity and quality, but
              they'll also be featured prominently on our site. That means more
              eyes on your ads, more clicks, and more success for your business.
              Our featured ads are carefully selected to ensure maximum
              exposure, so you can be confident that your ad is getting the
              attention it deserves. Don't miss out on this exclusive
              opportunity - get verified and get featured today!
            </p>
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
