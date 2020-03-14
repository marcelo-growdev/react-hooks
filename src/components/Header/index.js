import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Nav } from './styles';

import * as PersonActions from '../../store/modules/person/actions';

export default function Header() {
  const personCount = useSelector(state => state.person.length);
  const dispatch = useDispatch();

  function showAlert() {
    dispatch(PersonActions.showAlertTotal());
  }

  return (
    <Nav>
      Total {personCount}
      <button onClick={() => showAlert()} type="button">
        Click
      </button>
    </Nav>
  );
}
