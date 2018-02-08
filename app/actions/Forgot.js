// @flow

export function validateResetToken(UserId: string, token: string) {
  return {
    type: 'VALIDATE_RESET_TOKEN',
    token,
    UserId,
  };
}

export function validResetToken() {
  return { type: 'VALID_RESET_TOKEN' };
}

export function invalidResetToken() {
  return { type: 'INVALID_RESET_TOKEN' };
}

export function resetPassword(UserId: string, token: string, password: string) {
  return {
    type: 'RESET_PASSWORD',
    UserId,
    token,
    password,
  };
}
