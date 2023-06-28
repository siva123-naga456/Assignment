select customerid,name,subjectName as(subjects)
from customers inner join Subject student mapping on customers.customerId=Subject student mapping.customerId
inner join Subjects on Subjects.subjectId=Subject student mapping.subjectId 
group by(customerid) order by name Asc;