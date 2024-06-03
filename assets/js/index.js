function User(id, name, surname, age, isMale, email, isSubscribed) {
    this.id = id;
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isSubscribed = isSubscribed;
}

User.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

let users = [];

for (let i = 0; i < 10; i++) {
    const user = new User(
        i + 1,
        `Username${i}`,
        `Usersurname${i}`,
        Math.floor(Math.random() * 90),
        Math.random() < 0.5,
        `useremail${i}@gmail.com`,
        Math.random() < 0.5
    );
    users.push(user);
}
console.log('Users:');
console.table(users);

// Отримати масив користувачів, які не підписані (not subscribed).
const notSubscribedUsers = users.filter(user => !user.isSubscribed);
console.log('Not subscribed users:');
console.table(notSubscribedUsers);

// Вивести список повних імен користувачів.
users.forEach((user, index) => console.log(`${index}: ${user.getFullName()}`));

// Отримати масив повних імен осіб жіночої статі шкільного віку (6 - 18 років).
const schoolgirlFullnames = users
    .filter(user => !user.isMale && user.age >= 6 && user.age <= 18)
    .map(user => user.getFullName());
console.log('schoolgirl fullnames:');
console.table(schoolgirlFullnames);

// Видалити з масиву користувача з email useremail5@gmail.com.
users = users.filter(user => user.email !== 'useremail5@gmail.com');
console.log('Users after filter:');
console.table(users);

// Змінити email користувачу з id 2 (можна спробувати використати find).
const foundUser = users.find(user => user.id === 2);
foundUser.email = 'newuseremail@gmail.com';
console.log('User with updated email', foundUser);

// *Визначити, який відсоток користувачів підписані (subscribed).
const subscriberUsers = users.filter(u => u.isSubscribed)
const subscribedUsersPercentage = ((subscriberUsers.length / users.length) * 100).toFixed();
console.log('Subscribed users percentage:', subscribedUsersPercentage);

// *Знайти середній вік користувачів (спробувати використати reduce).
const sumAge = users.reduce((acc, user) => acc += user.age, 0);
const avgAge = (sumAge / users.length).toFixed();
console.log('Average age of users:', avgAge);

// *Впорядкувати користувачів за віком (sort).
users.sort((user1, user2) => user1.age - user2.age);
console.log('Sorted users by age:');
console.table(users);

// *Перевірити, чи є серед користувачів користувач з email`ом useremail7@gmail.com.
const isThereUserWithSpecifiedEmail = users.some(user => user.email === 'useremail7@gmail.com');
console.log('There is user with email useremail7@gmail.com:', isThereUserWithSpecifiedEmail);

// *Перевірити, чи всі користувачі підписані (subscribed).
const isAllUsersSibscribed = users.every(user => user.isSubscribed);
console.log('All users are sibscribed:', isAllUsersSibscribed);
