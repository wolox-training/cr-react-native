interface Props {
  email: string;
  password?: string;
}

export const login = ({ email }: Props) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        ok: true,
        data: {
          headers: { uid: email, token: 'AE12OI45PK56LK', client: 'secret_variable' },
          currentUser: email
        },
        problem: ''
      });
    }, 5000);
  });
