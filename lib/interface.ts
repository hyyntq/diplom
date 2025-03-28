export interface SubmitButtonProps {
  text: string,
  className: string
}
export interface prevStateRegister {
  username: null,
  password: null,
  email: null
}

export interface prevStateLogin {
  identifier: null,
  password: null
}


export interface RegisterProps {
  username: string;
  email: string;
  password: string;
}
export interface LoginProps {
  identifier: string,
  password: string;
}

export interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  category: string;
}

export interface ProductBannerProps {
  img: string,
  title: string,
  description: string,
  bgColor: string
}