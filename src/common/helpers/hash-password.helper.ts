import * as bcrypt from 'bcrypt';

export function hashPasswordToSave(pass: string) {
  return Promise.resolve(bcrypt.hashSync(pass, 10));
}
