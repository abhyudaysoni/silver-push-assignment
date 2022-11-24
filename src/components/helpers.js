import randomString from "randomstring";

export const generateUrl = () => {
  return randomString.generate({
    length: 11,
    charset: "alphanumeric",
  });
};
