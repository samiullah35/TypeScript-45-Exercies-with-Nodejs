// They think of something you could store in a TypeScript Object.
//  Write a program that creates Objects containing these items.
/* let objectname ={
    key: 'value1',
    key2: 'value2',
    key3: 'value3',
    
}*/
var person = {
    name: "sami",
    age: 36,
    grades: [85, 90, 70]
};
console.log(person.grades[1]);
var products = {
    name: "laptop",
    price: 70000,
    description: "High performance laptop with fast processor"
};
console.log(products.price);
var company = {
    name: "maher",
    products: "medical center",
    location: "karachi"
};
console.log(company.products);
var person1 = {
    name: "ali",
    age: 32,
    city: "Hydrabad"
};
var person2 = {
    name: "khan",
    age: 60,
    city: "lahore"
};
console.log(person2.name);
var objectcontainerItem = {
    "laptop": {
        name: "laptop",
        price: 70000,
        description: "High performance laptop with fast processor"
    },
    "mouse": {
        name: "mouse",
        price: 500,
        description: "High performance mouse with fast processor"
    },
    "keybord": {
        name: "keybord",
        price: 2500,
        description: "High performance keybord with fast processor"
    }
};
console.log(objectcontainerItem);
