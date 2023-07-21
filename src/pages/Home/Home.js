import { Developer } from 'components';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 700,
    fontSize: 48,
    textAlign: 'center',
    color: '#ffff',
    textShadow: '2px 2px 4px #000000'
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Phonebook welcome page 💁‍♀️</h1>
      <Developer />
    </div>
  );
}