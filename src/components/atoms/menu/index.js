import React, { useEffect, useContext } from 'react';
import withStyles from 'react-jss';

import { Store } from 'store';
import { getMenuItems } from 'actions';

const style = ({ colors: { primary: primaryColor } }) => ({
  wrapper: {
    color: primaryColor
  }
});

const Menu = ({ classes }) => {
  const [state, dispatch] = useContext(Store).menu;

  // componentDidMount
  useEffect(() => {
    getMenuItems(dispatch);
  }, []);

  const handleFetch = async () => {
    await getMenuItems(dispatch);
  };

  const { loading, data, error } = state;
  const hasData = !!Object.keys(data).length;

  return (
    <div className={classes.wrapper}>
      <h2>Loading: {loading ? 'yes...' : 'done'}</h2>
      {(hasData || error) && (
        <code>
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </code>
      )}
      {error && <button onClick={handleFetch}>Retry</button>}
      {hasData && (
        <ul>
          {data.map(listItem => (
            <li>{listItem}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default withStyles(style)(Menu);
