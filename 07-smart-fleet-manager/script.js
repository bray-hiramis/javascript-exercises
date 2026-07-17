// JavaScript Fundamentals review

// Original data
const companyFleet = [
   { id: "V101", model: "Ford Transit", yearBuilt: 2022, mileage: 30000, needsOilChange: false },
   { id: "V102", model: "Ram ProMaster", yearBuilt: 2025, mileage: 55000, needsOilChange: false },
   { id: "V103", model: "Chevy Express", yearBuilt: 2024, mileage: 12000, needsOilChange: true },
   { id: "V104", model: "Mercedes Sprinter", yearBuilt: 2023, mileage: 25000, needsOilChange: false }
];

// Copy of data to test for edge cases
/*
const companyFleet = [
   { id: "V101", model: "Ford Transit", yearBuilt: 2026, mileage: 4000, needsOilChange: false },
   { id: "V102", model: "Ram ProMaster", yearBuilt: 2026, mileage: 4000, needsOilChange: false },
   { id: "V103", model: "Kia", yearBuilt: 2026, mileage: 4000, needsOilChange: false },
   { id: "V104", model: "Chevy Express", yearBuilt: 2026, mileage: 4000, needsOilChange: false },
   { id: "V105", model: "Mercedes Sprinter", yearBuilt: 2026, mileage: 4000, needsOilChange: false },
   { id: "V106", model: "Tesla Model 3", yearBuilt: 2026, mileage: 3500, needsOilChange: false }
];
*/

function generateMaintenanceReport(fleet, currentYear) {

   let report = {};
   let urgentCount = 0;
   const serviceAlerts = [];
   
   // generate the report to the console
   for (let i = 0; i < fleet.length; i++) {
      const vehicleAge = currentYear - fleet[i]["yearBuilt"];
      if (fleet[i]["mileage"] >= 50000 || vehicleAge >= 5 || fleet[i]["needsOilChange"]) {
         urgentCount++;
         const alert = `Vehicle ${fleet[i]["id"]} (${fleet[i]["model"]}) requires urgent service!`;
         serviceAlerts.push(alert);
      }
   }

   if (urgentCount === 0) {
      console.log("All vehicles pass the audit! No maintenance needed for now.");
      report = {
         urgentCount: urgentCount,
         serviceAlerts: serviceAlerts
      };
   } else {
      report = {
         urgentCount: urgentCount,
         serviceAlerts: serviceAlerts
      };
   }

   return report;

}

const years = generateMaintenanceReport(companyFleet, 2026);
console.log(years);