import {
  containsSpecialChar,
  containsDigit,
  containsUpperCase,
} from './validate.ts';

type Props = {
  password: string;
};

export function ErrorMessage({ password }: Props) {
  const short = 'Your password is too short.';
  const required = 'A password is required.';
  const digit = 'Your password must contain a digit.';
  const upper = 'Your password must contain an uppercase letter.';
  const special = 'Your password must contain a special character.';
  return (
    <>
      {password.length < 8 && password.length > 0 && <p>{short}</p>}
      {password.length < 1 && <p>{required}</p>}
      {!containsDigit(password) && <p>{digit}</p>}
      {!containsUpperCase(password) && <p>{upper}</p>}
      {!containsSpecialChar(password) && <p>{special}</p>}
    </>
  );
}
