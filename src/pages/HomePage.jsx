import Home from 'components/Home';
import MainTitle from 'components/MainTitle';
import Preview from 'components/Preview';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Home />
      <MainTitle />
      {!isLoggedIn ? (
        <Preview />
      ) : (
        <p>We appreciate that you have chosen our application💜</p>
      )}
    </>
  );
}

export default HomePage;
