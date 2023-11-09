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
temporaryChristmas.date = setHours(0, 0, 0, 0);

//store the date change
const tempChristmasDate = temporaryChristmas.date
// correctDate = copied.date
// correctDate.hours = 0
// correctDate.minutes = 0

//comparing the date
const compareDate = Boolean(tempChristmasDate < temporaryHolidays[6].date)
//isEarlier = copied.date < holidays[6].date
console.log('New date is earlier:', tempChristmasDate)


if (compareDate === true) { temporaryHolidays[6].date = tempChristmasDate }
console.log(temporaryHolidays)

console.log('ID change:', holidays[6].id != copied.id || copied.id)
console.log('Name change:', holidays[christmas].name != copied.name || copied.name)
console.log('Date change:', holidays[christmas].date != copied.date || copied.date)

//     Date change: 25/12/2023

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

const firstDay = firstHolidayTimestamp.getDate
const firstMonth = firstHolidayTimestamp.getMonth
const lastDay = lastHolidayTimestamp.getDate
const lastMonth = lastHolidayTimestamp.getMonth

console.log('{firstDay}/{firstMonth}/{currentYear}')
console.log('{lastDay}/{lastMonth}/{currentYear}')

const randomHoliday = holidays[Math.random]
console.log(randomHoliday.date)

 
 

// To test out this functionality, you will have to do the following:

//     By default, all holidays start at midnight. However, by accident Christmas was entered as 
//starting at 13:25. You are required to create a version of the Christmas object that has the date set to midnight.
//     While you are changing the time when Christmas starts, it is also requested that you change the name from 
//Christmas to X-mas

 

// After applying these changes, you should check whether the new date is earlier than the current date. This will 
//be done by logging true to the console if this is the case, alternatively, it should log false. Given that midnight 
//is before 13:25 the following should be logged to the console:

 

// New date is earlier: true

 

// Only if the date is earlier should it apply the change to copied.

 

// After the above changes have been applied to the temporary object, the user should be alerted to what has been 
//changed before the changes are applied to the holidays object. If a value has not changed it should log false to the 
//console, alternatively, it should log the new value to the console.

 

// It should log the following:

//     ID change: false
//     Name change: X-mas
//     Date change: 25/12/2023

 

// Several engineers have attempted to fix this bug before to no avail. We hope that you are able to figure 
//out why this is happening.

 

// After fixing the above issue, you should also output the following to the console:

//     The first holiday in the year as date, formatted as DD/MM/YYYY . This means that the match (New Years Day) 
//will look something like 01/01/2030 if the year is 2030
//     The last holiday in the year as date, formatted as DD/MM/YYYY . This means that the match (Day of Goodwill) 
//will look something like 26/12/2030 if the year is 2030
//     A randomly selected holiday date in the same format as above. Note that each time the code runs a new date 
//should be randomly selected.

 

// Note that the DD/MM/YYYY format requires that single digits be prefixed with 0 characters. 
//In other words, 1/1/2030 should be displayed as 01/01/2030.

 

// It is recommended that you Google and read up on the following:

//     The Math.min and Math.max static methods.
//     The new Date() constructor.
//     The .getTime() method on dates.
//     The .getMonth() , getDate() and .getFullYear() methods on dates.
//     The .setHours and .setMinutes methods on dates.
//     The .padStart and .padEnd methods on all strings.
