# calculate-reimbursement-amount
Exercise to calculate reimbursement amount

#### Execution
To run this project, use:
- `node v18.17.1`
- `npm v9.6.7`
- `npm install moment`
- `npm start`

##### List of projects executed:

Set 1:
  Project 1: Low Cost City Start Date: 9/1/15 End Date: 9/3/15

Set 2:
  Project 1: Low Cost City Start Date: 9/1/15 End Date: 9/1/15
  Project 2: High Cost City Start Date: 9/2/15 End Date: 9/6/15
  Project 3: Low Cost City Start Date: 9/6/15 End Date: 9/8/15

Set 3:
  Project 1: Low Cost City Start Date: 9/1/15 End Date: 9/3/15
  Project 2: High Cost City Start Date: 9/5/15 End Date: 9/7/15
  Project 3: High Cost City Start Date: 9/8/15 End Date: 9/8/15

Set 4:
  Project 1: Low Cost City Start Date: 9/1/15 End Date: 9/1/15
  Project 2: Low Cost City Start Date: 9/1/15 End Date: 9/1/15
  Project 3: High Cost City Start Date: 9/2/15 End Date: 9/2/15
  Project 4: High Cost City Start Date: 9/2/15 End Date: 9/3/15

##### Assumptions
1. assuming its a travel day
    { "LC Start Date": "9/1/15", "LC End Date": "9/1/15" }
2. assuming end day as travel day for high cost
    { "Start Date": "9/2/15", "End Date": "9/6/15" }
3. assuming start date as travel day for low cost
    { "LC Start Date": "9/6/15", "LC End Date": "9/8/15" }
4. counting one day as both the days are same 
    { "LC Start Date": "9/1/15", "LC End Date": "9/1/15" },
    { "LC Start Date": "9/1/15", "LC End Date": "9/1/15" },