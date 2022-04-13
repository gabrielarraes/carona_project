export const EMAIL_REGEX = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
export const CPF_REGEX = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
export const ValidRegisterPageInput = "block border border-purple-700 focus:border-purple-500 focus:ring-purple-700 w-full p-3 rounded mb-2.5";