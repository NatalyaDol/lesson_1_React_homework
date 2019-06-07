//4*. Написать цикл, который создаёт массив промисов, внутри каждого промиса происходит обращение к ресурсу 
//(https://jsonplaceholder.typicode.com/users/number), где вместо number подставляется число от 1 до 10, 
//в итоге должно получиться 10 промисов. Следует дождаться выполнения загрузки всеми промисами и далее вывести массив загруженных данных.
console.log("Exercise #4");
const url = 'https://jsonplaceholder.typicode.com/users/number';
const promiseArray = [];

for (let i = 0; i < 11; i++) {
    promiseArray[i] = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = () => resolve(xhr.responseText);
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
        resolve(xhr.responseText);
    });

    Promise.all(promiseArray).then(result => {
        console.log(result);
    }); 
};

//Сама не знаю как получилось но работает )))))))))) вроде 