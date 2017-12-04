// @flow

export function validateEmail(email: string): boolean {
  const re = /^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i;
  return re.test(email);
}

export function validateUsername(value: string): boolean {
  return /^[A-Za-z0-9_.-]+$/.test(value);
}
