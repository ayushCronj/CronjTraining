User Management API

Install node , npm and nodemon first

Then install all node dependencies in the project folder by -
        npm install

Then to start API use -
        nodemon server.js

Different Routes are-

1. Create - POST request on http://localhost:3002/api/users/create with Content as body of POST Request.

2. Get All Users - GET request on http://localhost:3002/api/users/get

3. Get Specific User By ID - GET request on http://localhost:3002/api/users/get/:id 
                (For Eg. - http://localhost:3002/api/users/get/ffc7823d-03c3-4c88-8364-d32dff5ad795)

4. Update User -  POST request on http://localhost:3002/api/users/update with content to be updated in   Body of POST request along with userID. 

5. Delete User - GET request on http://localhost:3002/api/users/delete/:id 
            (For Eg. - http://localhost:3002/api/users/delete/ffc7823d-03c3-4c88-8364-d32dff5ad795)

6. Filter By Name - GET request on http://localhost:3002/api/users/filter/name/:name
            (For Eg. - http://localhost:3002/api/users/filter/name/ayush)

7. Filter By Gender - GET request on http://localhost:3002/api/users/filter/gender/:name
            (For Eg. - http://localhost:3002/api/users/filter/gender/male)

8. Filter By Age - GET request on http://localhost:3002/api/users/filter/age/:name
            (For Eg. - http://localhost:3002/api/users/filter/age/22)

9. Filter By City - GET request on http://localhost:3002/api/users/filter/city/:name
            (For Eg. - http://localhost:3002/api/users/filter/city/bareilly)

10. Filter By Profession - GET request on http://localhost:3002/api/users/filter/profession/:name
            (For Eg. - http://localhost:3002/api/users/filter/profession/developer)

11. Compound Filtering - GET request on http://localhost:3002/api/users/filter/many?query
            (For Eg. - http://localhost:3002/api/users/filter/many?name=ayush&age=22)