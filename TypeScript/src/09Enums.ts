//------------------------------------Enums--------------------------------------
//enums allow you to create a new data type composed of predefined, related values.

enum Days {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

const today: Days = Days.Sunday;
console.log(today);

//using numbers
//By default, enums will initialize the first value to 0 and add 1 to each additional value.
//You can set the value of the first numeric enum and have it auto increment from that.
//You can assign unique number values for each enum value. Then the values will not 
// incremented automatically:


enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

console.log(StatusCodes.NotFound); //logs 404

//------------------------------------Exercise--------------------------------------

/**1 Create an enum Months representing all twelve months of the year in order.*/

enum Months {
    January,
    February, 
    March, 
    April, 
    May, 
    June, 
    July, 
    August, 
    September, 
    October, 
    November, 
    December
}

/**2 Declare a variable currentMonth with the type Months and assign it the value 
 * for March. Log the variable to the console.*/

const currentMonth: Months = Months.March;
console.log(currentMonth);//2

/**3 Create an enum TicketStatus with numeric values starting from 10 for Pending, 
 * and auto-increment the rest for Confirmed and Cancelled.*/

enum TicketStatus {
    Pending = 10,
    Confirmed,
    Cancelled
}

/**4 Declare a variable cancelledTicket with the type TicketStatus and assign it 
 * the Cancelled value. Log the variable to the console.*/

const cancelledTicket: TicketStatus = TicketStatus.Cancelled;
console.log(cancelledTicket); //12

/**5 Create an enum HttpErrorCodes assigning custom numeric values: 
 * Unauthorized = 401, Forbidden = 403, InternalServerError = 500.*/

enum HttpErrorCodes {
    Unauthorized = 401, 
    Forbidden = 403, 
    InternalServerError = 500
}

/**6 Log the value of Forbidden from HttpErrorCodes to the console.*/

console.log(HttpErrorCodes.Forbidden);//403

