import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export function Page2(props:Props) {
  const state = props.location.state;
  console.log(props);
  return (
    <div>
      <div>page2</div>
      <div>{state.title}</div>
    </div>
  );
}

interface Props extends RouteComponentProps<{},{},Page2Props>{};


export type Page2Props = {
  title: string;
}


