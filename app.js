const moment = require('moment');

// Define the reimbursement rates
const lowCostTravelRate = 45;
const highCostTravelRate = 55;
const lowCostFullDayRate = 75;
const highCostFullDayRate = 85;


function calculateReimbursement(projects) {
    
    let totalReimbursementAmount = 0;
    let currentDate, lccurrentDate = null;

    for (const project of projects) {
    const lcStartDate = moment(project["LC Start Date"], "MM/DD/YY");
    const lcEndDate = moment(project["LC End Date"], "MM/DD/YY");
    const StartDate = moment(project["Start Date"], "MM/DD/YY");
    const EndDate = moment(project["End Date"], "MM/DD/YY");

        if (StartDate._i) { // Checking the high/low cost city dates
            currentDate = StartDate;
            while(currentDate.isSameOrBefore(EndDate)) {
                if(currentDate.isBefore(EndDate)) {
                    totalReimbursementAmount += highCostFullDayRate;
                } else {
                    totalReimbursementAmount += highCostTravelRate;
                }
                currentDate.add(1, 'days');
            }
        } else if(lcStartDate._i){
            lccurrentDate = lcStartDate;
            while(lccurrentDate.isSameOrBefore(lcEndDate)) {
                if(lccurrentDate.isBefore(lcEndDate)) {
                    totalReimbursementAmount += lowCostFullDayRate;
                } else {
                    totalReimbursementAmount += lowCostTravelRate;
                }
                lccurrentDate.add(1, 'days');
            }
        }
    }

    return totalReimbursementAmount;
}

// Define the sets of projects
const project1 = [
    { "LC Start Date": "9/1/15", "LC End Date": "9/3/15" },
];

const project2 = [
    { "LC Start Date": "9/1/15", "LC End Date": "9/1/15" },
    { "Start Date": "9/2/15", "End Date": "9/6/15" },
    { "LC Start Date": "9/6/15", "LC End Date": "9/8/15" },
];

const project3 = [
    { "LC Start Date": "9/1/15", "LC End Date": "9/3/15" },
    { "Start Date": "9/5/15", "End Date": "9/7/15" },
    { "Start Date": "9/8/15", "End Date": "9/8/15" },
];

const project4 = [
    { "LC Start Date": "9/1/15", "LC End Date": "9/1/15" },
    { "LC Start Date": "9/1/15", "LC End Date": "9/1/15" },
    { "Start Date": "9/2/15", "End Date": "9/2/15" },
    { "Start Date": "9/2/15", "End Date": "9/3/15" },
];

// Output of the reimbursement for each set
console.log("Set 1 Reimbursement:", calculateReimbursement(project1));
console.log("Set 2 Reimbursement:", calculateReimbursement(project2));
console.log("Set 3 Reimbursement:", calculateReimbursement(project3));
console.log("Set 4 Reimbursement:", calculateReimbursement(project4));
