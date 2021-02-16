import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [token, setToken] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    const authToken = localStorage.getItem('token');
    setToken(authToken);
  }, []);

  const logout = () => {
    setToken(null);
    navigate('/login');
  };

  return (
    <AppContext.Provider
      value={{
        token,
        logout
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppProvider;
