import './App.css';
import NavigationBar from './components/NavigationBar.tsx'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Outlet } from 'react-router-dom';


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <NavigationBar/>
        <div className="container">
          <Outlet />
        </div>
      </div>
    </ApolloProvider>
  );
}
/* includes login/sign up, as well as a logout button if the user is logged in */
// {Auth.loggedIn() ? (
//   <>
//     <Link className="btn btn-lg btn-info m-2" to="/me">
//       {/* Retrieving the logged-in user's profile to display the username */}
//       {Auth.getProfile().data.username}'s profile
//     </Link>
//     <button className="btn btn-lg btn-light m-2" onClick={Auth.logout}>
//       Logout
//     </button>
//   </>
// ) : (
//   <>
//     <Link className="btn btn-lg btn-info m-2" to="/login">
//       Login
//     </Link>
//     <Link className="btn btn-lg btn-light m-2" to="/signup">
//       Signup
//     </Link>
//   </>
// )}

export default App;
