// @flow

export function validateResetToken(UserId, token) {
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

export function resetPassword(UserId, token, password) {
  return {
    type: 'RESET_PASSWORD',
    UserId,
    token,
    password,
  };
}
