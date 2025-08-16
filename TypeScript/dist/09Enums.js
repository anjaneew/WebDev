"use strict";
//------------------------------------Enums--------------------------------------
//enums allow you to create a new data type composed of predefined, related values.
Object.defineProperty(exports, "__esModule", { value: true });
var Days;
(function (Days) {
    Days[Days["Sunday"] = 0] = "Sunday";
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
})(Days || (Days = {}));
const today = Days.Sunday;
console.log(today);
//using numbers
//By default, enums will initialize the first value to 0 and add 1 to each additional value.
//You can set the value of the first numeric enum and have it auto increment from that.
//You can assign unique number values for each enum value. Then the values will not 
// incremented automatically:
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound); //logs 404
//------------------------------------Exercise--------------------------------------
/**1 Create an enum Months representing all twelve months of the year in order.*/
var Months;
(function (Months) {
    Months[Months["January"] = 0] = "January";
    Months[Months["February"] = 1] = "February";
    Months[Months["March"] = 2] = "March";
    Months[Months["April"] = 3] = "April";
    Months[Months["May"] = 4] = "May";
    Months[Months["June"] = 5] = "June";
    Months[Months["July"] = 6] = "July";
    Months[Months["August"] = 7] = "August";
    Months[Months["September"] = 8] = "September";
    Months[Months["October"] = 9] = "October";
    Months[Months["November"] = 10] = "November";
    Months[Months["December"] = 11] = "December";
})(Months || (Months = {}));
/**2 Declare a variable currentMonth with the type Months and assign it the value
 * for March. Log the variable to the console.*/
const currentMonth = Months.March;
console.log(currentMonth); //2
/**3 Create an enum TicketStatus with numeric values starting from 10 for Pending,
 * and auto-increment the rest for Confirmed and Cancelled.*/
var TicketStatus;
(function (TicketStatus) {
    TicketStatus[TicketStatus["Pending"] = 10] = "Pending";
    TicketStatus[TicketStatus["Confirmed"] = 11] = "Confirmed";
    TicketStatus[TicketStatus["Cancelled"] = 12] = "Cancelled";
})(TicketStatus || (TicketStatus = {}));
/**4 Declare a variable cancelledTicket with the type TicketStatus and assign it
 * the Cancelled value. Log the variable to the console.*/
const cancelledTicket = TicketStatus.Cancelled;
console.log(cancelledTicket); //12
/**5 Create an enum HttpErrorCodes assigning custom numeric values:
 * Unauthorized = 401, Forbidden = 403, InternalServerError = 500.*/
var HttpErrorCodes;
(function (HttpErrorCodes) {
    HttpErrorCodes[HttpErrorCodes["Unauthorized"] = 401] = "Unauthorized";
    HttpErrorCodes[HttpErrorCodes["Forbidden"] = 403] = "Forbidden";
    HttpErrorCodes[HttpErrorCodes["InternalServerError"] = 500] = "InternalServerError";
})(HttpErrorCodes || (HttpErrorCodes = {}));
/**6 Log the value of Forbidden from HttpErrorCodes to the console.*/
console.log(HttpErrorCodes.Forbidden); //403
//# sourceMappingURL=09Enums.js.map