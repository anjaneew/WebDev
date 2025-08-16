"use strict";
//--------------------------------------Class------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
//---------------------------Class Type Annotations-------------------------------------
/** types of properties, methods, and constructor parameters within a class. */
class Product {
    //Property type annotations
    id;
    name;
    price;
    //Constructor parameter type annotations
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    //Method type annotations
    getProductInfo() {
        return `Product details: ID:${this.id} Name:${this.name} Price:${this.price}`;
    }
}
//creating an instance
const product1 = new Product(1, "brush", 2.99);
//access class properties and call a method
console.log(product1.getProductInfo());
//------------------------------class access modifiers---------------------------------
/**keywords used to control the visibility and accessibility of class members
 * (properties and methods) from outside the class.  */
//Public -accessible from anywhere,
class Restaurant {
    menu;
    constructor(menuItems) {
        this.menu = menuItems;
    }
    displayMenu() {
        console.log("Today's menu: ", this.menu);
    }
}
const diner = new Restaurant(['Koththu', 'Kadala', 'Rice and curry']);
console.log(diner.menu); //✔️
diner.displayMenu(); //✔️
//Private - only accessible from within the class
class Kitchen {
    secretRecipe;
    constructor(recipe) {
        this.secretRecipe = recipe;
    }
    cookDish() {
        console.log(`We are cooking with ${this.secretRecipe}`);
    }
}
const myKitchen = new Kitchen("Pol sambola");
myKitchen.cookDish(); //public method ✔️
// console.log(myKitchen.secretRecipe); // ❌ private - limited to class
//Protected - accessible from within the class they are defined in and from subclasses 
// (derived classes)
class HomeKitchen {
    familyRecipe;
    constructor(recipe) {
        this.familyRecipe = recipe;
    }
    prepareMeal() {
        console.log(`We are cooking ${this.familyRecipe}`);
    }
}
class myRoom extends HomeKitchen {
    serveMeal() {
        console.log(`Taste my family recipe: ${this.familyRecipe}`); // ✔️ - OK for subclass
        this.prepareMeal(); // ✔️ - OK for subclass
    }
}
const summarHome = new HomeKitchen("Katta sambola");
const myVan = new myRoom("magi noodles");
// summarHome.prepareMeal(); // ❌ - cant cz its only happening inside class
//summarHome.familyRecipe();//❌ - cant cz its only happening inside class
myVan.serveMeal(); // ✔️ - public method so okay
//myVan.familyRecipe // ❌ - cant cz its only happening inside parent class
//Writing a new Example to make sense:
class LibraryAccount {
    id;
    name;
    bookList;
    age;
    password;
    accountType;
    constructor(id, username, age) {
        this.id = id;
        this.name = username;
        this.bookList = []; //default values - no need in parameters
        this.age = age;
        this.password = "*******"; //default values - no need in parameters
        this.accountType = ""; //placeholder
    }
    sendEmail() {
        console.log(`Send Email with: ${this.password} please reset it.`);
    }
    createAccount() {
        if (this.age < 18) {
            this.accountType = "Minor";
        }
        else {
            this.accountType = "Full";
        }
        this.sendEmail();
        return this.accountType;
    }
    checkAccountDetails() {
        console.log(`ID: ${this.id} Name: ${this.name} Account ${this.accountType} Books: ${this.bookList}`);
    }
}
class LibraryUser extends LibraryAccount {
    checkMyAccount() {
        this.checkAccountDetails();
    }
}
class LibraryFamily extends LibraryAccount {
    checkFamilyAccount() {
        this.checkAccountDetails();
    }
}
const myLibraryCard = new LibraryAccount(1002, "Michel Angelo", 15);
const me = new LibraryUser(1002, "Michel Angelo", 15);
const myMom = new LibraryFamily(1002, "Michel Angelo", 15);
myLibraryCard.createAccount(); // ✔️ - It can create an account.
//myLibraryCard.checkAccountDetails(); // ❌ It can't check the account directly.
me.checkMyAccount(); // ✔️ - I can check my version of account
// myLibraryCard.sendEmail(); // ❌ - I cant send the email. only admin can
// myMom.checkAccountDetails();// ❌ - my mom cant check the account cz its not her account
myMom.checkFamilyAccount(); // ✔️ - my mom can check family version of account
//----------------Class accessors - getters and setters--------------------------------
/**Class accessors, also known as getters and setters, are a way to control access to the
 * properties of a class.  */
class Shop {
    id;
    name;
    _price;
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this._price = 0; // Default value
        //underscore in _price is a naming convention 
        //_price is the internal/private storage for the value.
        //price is the public getter/setter that controls access to it.
    }
    //public getter
    get price() {
        return this._price;
    }
    //public setter
    set price(newPrice) {
        if (newPrice >= 0) {
            this._price = newPrice;
        }
        else {
            console.log("Price cannot be negative.");
        }
    }
    getProductInfo() {
        return `ID: $${this.id} Name: $${this.name} Price: $${this._price}`;
    }
}
const Product2 = new Shop(1, "cup cake");
console.log(Product2.getProductInfo());
//setter
Product2.price = 21.58;
console.log(Product2.getProductInfo());
Product2.price = -1.58;
console.log(Product2.getProductInfo());
/**  Shop class output
 * ID: $1 Name: $cup cake Price: $0
 * ID: $1 Name: $cup cake Price: $21.58
 * Price cannot be negative.
 * ID: $1 Name: $cup cake Price: $21.58 */
//------------------------------Class Static Members-----------------------------------
/**Static members in a class are properties or methods that belong to the class itself,
 * rather than to instances of the class.  */
class ChatRoom {
    id;
    userName;
    static userCount = 0; //Tracks total users (class-level)
    constructor(id, userName) {
        this.id = id;
        this.userName = userName;
        this.id = id;
        this.userName = userName;
        ChatRoom.userCount++;
    }
    //admin work Static method called on class (not instances)
    static greet(userName) {
        console.log(`${userName} joined the chat. Welcome ${userName}!`);
        console.log(`${ChatRoom.userCount} users are online.`);
    }
    //again system work 
    createUser() {
        console.log(`Your id is: ${this.id} and userName is :${this.userName}`);
        ChatRoom.greet(this.userName);
    }
    //user can do this- public
    createAccount() {
        console.log("New Account successfully created.");
        this.createUser();
    }
}
const piyal = new ChatRoom(54, "Piyal");
piyal.createAccount();
console.log(piyal.userName); //✔️ public variable
class Products {
    serialNum; // Explicitly declare properties 
    name;
    price;
    constructor(serial, name, price) {
        this.serialNum = serial;
        this.name = name;
        this.price = price;
    }
    giveInfo() {
        return `Product info: serial: ${this.serialNum} name: ${this.name} price: $${this.price}`;
    }
}
const broom = new Products(101, "Broom", 5.47);
console.log(broom.giveInfo()); //  "Product info: serial:101   name:Broom price: $5.47"
//--------------------------abstract classes and members-------------------------------
/**Abstract classes are used as blueprints for other classes. They cannot be instantiated on
 *  their own but can be subclassed by other classes. Abstract classes can also contain
 * abstract methods, which are declared but not implemented in the abstract class itself.
 *  Subclasses are required to provide implementations for these abstract methods. */
class HousePlan {
    length;
    width;
    roomName;
    static setupCount = 0; //setupCount is static, so it belongs to the class, 
    // not individual objects; constructors run per object, but static values are shared and
    //  updated independently of instantiation.
    static roomCount = 0;
    constructor(length, width, roomName) {
        this.length = length;
        this.width = width;
        this.roomName = roomName;
        HousePlan.roomCount++; //static do not need to go through constructor but here it is counting
    }
    displayArea() {
        HousePlan.setupCount++;
        console.log(`The area of the room is ${this.length * this.width} sqft`);
        console.log(`Total rooms built: ${HousePlan.roomCount}`);
    }
}
class Bedroom extends HousePlan {
    installAppliances() {
        console.log("A bed is added.");
    }
    constructor(roomName) {
        super(8, 12, roomName);
    }
}
class KKitchen extends HousePlan {
    installAppliances() {
        console.log("A sink is installed");
    }
    constructor(roomName) {
        super(5, 12, roomName);
    }
}
const myroom = new Bedroom("Master Bedroom");
const kitchenArea = new KKitchen("FamilyKitchen");
myroom.installAppliances();
myroom.displayArea();
kitchenArea.displayArea();
kitchenArea.installAppliances();
//-----------------------------Polymorphism & Method Override-------------------------------
class Cupcakes {
    name;
    static order = 0;
    constructor(name) {
        this.name = name;
    }
    static getOrder() {
        return Cupcakes.order++;
    }
    bake() {
        console.log(`Order #${Cupcakes.order} is baked. Your cupcake is ready. 🧁`);
    }
}
class StrawberryCupcakes extends Cupcakes {
    constructor(name) {
        super(name);
    }
    decorate() {
        console.log("Strawberry 🍓 Icing is added.");
    }
}
class LemonCupcakes extends Cupcakes {
    constructor(name) {
        super(name);
    }
    decorate() {
        console.log("Lemon flavoured 🍋 Icing is added.");
    }
}
const orderOne = new StrawberryCupcakes("orderOne");
orderOne.bake();
orderOne.decorate();
//Order #1 is baked. Your cupcake is ready. 🧁  
//Strawberry 🍓 Icing is added.  
const orderTwo = new StrawberryCupcakes("orderTwo");
orderTwo.bake();
orderTwo.decorate();
//Order #2 is baked. Your cupcake is ready. 🧁  
//Strawberry 🍓 Icing is added.  
const orderThree = new LemonCupcakes("orderThree");
orderTwo.bake();
orderTwo.decorate();
// Order #3 is baked. Your cupcake is ready. 🧁 
// Lemon flavoured 🍋 Icing is added.  
// --------------------------------- Exercises -----------------------------------------
// -----------------  Class Type Annotations-----------------------------------------
/**1 Create a class called Vehicle with the following properties:
* model (string)
* year (number)
* fuelType (string)*/
/**2 Add a constructor that accepts these three parameters and assigns them to the class properties.*/
/**3 Add a method called getVehicleDetails() that returns a string in this format: "Vehicle: [model] ([year]) - Fuel: [fuelType]"*/
/**4 Create an instance of Vehicle with model "Toyota Camry", year 2020, and fuelType "Gasoline", then call the getVehicleDetails() method and log the result.*/
class Vehicle {
    model;
    year;
    fuelType;
    constructor(model, year, fuelType) {
        this.model = model;
        this.year = year;
        this.fuelType = fuelType;
    }
    getVehicleDetails() {
        return `Vehicle: ${this.model} (${this.year}) - Fuel: ${this.fuelType}`;
    }
}
const myVehicle = new Vehicle("Toyota Camry", 2020, "Gasoline");
console.log(myVehicle.getVehicleDetails());
// -----------------  Class Access Modifiers-----------------------------------------
/**5 Create a class called BankAccount with:
* public property: accountNumber (string)
* private property: balance (number)
* protected property: accountHolderName (string)*/
/**6 Add a constructor that accepts accountNumber, initialBalance, and holderName. Set balance to initialBalance and the other properties accordingly.*/
/**7 Add a public method called deposit(amount: number) that adds the amount to the balance and logs "Deposited $[amount]. New balance: $[balance]"*/
/**8 Add a private method called validateTransaction() that logs "Transaction validated" and call it inside the deposit method.*/
/**9 Create a class called SavingsAccount that extends BankAccount and adds a public method called getAccountInfo() that logs "Account holder: [accountHolderName], Account: [accountNumber]"*/
/**10 Create instances of both classes and test the public methods. Try to access the private and protected properties directly to see the TypeScript errors.*/
class BankAccount {
    accountNumber;
    balance;
    accountHolderName;
    constructor(accountNumber, initialBalance, holderName) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.accountHolderName = holderName;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: $${this.balance}`);
        this.validateTransaction();
    }
    validateTransaction() {
        console.log("Transaction validated");
    }
}
class SavingsAccount extends BankAccount {
    getAccountInfo() {
        console.log(`Account holder: ${this.accountHolderName}, Account: ${this.accountNumber}`);
    }
}
const myBankAccount = new BankAccount("0001", 5000, "Samara");
const mySavingsAccount = new SavingsAccount("0002", 2000, "Palitha");
//myBankAccount.validateTransaction(); // ✖️ private
myBankAccount.deposit(8000); //✔️
mySavingsAccount.deposit(8000); //✔️
mySavingsAccount.getAccountInfo(); //✔️
console.log(myBankAccount.accountNumber); //✔️ - public
// console.log(myBankAccount.balance);// ✖️ - private 
// console.log(myBankAccount.accountHolderName);// ✖️ - protected
console.log(mySavingsAccount.accountNumber); //✔️
// console.log(mySavingsAccount.balance);// ✖️  - private
// console.log(mySavingsAccount.accountHolderName);// ✖️  - protected
// -----------------  Class Accessors (Getters and Setters)----------------------------------
/**11 Create a class called Temperature with:
* private property: _celsius (number)
* constructor that accepts an initial temperature*/
/**12 Add a getter called celsius that returns the _celsius value.*/
/**13 Add a setter called celsius that:
* accepts a newTemp parameter
* sets _celsius to newTemp if it's above -273.15
* logs "Invalid temperature! Cannot be below absolute zero." if it's -273.15 or below*/
/**14 Add a getter called fahrenheit that returns the temperature converted to Fahrenheit using the formula: (celsius * 9/5) + 32*/
/**15 Create a Temperature instance, test setting valid and invalid celsius values, and display both celsius and fahrenheit readings.*/
class Temperature {
    _celsius;
    constructor(initialTemp) {
        this._celsius = initialTemp; // Use the parameter
    }
    get celsius() {
        return this._celsius;
    }
    set celsius(newTemp) {
        if (newTemp > -273.15) {
            this._celsius = newTemp;
        }
        else {
            console.log("Invalid temperature! Cannot be below absolute zero.");
        }
    }
    get fahrenheit() {
        return (this.celsius * 9 / 5) + 32;
    }
}
const weather1 = new Temperature(185);
weather1.celsius = 25; // Uses the setter
console.log(weather1.celsius); // 25
console.log(weather1.fahrenheit); // 77
console.log(weather1.celsius = -300); //This will trigger the validation message
//Please help. i donno how to set the values of new Temp. may be i am mistaken here. 
// FEEDBACK : Your getter/setter implementation is correct, but you need to set the initial temperature in the constructor:
// ----------------- Class Static Members-----------------------------------------
/**16 Create a class called GameSession with:
* private static property: totalSessions (number) initialized to 0
* private property: sessionId (number)
* public property: playerName (string)*/
/**17 In the constructor, increment totalSessions and assign its value to sessionId, then assign the playerName parameter.*/
/**18 Add a static method called getSessionStats() that logs "Total game sessions created: [totalSessions]"*/
/**19 Add a public method called startGame() that:
* calls getSessionStats()
* logs "Player [playerName] started session #[sessionId]"*/
/**20 Create three GameSession instances with different player names, call startGame() on each, and observe how totalSessions increases.*/
class GameSession {
    static totalSessions = 0;
    sessionId;
    playerName;
    constructor(sessionId, playerName) {
        GameSession.totalSessions++;
        this.sessionId = sessionId;
        this.playerName = playerName;
    }
    static getSessionStats() {
        console.log(`Total game sessions created: ${GameSession.totalSessions}`);
    }
    startGame() {
        GameSession.getSessionStats();
        console.log(`Player ${this.playerName} started session #${this.sessionId}`);
    }
}
const gamer1 = new GameSession(1, "gamer1");
const gamer2 = new GameSession(2, "gamer2");
const gamer3 = new GameSession(3, "gamer3");
gamer1.startGame();
gamer2.startGame();
gamer3.startGame();
class FullTimeEmployee {
    employeeId;
    fullName;
    department;
    monthlySalary;
    constructor(id, name, dept) {
        this.employeeId = id;
        this.fullName = name;
        this.department = dept;
        this.monthlySalary = 50000;
    }
    calculateSalary() {
        return (this.monthlySalary * 12);
    }
}
class PartTimeEmployee {
    employeeId;
    fullName;
    department;
    hourlyRate;
    hoursPerWeek;
    constructor(id, name, dept) {
        this.employeeId = id;
        this.fullName = name;
        this.department = dept;
        this.hourlyRate = 0;
        this.hoursPerWeek = 40;
    }
    calculateSalary() {
        return this.hourlyRate * this.hoursPerWeek * 52;
    }
}
const fulltimeGuy = new FullTimeEmployee(101, "welder", "Mechanical Dept");
const parttimeGuy = new PartTimeEmployee(102, "helper", "Mechanical Dept");
console.log(fulltimeGuy.calculateSalary());
console.log(parttimeGuy.calculateSalary());
// ----------------- Abstract Classes and Members-----------------------------------------
/**27 Create an abstract class called MediaPlayer with:
* protected property: title (string)
* private static property: playCount (number) initialized to 0
* constructor that accepts title*/
/**28 Add an abstract method called play(): void*/
/**29 Add a concrete method called showStats() that:
* increments playCount
* logs "Now playing: [title]"
* logs "Total plays: [playCount]"*/
/**30 Create a class called AudioPlayer that extends MediaPlayer with:
* constructor that accepts title and passes it to super
* implementation of play() method that logs "🎵 Audio playing..."*/
/**31 Create a class called VideoPlayer that extends MediaPlayer with:
* constructor that accepts title and passes it to super
* implementation of play() method that logs "📺 Video playing..."*/
/**32 Create instances of both AudioPlayer and VideoPlayer, call play() and showStats() on each to see polymorphic behavior.*/
class MediaPlayer {
    title;
    //protected property = parent class > parent const-param > parent-constructor 
    // > child const-param > child constructor
    static playCount = 0;
    constructor(title) {
        this.title = title;
        MediaPlayer.playCount++; //counts how many objects are created
    }
    showStats() {
        MediaPlayer.playCount++;
        console.log(`Now playing: ${this.title}`);
        console.log(`Total plays: ${MediaPlayer.playCount}`);
    }
}
class AudioPlayer extends MediaPlayer {
    constructor(title) {
        //protected property = parent class > parent const-param > parent-constructor 
        // > child const-param > child constructor
        super(title);
    }
    play() {
        console.log(`🎵 Audio playing...`);
    }
}
class VideoPlayer extends MediaPlayer {
    constructor(title) {
        //protected property = parent class > parent const-param > parent-constructor 
        // > child const-param > child constructor
        super(title);
    }
    play() {
        console.log(`📺 Video playing...`);
    }
}
const violine = new AudioPlayer("my music playlist");
const movieMarathon = new VideoPlayer("my Movie marathon");
violine.play();
violine.showStats();
movieMarathon.play();
movieMarathon.showStats();
// ----------------- Polymorphism & Method Override ----------------- 
/**33 Create an abstract class called Notification with:
* protected property: message (string)
* private static property: notificationCount (number) initialized to 0
* constructor that accepts message*/
/**34 Add a static method called getTotalNotifications() that returns notificationCount.*/
/**35 Add a concrete method called send() that:
* increments notificationCount
* logs "Notification #[notificationCount] sent"*/
/**36 Add an abstract method called deliver(): void*/
/**37 Create a class called EmailNotification that extends Notification with:
* private property: emailAddress (string)
* constructor accepting message and emailAddress
* implementation of deliver() that logs "📧 Email sent to: [emailAddress] - [message]"*/
/**38 Create a class called SMSNotification that extends Notification with:
* private property: phoneNumber (string)
* constructor accepting message and phoneNumber
* implementation of deliver() that logs "📱 SMS sent to: [phoneNumber] - [message]"*/
/**39 Create instances of both notification types, call send() and deliver() on each, then use getTotalNotifications() to display the total count.*/
class Notification {
    message;
    static notificationCount = 0;
    constructor(message) {
        this.message = message;
    }
    //Static Method - shouldn't take a parameter. 
    // Static methods access static properties directly:
    static getTotalNotifications() {
        return Notification.notificationCount;
    }
    send() {
        Notification.notificationCount++;
        console.log(`Notification #${Notification.notificationCount} sent`);
    }
}
class EmailNotification extends Notification {
    emailAddress;
    constructor(message, emailAddress) {
        super(message); //super constructor first
        this.emailAddress = emailAddress;
    }
    deliver() {
        console.log(`📧 Email sent to: ${this.emailAddress} - ${this.message}`);
    }
}
class SMSNotification extends Notification {
    phoneNumber;
    constructor(message, phoneNumber) {
        super(message);
        this.phoneNumber = phoneNumber;
    }
    deliver() {
        console.log(`📱 SMS sent to: ${this.phoneNumber} - ${this.message}`);
    }
}
const myMail = new EmailNotification("Hello!", "fake@gmail.com");
const myPhone = new SMSNotification("Hello!", "+123-456-789");
//# sourceMappingURL=11Class.js.map