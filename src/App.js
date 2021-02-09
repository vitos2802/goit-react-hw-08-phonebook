import { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from './components/Container';
import AppBar from './components/AppBar';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

import authOperations from './redux/auth/auth-operations';
import authSelectors from './redux/auth/auth-selectors';

const LoginView = lazy(() => import('./views/LoginView/LoginView'));
const RegisterView = lazy(() => import('./views/RegisterView/RegisterView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

const styles = {
  title: {
    textAlign: 'center',
  },
};

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {!isFetchingCurrentUser && <AppBar />}
      {!isFetchingCurrentUser && (
        <Switch>
          <Suspense fallback={<h2>Loading...</h2>}>
            <PublicRoute exact path="/" redirectTo="/contacts" restricted>
              <h1 style={styles.title}>Welcom!</h1>
            </PublicRoute>
            <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
              <LoginView />
            </PublicRoute>

            <PublicRoute
              exact
              path="/register"
              redirectTo="/contacts"
              restricted
            >
              <RegisterView />
            </PublicRoute>

            <PrivateRoute path="/contacts">
              <ContactsView />
            </PrivateRoute>
          </Suspense>
        </Switch>
      )}
    </Container>
  );
};

export default App;

// import ContactForm from './components/ContactForm';
// import ContactList from './components/ContactList';
// import Filter from './components/Filter';
// import Container from './components/Container';

// const App = () => {
//   return (
//     <Container>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       <Filter />
//       <ContactList />
//     </Container>
//   );
// };

// export default App;
