import React from 'react';

export const dumpJson = json => (
  <code>
    <pre>{JSON.stringify(json, null, 2)}</pre>
  </code>
);
