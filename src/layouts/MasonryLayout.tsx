import React from 'react';

interface Props extends React.PropsWithChildren {}

function MasonryLayout(props: Props) {
  const { children } = props;
  const className = 'columns-1 sm:columns-2 gap-4 space-y-4 py-4';
  return <div className={className}>{children}</div>;
}

export { MasonryLayout };
