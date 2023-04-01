// Your code here
function createEmployeeRecord(arr) {
    return {
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: []
    }
  }
  
  function createEmployeeRecords(arr) {
    return arr.map(createEmployeeRecord)
  }
  
  function createTimeInEvent(employee, dateTime) {
    let [date, hour] = dateTime.split(' ')
  
    employee.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour),
      date: date
    })
  
    return employee
  }
  
  function createTimeOutEvent(employee, dateTime) {
    let [date, hour] = dateTime.split(' ')
  
    employee.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour),
      date: date
    })
  
    return employee
  }
  
  function hoursWorkedOnDate(employee, date) {
    let timeIn = employee.timeInEvents.find(event => event.date === date).hour
    let timeOut = employee.timeOutEvents.find(event => event.date === date).hour
  
    return (timeOut - timeIn) / 100
  }
  
  function wagesEarnedOnDate(employee, date) {
    let hoursWorked = hoursWorkedOnDate(employee, date)
    let payRate = employee.payPerHour
  
    return hoursWorked * payRate
  }
  
  function allWagesFor(employee) {
    let datesWorked = employee.timeInEvents.map(event => event.date)
    let wages = datesWorked.reduce((total, date) => total + wagesEarnedOnDate(employee, date), 0)
  
    return wages
  }
  
  function calculatePayroll(employees) {
    let totalWages = employees.reduce((total, employee) => total + allWagesFor(employee), 0)
  
    return totalWages
  }
  