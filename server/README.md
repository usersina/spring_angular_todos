## Spring Boot Backend
This is the backend of the application which has the basic CRUD for the two entities as well as additional querying methods, using attribute & JPA queries.

## Entities:
- A `User` entity. example response:
```JAVASCRIPT
{
    "id": 1,
    "firstName": "User",
    "lastName": "Sina",
    "email": "user@sina.com",
    "password": "test@789!",
    "createdAt": "2021-10-13T16:47:06.000+00:00"
}
```
- A `Todo` entity, example response:
```JAVASCRIPT
{
    "id": 1,
    "title": "Test something",
    "completed": true,
    "userId": 1
},
```

## Base endpoints:
- **User:** `GET`, `POST`, `PUT`, `DELETE`
  - /api/users
  - Example `POST` request:
```JAVASCRIPT
{
    "firstName": "Test",
    "lastName": "User",
    "email": "tester@test.com",
    "password": "123",
}
```
- **Todo:** `GET`, `POST`, `PUT`, `DELETE`
  - /api/todos
  - Example `POST` request:
```JAVASCRIPT
{
    "title": "Wash the dishes",
    "completed": false,
    "userId": 2
}
```

## Additional endpoints:
* To `GET` a list of users whose number of todos is less than a certain number:
> /api/users/todosnumberlesserthan/15

* To `GET` a list of users whose first name is specified :
> /api/users/firstname/Mario

