import { Profile } from 'components/Profile/Profile';
import { Container } from './App.styled';
import user from '../../user.json';

export const App = () => {
  return (
    <Container>
      <Profile user={user} />
    </Container>
  );
};
