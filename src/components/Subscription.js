'use client'; // Only needed if using client-side features like useState/useEffect

import React from 'react';

function Subscription({ name }) {
  return (
    <div>
      Subscription: {name || 'Guest'}!
    </div>
  );
}

export default Subscription;