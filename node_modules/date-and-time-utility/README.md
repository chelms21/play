# date-time-utility
This package consists of several functions that assists users in handling the 
complexities of dates and times.

## Features:
  - Vanilla Javascript, no additional packages used.
  - Given a specific date, how many seconds, minutes, hours, days, weeks, 
  months, or years away is it?
  - Given two specific dates, how many seconds, minutes, hours, days, weeks, 
    months, or years away are they from each other?
    
## Modules:

Users have the ability to use one of the following modules that 
give users the functions corresponding to the timespan of choice:

    * seconds
    * minutes
    * hours
    * days
    * weeks
    * months
    * years
    
### timespan.fromCurrentTime(date)

Takes a date and determines how many `{timespans}` away it is from right now.

```javascript
var date = new Date();
     
date.setDate(date.getDate() + 365);

const seconds = dateTimeUtility.seconds.fromCurrentTime(date); //31536000
const minutes = dateTimeUtility.minutes.fromCurrentTime(date); //525600
const hours = dateTimeUtility.hours.fromCurrentTime(date); //8760
const days = dateTimeUtility.days.fromCurrentTime(date); //365
const weeks = dateTimeUtility.weeks.fromCurrentTime(date); //52
const months = dateTimeUtility.months.fromCurrentTime(date); //12
const years = dateTimeUtility.years.fromCurrentTime(date); //1
```

### timespan.betweenDates(date1, date2)


Takes two dates and determines how many `{timespans}` away they are from each other

```javascript
const date1 = new Date();

const date2 = new Date();

date1.setDate(date1.getDate() + 5);

date2.setDate(date2.getDate() + 370);

const seconds = dateTimeUtility.seconds.betweenDates(date1, date2) //31536000
const minutes = dateTimeUtility.minutes.betweenDates(date1, date2) //525600
const hours = dateTimeUtility.hours.betweenDates(date1, date2) //8760
const days = dateTimeUtility.days.betweenDates(date1, date2) //365
const weeks = dateTimeUtility.weeks.betweenDates(date1, date2) //52
const months = dateTimeUtility.months.betweenDates(date1, date2) //12
const years = dateTimeUtility.years.betweenDates(date1, date2) //1
```

Additionally, users have a module that allows them to determine datetimes that are a specified 
 amount of time from the current time, for example they can determine the datetime
 `x` seconds, minutes, hours, ect. from right now.

    * datetime

### datetime.secondsFromNow(number)


Takes a number and determines what the datetime is that number of seconds from then

```javascript
const seconds = dateTimeUtility.datetime.secondsFromNow(60); //60 seconds from right now
```

### datetime.minutesFromNow(number)


Takes a number and determines what the datetime is that number of minutes from then

```javascript
const minutes = dateTimeUtility.datetime.minutesFromNow(60); //60 minutes from right now
```

### datetime.hoursFromNow(number)


Takes a number and determines what the datetime is that number of hours from then

```javascript
const hours = dateTimeUtility.datetime.hoursFromNow(60); //60 hours from right now
```

### datetime.daysFromNow(number)


Takes a number and determines what the datetime is that number of days from then

```javascript
const days = dateTimeUtility.datetime.daysFromNow(60); //60 days from right now
```

### datetime.weeksFromNow(number)


Takes a number and determines what the datetime is that number of weeks from then

```javascript
const seconds = dateTimeUtility.datetime.weeksFromNow(60); //60 weeks from right now
```

### datetime.monthsFromNow(number)


Takes a number and determines what the datetime is that number of months from then

```javascript
const months = dateTimeUtility.datetime.monthsFromNow(60); //60 months from right now
```

### datetime.yearsFromNow(number)


Takes a number and determines what the datetime is that number of years from then

```javascript
const years = dateTimeUtility.datetime.yearsFromNow(60); //60 years from right now
```

Additionally, within the same module, users have a set of convenience functions
that allow them to see the datetime tomorrow, next week, next month, next year, yesterday,
 last week, last month, and last year.

    * datetime


### datetime.thisTimeTomorrow()


Tells the user the datetime this time tomorrow.

```javascript
const time = dateTimeUtility.datetime.thisTimeTomorrow(); //This time tomorrow
```

### datetime.thisTimeNextWeek()


Tells the user the datetime this time next week.

```javascript
const time = dateTimeUtility.datetime.thisTimeNextWeek(); //This time next week
```

### datetime.thisTimeNextMonth()


Tells the user the datetime this time next month.

```javascript
const time = dateTimeUtility.datetime.thisTimeNextMonth(); //This time next month
```

### datetime.thisTimeNextYear()


Tells the user the datetime this time next year.

```javascript
const time = dateTimeUtility.datetime.thisTimeNextYear(); //This time next year
```
### datetime.thisTimeYesterday()


Tells the user the datetime this time yesterday.

```javascript
const time = dateTimeUtility.datetime.thisTimeYesterday(); //This time yesterday
```

### datetime.thisTimeLastWeek()


Tells the user the datetime this time last week.

```javascript
const time = dateTimeUtility.datetime.thisTimeLastWeek(); //This time last week
```

### datetime.thisTimeLastMonth()


Tells the user the datetime this time last month.

```javascript
const time = dateTimeUtility.datetime.thisTimeLastMonth(); //This time last month
```

### datetime.thisTimeLastYear()


Tells the user the datetime this time last year.

```javascript
const time = dateTimeUtility.datetime.thisTimeLastYear(); //This time last year
```