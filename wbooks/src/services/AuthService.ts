interface Props {
  email: string;
  password?: string;
}

export const login = ({ email }: Props) =>
  Promise.resolve({ ok: true, data: { id: 1, toke: 'AE12OI45PK56LK', client: email }, problem: '' });
