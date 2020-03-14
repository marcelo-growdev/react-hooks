export function addToPerson(person) {
  console.log('Disparado a action add person');
  return {
    type: '@person/ADD',
    person,
  };
}

export function showAlertTotal() {
  console.log('Disparado a action show');
  return {
    type: '@person/SHOW_ALERT',
  };
}

export function removeFromPerson(person) {
  console.log('Disparado a action remove');
  return {
    type: '@person/REMOVE',
    person,
  };
}
