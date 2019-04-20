import React, { useContext } from 'react';
import { getHomepageItems } from '../../actions/homepageAction';
import { Store } from '../../store';

const HomepageComponent = () => {
  const [state, dispatch] = useContext(Store).homepage;

  const handleFetch = () => {
    getHomepageItems(dispatch);
  };

  const { loading, data, error } = state;

  return (
    <>
      <h2>Loading: {loading ? 'yes...' : 'done'}</h2>
      <button onClick={handleFetch}>Fetch</button>
      {(Object.keys(data).length || error) && (
        <code>
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </code>
      )}
    </>
  );
};

export default HomepageComponent;
