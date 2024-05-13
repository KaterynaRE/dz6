// Отримати данні з 
// https://jsonplaceholder.typicode.com/users
// Читати про асинхронність !!!
// AJAX, XMLHttpRequest ?
// http-заголовок, методи GET, POST !!!

// Відобразити їх у вигляді списка(ul):
// *Ім'я(тільки ім'я), номер телефону, назву компанії
// *Ім'я(тільки ім'я), номер телефону, назву компанії
// *Ім'я(тільки ім'я), номер телефону, назву компанії
// *Ім'я(тільки ім'я), номер телефону, назву компанії

const promise = fetch('https://jsonplaceholder.typicode.com/users');

const userI = [];
function ShowInfo(name, phone, company) {
    const [firstName,] = name.split(' ');
    const userInfo = `${firstName}, ${phone}, ${company}`;
    userI.push(userInfo);
    console.log(userInfo);
}
function renderUsers(users) {
    users.forEach(u => {
        ShowInfo(u.name, u.phone, u.company.name);
    });
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => renderUsers(users))
    .catch((error) => console.log(error));

const userList = document.getElementById('userList');

function renderUserList(users) {
    users.forEach(user => {
        const li = document.createElement('li');
        li.innerText = user;
        userList.appendChild(li);
    });
}
setTimeout(() => renderUserList(userI), 1000);