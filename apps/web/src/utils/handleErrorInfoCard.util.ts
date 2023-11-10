import { CartEmpty, CartFailed, CartSuccessfull } from 'public/images';

export const handleStatus = (status: string) => {
  if (status === 'empty') {
    return {
      data: {
        image: CartEmpty,
        title: " Oops, there's nothing here yet!",
        subtitle:
            "You haven't made any purchases yet. Go to the marketplace and make purchases.",
        button: {
          url: '/shop',
          title: 'Back to marketplace',
        },
      },
    };
  } if (status === 'failed') {
    return {
      data: {
        image: CartFailed,
        title: 'Payment Failed',
        subtitle: 'Sorry, your payment failed. Would you like to try again?',
        button: {
          url: '/shop/cart',
          title: 'Back to Cart',
        },
      },
    };
  } if (status === 'successfull') {
    return {
      data: {
        image: CartSuccessfull,
        title: 'Payment Successfull',
        subtitle: 'Hooray, you have completed your payment!',
        button: {
          url: '/shop/cart',
          title: 'Back to Cart',
        },
      },
    };
  }
};
