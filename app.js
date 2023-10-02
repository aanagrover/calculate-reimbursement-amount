const moment = require('moment');

// Define the reimbursement rates
const lowCostTravelRate = 45;
const highCostTravelRate = 55;
const lowCostFullDayRate = 75;
const highCostFullDayRate = 85;


function calculateReimbursement(projects) {
    
    let totalReimbursementAmount = 0;
    let currentDate, lccurrentDate = null;

    // check if two projects are on the same day.
    if(projects && projects.length > 1){
        projects.forEach((el, i) => {
            projects.slice(i + 1).forEach((e, j) => {
                if(JSON.stringify(el) == JSON.stringify(e)){
                    projects.splice(j, 1);
                    // console.log(projects)
                    return projects;
                } else {
                    return projects;
                }
            })
        });
    }

    for (const project of projects) {
        // assuming dates are correct
        const lcStartDate = moment(project["LC Start Date"], "MM/DD/YY").date();
        const lcEndDate = moment(project["LC End Date"], "MM/DD/YY").date();
        const StartDate = moment(project["Start Date"], "MM/DD/YY").date();
        const EndDate = moment(project["End Date"], "MM/DD/YY").date();

         // Checking the high/low cost city dates
        if (StartDate) {
            currentDate = StartDate;
            while(currentDate <= EndDate) {
                if(currentDate< EndDate && currentDate > StartDate) {
                    totalReimbursementAmount += highCostFullDayRate;
                } else {
                    totalReimbursementAmount += highCostTravelRate;
                }
                currentDate++;
            }
        } else if(lcStartDate){
            if(lccurrentDate == lcStartDate) {

            } else {
                lccurrentDate = lcStartDate;
            }
            while(lccurrentDate <= lcEndDate) {
                if(lccurrentDate < lcEndDate && lccurrentDate > lcStartDate) {
                    totalReimbursementAmount += lowCostFullDayRate;
                } else {
                    totalReimbursementAmount += lowCostTravelRate;
                }
                lccurrentDate++;
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
    { "LC Start Date": "9/1/15", "LC End Date": "9/1/15" }, // assuming its a travel day
    { "Start Date": "9/2/15", "End Date": "9/6/15" }, // assuming end day as travel day for high cost
    { "LC Start Date": "9/6/15", "LC End Date": "9/8/15" }, // assuming start date as travel day for low cost
];

const project3 = [
    { "LC Start Date": "9/1/15", "LC End Date": "9/3/15" },
    { "Start Date": "9/5/15", "End Date": "9/7/15" },
    { "Start Date": "9/8/15", "End Date": "9/8/15" },
];

const project4 = [
    { "LC Start Date": "9/1/15", "LC End Date": "9/1/15" },
    { "LC Start Date": "9/1/15", "LC End Date": "9/1/15" }, // counting one day as both the days are same 
    { "Start Date": "9/2/15", "End Date": "9/2/15" },
    { "Start Date": "9/2/15", "End Date": "9/3/15" },
];

// Output of the reimbursement for each set
console.log("Project 1 Reimbursement:", calculateReimbursement(project1));
console.log("Project 2 Reimbursement:", calculateReimbursement(project2));
console.log("Project 3 Reimbursement:", calculateReimbursement(project3));
console.log("Project 4 Reimbursement:", calculateReimbursement(project4));
