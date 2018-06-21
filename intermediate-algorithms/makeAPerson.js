const Person = function(firstAndLast) {
  let fullName = firstAndLast;
  let firstName = firstAndLast.split(' ')[0];
  let lastName = firstAndLast.split(' ')[1];

  this.getFirstName = () => firstName;
  this.getLastName = () => lastName;
  this.getFullName = () => fullName;
  this.setFirstName = (newFirstName) => {
    firstName = newFirstName
    fullName = `${firstName} ${lastName}`;
  };
  this.setLastName = (newLastName) => {
    lastName = newLastName
    fullName = `${firstName} ${lastName}`;
  };
  this.setFullName = (newFullName) => {
    fullName = newFullName;
    firstName = newFullName.split(' ')[0];
    lastName = newFullName.split(' ')[1];
  };  
};

const bob = new Person('Bob Ross');
bob.getFullName();