const person = {
  id: 2,
  gender: "mail",
};

const student = {
  name: "ravi",
  email: "ravi11@yopmail.com",
};

const newObject = {
  id: person.id,
  name: student.name,
  email: student.email,
  gender: person.gender,
};
console.log(newObject);
