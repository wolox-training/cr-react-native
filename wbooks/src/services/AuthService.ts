interface Props {
  email: string;
  password?: string;
}

export const login = ({ email }: Props) =>
  Promise.resolve({ ok: true, data: { id: 1, token: 'AE12OI45PK56LK', client: email }, problem: '' });
