//--------------------------------------Class------------------------------------------

//---------------------------Class Type Annotations-------------------------------------

class Product {
    //Property type annotations
    id: number;
    name: string;
    price: number;

    //Constructor parameter type annotations
    constructor(id: number, name: string, price: number){
        this.id = id;
        this.name =  name;
        this.price = price;
    }

    //Method type annotations
    getProductInfo(): string {
        return `Product details: ID:${this.id} Name:${this.name} Price:${this.price}`;
    }
}

//creating an instance
const product1 = new Product(1, "brush", 2.99);

//access class properties and call a method
console.log(product1.getProductInfo());

//------------------------------class access modifiers---------------------------------
//Public

class Restaurant {
    public menu: string[];

    constructor(menuItems: string[]){
        this.menu = menuItems;
    }

    public displayMenu(): void{
        console.log("Today's menu: ", this.menu);
    }
}

const diner = new Restaurant(['Koththu', 'Kadala', 'Rice and curry']);

console.log(diner.menu);//✔️
diner.displayMenu();//✔️

//Private
class Kitchen {
    private secretRecipe: string;

    constructor(recipe: string){
        this.secretRecipe = recipe;
    }

    public cookDish():  void{
        console.log(`We are cooking with ${this.secretRecipe}`);
    }
}

const myKitchen = new Kitchen("Pol sambola");

myKitchen.cookDish() //public method ✔️
// console.log(myKitchen.secretRecipe); // ❌ private - limited to class

//Protected
class HomeKitchen{
    protected familyRecipe: string;

    constructor(recipe: string){
        this.familyRecipe = recipe;
    }

    protected prepareMeal(): void {
        console.log(`We are cooking ${this.familyRecipe}`);
    }
}

class myRoom extends HomeKitchen {
    public serveMeal(): void{
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
    public id: number;
    protected name: string;
    protected bookList: string[];
    private age: number;
    private password: string;
    public accountType: string;

    constructor(id: number, username: string, age: number){
        this.id = id;
        this.name = username;
        this.bookList = []; //default values - no need in parameters
        this.age = age;
        this.password = "*******"; //default values - no need in parameters
        this.accountType = ""; //placeholder
    }

    private sendEmail(){
        console.log(`Send Email with: ${this.password} please reset it.`);

    }
 
    createAccount(): string {
        if(this.age < 18){
            this.accountType = "Minor";
        } else {
            this.accountType = "Full";
        }
        this.sendEmail();
        return this.accountType;
    }

    protected checkAccountDetails(): void {
        console.log(`ID: ${this.id} Name: ${this.name} Account ${this.accountType} Books: ${this.bookList}`);
    }
}

class LibraryUser extends LibraryAccount{
    checkMyAccount(){
        this.checkAccountDetails();
    }
}

class LibraryFamily extends LibraryAccount{
    checkFamilyAccount(){
        this.checkAccountDetails();
    }
}

const myLibraryCard = new LibraryAccount( 1002, "Michel Angelo",  15); 
const me = new LibraryUser( 1002, "Michel Angelo",  15);
const myMom = new LibraryFamily(1002, "Michel Angelo", 15); 



myLibraryCard.createAccount();// ✔️ - It can create an account.
//myLibraryCard.checkAccountDetails(); // ❌ It can't check the account directly.
me.checkMyAccount();// ✔️ - I can check my version of account
// myLibraryCard.sendEmail(); // ❌ - I cant send the email. only admin can
// myMom.checkAccountDetails();// ❌ - my mom cant check the account cz its not her account
myMom.checkFamilyAccount();// ✔️ - my mom can check family version of account



//----------------Class accessors - getters and setters--------------------------------
class Shop{
    private _price: number;

    constructor(private id: number, private name: string){
        this._price = 0; // Default value
        //underscore in _price is a naming convention 
            //_price is the internal/private storage for the value.
            //price is the public getter/setter that controls access to it.
    }

    //public getter
    get price(): number{
        return this._price;
    }

    //public setter
    set price(newPrice: number){
        if(newPrice >= 0){
            this._price = newPrice;
        }
        else {
            console.log("Price cannot be negative.");
        }
    }

    getProductInfo(): string {
        return `ID: $${this.id} Name: $${this.name} Price: $${this._price}`;
    }
}

const Product2 = new Shop(1 ,"cup cake");
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
class ChatRoom{
    private static userCount: number = 0; //Tracks total users (class-level)

    constructor(private id: number, public userName: string){
        this.id = id;
        this.userName = userName;
        ChatRoom.userCount++; 
    }

    //admin work Static method called on class (not instances)
    static greet(userName: string): void{
        console.log(`${userName} joined the chat. Welcome ${userName}!`);
        console.log(`${ChatRoom.userCount} users are online.`);
    }

    //again system work 
    private createUser(): void{
       console.log(`Your id is: ${this.id} and userName is :${this.userName}`); 
       ChatRoom.greet(this.userName);
    }

    //user can do this- public
    createAccount(): void{
        console.log("New Account successfully created.");
        this.createUser();
    }
}

const piyal = new ChatRoom(54, "Piyal");
piyal.createAccount();
console.log(piyal.userName);//✔️ public variable
// console.log(piyal.id);//❌ private variable


/**OUTPUT 
 * New Account successfully created.
 * Your id is: 54 
 * Piyal joined the chat. Welcome Piyal!
 * 1 users are online.
 */

//--------------------------------------Class------------------------------------------

//--------------------------------------Class------------------------------------------

//--------------------------------------Class------------------------------------------