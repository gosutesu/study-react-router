import React from 'react';
import {useHistory} from 'react-router-dom';
import { Page2Props } from './page2';

export function Page1() {
  const history = useHistory();

  const pushState: Page2Props = {
    title: 'push page1'
  }

  const push = () => {
    history.push('/page2',pushState)
  }

  return (
    <div>
      <div>page1</div>
      <button name={"push test"} onClick={push}></button>
    </div>
  );
}