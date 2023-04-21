// import {
//   Elements,
//   CardElement,
//   useStripe,
//   useElements,
// } from '@stripe/react-stripe-js';

// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe(
//   'pk_test_51Mz3vkFEsYpaAGnX7QRBHSwXAtHFE33gKSZ6bpfcrjjRI54pWwKLaF4494D2FsSWd7OyShdkRxNwB0AsFtfFf5Qt00rPImwH3s'
// );

// const CheckoutForm = () => {
//   const stripe = useStripe();

//   const elements = useElements();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: elements.getElement(CardElement),
//     });

//     if (!error) {
//       console.log(paymentMethod);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="w-1/2 flex flex-col justify-center"
//     >
//       <CardElement className="p-5" />
//       <button>Subscribe</button>
//     </form>
//   );
// };

// export const Subscribe = () => {
//   return (
//     <>
//       <div className="h-full flex justify-center items-center">
//         <Elements stripe={stripePromise}>
//           <CheckoutForm />
//         </Elements>
//       </div>
//     </>
//   );
// };
// APP_USR-4871149183520475-042020-19ad63e6a5e3586b247ec9a7ca6903a3-182007561
// 4871149183520475
// wee2626OjgdMLhFi81FBd7n8DqeVoXNB

import mercadopago from 'mercadopago';

mercadopago.configure({
  access_token:
    'APP_USR-4871149183520475-042020-19ad63e6a5e3586b247ec9a7ca6903a3-182007561',
});

import { useState, useEffect } from 'react';

export const Subscribe = () => {
  const [checkout, setCheckout] = useState(null);

  useEffect(() => {
    mercadopago
      .checkout({
        preference: {
          items: [
            {
              title: 'Producto 1',
              unit_price: 100,
              quantity: 1,
            },
            {
              title: 'Producto 2',
              unit_price: 200,
              quantity: 1,
            },
          ],
          back_urls: {
            success: 'http://localhost:3000/success',
            pending: 'http://localhost:3000/pending',
            failure: 'http://localhost:3000/failure',
          },
          auto_return: 'approved',
        },
      })
      .then((response) => setCheckout(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {checkout && (
        <iframe
          title="Mercado Pago Checkout"
          src={checkout.init_point}
          width="100%"
          height="600"
          frameBorder="0"
        ></iframe>
      )}
    </div>
  );
};
