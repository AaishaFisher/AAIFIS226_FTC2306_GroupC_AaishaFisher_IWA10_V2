const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment


console.log(holidays.futureId || `ID ${futureId} not created yet`) //interpolation


//create the temporary object.
const temporaryHolidays = { ...holidays }

//create the temporary christmas object
const temporaryChristmas = { ...holidays[6]}
temporaryChristmas.name = 'X-mas Day' 
temporaryChristmas.date = new Date(`25 December ${currentYear} 00:00`)

//store the date change
const tempChristmasDate = temporaryChristmas.date
// correctDate = copied.date
// correctDate.hours = 0
// correctDate.minutes = 0

//comparing the date
const compareDate = Boolean(tempChristmasDate < temporaryHolidays[6].date)
//isEarlier = copied.date < holidays[6].date
console.log('New date is earlier:', compareDate)


if (compareDate === true) { temporaryHolidays[6].date = tempChristmasDate }

console.log('ID change:', holidays[christmas].id !== temporaryChristmas.id);

if (holidays[christmas].name !== temporaryChristmas.name) {
console.log('Name change:', temporaryChristmas.name )} 

if (holidays[christmas].date !== temporaryChristmas.date) {
console.log('Date change:', tempChristmasDate) 
} ;



const firstHolidayTimestamp = Math.min(
    holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime()
)

const lastHolidayTimestamp = Math.max(
    holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime()
)


// Utility function to convert date strings to Date objects
function convertToDateObject(dateString) {
    if (typeof dateString === 'string') {
        return new Date(dateString);
    }
    return dateString instanceof Date ? dateString : new Date(dateString);
}

// Convert all date strings in the holidays object to Date objects
for (let i = 0; i <= 8; i++) {
    holidays[i].date = convertToDateObject(holidays[i].date);
}


//

//declared our dates
let firstHoliday = holidays[3].date; // New Year's Day is the first holiday
let lastHoliday = holidays[2].date;  // Day of Goodwill is the last holiday in the year

// Getting the day, month, and year of the first and last holidays
const firstDay = String(firstHoliday.getDate()).padStart(2, '0');
const firstMonth = String(firstHoliday.getMonth() + 1).padStart(2, '0');
const firstYear = currentYear;
const lastDay = String(lastHoliday.getDate()).padStart(2, '0');
const lastMonth = String(lastHoliday.getMonth() + 1).padStart(2, '0');
const lastYear = currentYear;

// Formatting and displaying the first and last holiday dates
console.log(`${firstDay}/${firstMonth}/${currentYear}`);
console.log(`${lastDay}/${lastMonth}/${currentYear}`);

 
// Selecting a random holiday
const randomHolidayIndex = Math.floor(Math.random() * 9); // 9 holidays in total
const randomHolidayDate = convertToDateObject(holidays[randomHolidayIndex].date);

// Getting the day and month of the random holiday
const randomHolidayDay = String(randomHolidayDate.getDate()).padStart(2, '0');
const randomHolidayMonth = String(randomHolidayDate.getMonth() + 1).padStart(2, '0');

// Formatting and displaying the random holiday date
console.log(`${randomHolidayDay}/${randomHolidayMonth}/${currentYear}`);



