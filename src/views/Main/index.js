import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { TextField } from '@material-ui/core';
import { Title, Card, SendButton } from './styles';

import PersonItem from '../../components/PersonItem';
import * as PersonActions from '../../store/modules/person/actions';

export default function Main() {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState('');
  const dispatch = useDispatch();

  const personRedux = useSelector(state => state.person);

  // EXECUTA QUANDO MONTA O COMPONENTE
  useEffect(() => {
    if (personRedux.length > 0) {
      setPersons(personRedux);
    }
  }, []);

  // useEffect(() => {
  //   console.log(`mudou a newperson: ${newPerson}`);
  // }, [newPerson]);

  const handleInputChange = e => {
    setNewPerson(e.target.value);
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      dispatch(PersonActions.addToPerson(newPerson));

      setPersons([...persons, newPerson]);

      setNewPerson('');
    },
    [persons, newPerson, dispatch]
  );

  const totalList = useMemo(() => persons.length, [persons]);

  const handleDelete = useCallback(
    person => {
      setPersons(persons.filter(item => item !== person));

      dispatch(PersonActions.removeFromPerson(person));
    },
    [persons, dispatch]
  );

  return (
    <>
      <Card>
        <Title>Lista de pessoas ({totalList}):</Title>
        <ul>
          {persons.map(item => (
            <PersonItem
              key={item}
              person={item}
              onDelete={() => handleDelete(item)}
            />
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Digite um nome"
            type="text"
            onChange={handleInputChange}
            value={newPerson}
          />
          <SendButton type="submit">Salvar</SendButton>
        </form>
      </Card>
    </>
  );
}
