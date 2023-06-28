select customerid,name,subjectName as(subjects)
from customers inner join Subject student mapping on customers.customerId=Subject student mapping.customerId
inner join Subjects on Subjects.subjectId=Subject student mapping.subjectId 
group by(customerid) order by name Asc;














###question3

const express = require("express");

const app = express();

app.post("path", async (request, response) => {
  const { username, email } = request.body;
  const existQuery = `select * from table-name where email='${email}'`;
  if (existQuery === undefined) {
    await dbConnectionObject.run(
      `insert into table-name(name,email) values('${username}','${email}')`
    );
  } else {
    response.send("Already Exist");
  }
});
