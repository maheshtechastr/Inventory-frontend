import React from 'react';

interface MyComponentProps {
  name: string;
}

function NoPage({ name }: MyComponentProps) {
  return <div>
    <p>404</p>
    <p>Hello {name}!</p>
    </div>;
}

export default NoPage;