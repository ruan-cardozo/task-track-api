import * as bcrypt from 'bcrypt';
import { hashPasswordToSave } from '../hash-password.helper';

describe('hashPasswordToSave', () => {
  it('should return a valid hash for a given password', async () => {
    const password = 'password123';
    const hashPromise = hashPasswordToSave(password);

    expect(hashPromise).toBeInstanceOf(Promise);

    const hash = await hashPromise;

    expect(typeof hash).toBe('string');

    expect(bcrypt.compareSync(password, hash)).toBe(true);
  });
});
