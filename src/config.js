const BASE_URL = 'http://3.36.97.236:8000';

export const END_POINT = {
  signIn: `${BASE_URL}/users/signin`,
  signUp: `${BASE_URL}/users/user`,
  myPage: `${BASE_URL}/users/user`,
  productDetail: `${BASE_URL}/products`,
  productList: `${BASE_URL}/products`,
  search: `${BASE_URL}/products`,
  wishList: `${BASE_URL}/carts`,
  payment: `${BASE_URL}/orders`,
};

export default END_POINT;
