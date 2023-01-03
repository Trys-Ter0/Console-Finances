var finances = [
['Jan-2010', 867884],
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];


//Calculate and log total number of months
console.log("Total months: " + finances.length)

// Total Months:
// Total: $
// Average  Change: $
// Greatest Increase in Profits: Feb-2012 ($1926159)
// Greatest Decrease in Profits:  Mth-year ($-------)

// for (let i = 0; i < finances.length; i++) {
//     change.push(finances[i][1] - finances[i][1]);
//  } return console.log()
// ---------------Thanks to fran and Hunter

let totalMonths = 0;
let totalProfits = 0;
let totalChange = 0;
let averageChange = 0;
// let greatestProfit = (date: "", amount: 0;)
// let greatestLoss = (date: "", amount: 0;)


// for (let i = 0; i < finances.length; i++) {
//     finances[i].forEach(element=>(
//         // console.log(finances);
//         totalProfits += (finances [i] [1])
//         )
//     )
//     console.log(totalProfits)
// } 


// const totalProfits= finances.reduce((currentTotal, [1]))=> {
//     return finances[1] + currentTotal
// }

// for (let i = 0; i < finances.length; i++){
//     for(let j = 0; j < finances[i].length; j++){
//         console.log(finances[i][j])
//     }
    
// }

// var col2 = finances.map(function(value,index) {return value})

// for (let i = 0; i < finances.length - 1; i++) {
//     change.push(finances[i++] [1] - finances[i][1]);
// }

const finances1 = finances.map((finance) => {
    return finance[1]
})

console.log(finances1)

for (i=0; i < finances1.length; i++) {
    totalProfits += finances1[i]
}

//Final Console Output

console.log("Financial Analysis")
console.log("-------------------------")
console.log("Total months: " + finances.length)
console.log("Total Profits: $" + totalProfits)
// console.log("Average Change: $" + "")
// console.log("Greatest Increase in Profits: " +)
// console.log("Greatest Decrease in Profits: $" +)


// const result = finances.map((e, ...rest], i) => (
//     [i ? e - finances[i - 1][1] ; e, ...rest]
// ))

// console.log(result)

// let prev;
// const res = finances.map(E => {
//     const val =e[0] - (prev || 0);
//     prev = e[0];
//     e[0] = val;
//     return E;
// });

// console.log(res);


// https://stackoverflow.com/questions/70326957/the-latter-element-subtract-the-previous-element-in-javascript
var result = finances1;
for(var i = finances1.length -1; i > 0; i--) {
    result[i] = finances1[i] - finances1[i -1]; 
}

// console.log(result)

for (i=0; i < result.length; i++) {
    totalChange += result[i]
}
console.log(totalChange)

// for (averageChange = totalChange / totalMonths) {
//     console.log(averageChange)
// }

// averageChange = totalChange / finances.length;

// console.log("average change =" + averageChange);

// function averageChange(finances) {
//     for (let i = 1; - < finances.length; i++) {
//         let change = records[i].ProfitLoss - finances[i - 1].ProfitLoss;
//         totalChange += change;
//         numChanges++;
//     }

//     let averageChange = totalChange / numChanges;
//     return averageChange;
// }

function calculateAverageChange(finances) {
    // Initialize variables to track the total change and number of changes
    let totalChange = 0;
    let numChanges = 0;
  
    // Iterate through the records, starting from the second record
    for (let i = 1; i < finances.length; i++) {
      // Calculate the change in Profit/Losses between the current record and the previous record
      let change = finances[i].ProfitLoss - finances[i - 1].ProfitLoss;
      // Add the change to the total change
      totalChange += change;
      // Increment the number of changes
      numChanges++;
    }
  
    // Calculate the average change by dividing the total change by the number of changes
    let averageChange = totalChange / numChanges;
  
    // Return the average change
    console.log(averageChange);
  }

// Financial Analysis
// ----------------------------
// Total Months: 86
// Total: $38382578
// Average  Change: $-2315.12
// Greatest Increase in Profits: Feb-2012 ($1926159)
// Greatest Decrease in Profits: Sep-2013 ($-2196167)
  
// function averageMonthlyChange(finances) {
//     let sum = 0;
//     for (let i = 1; i < finances.length; i++) {
//       sum += finances[i] - finances[i - 1];
//     }
//     return sum / (finances.length - 1);
//   }
  
//   console.log(averageMonthlyChange(finances)); // Output: 5
  


function averageMonthlyChange(finances) {
  let sum = 0;
  for (let i = 1; i < finances.length; i++) {
    if (Number.isNaN(finances[i][1]) || Number.isNaN(finances[i - 1][1])) {
      return NaN; // return NaN if either value is not a number
    }
    sum += finances[i][1] - finances[i - 1][1];
  }
  return sum / (finances.length - 1);
}

console.log("Average Change: " + averageMonthlyChange(finances));


function greatestProfitChange(finances) {
    let maxProfit = -Infinity;
    let maxProfitMonth = null;
    let maxProfitYear = null;
    let minProfit = Infinity;
    let minProfitMonth = null;
    let minProfitYear = null;
  
    for (let i = 1; i < finances.length; i++) {
      let profitChange = finances[i][1] - finances[i - 1][1];
  
      if (profitChange > maxProfit) {
        maxProfit = profitChange;
        maxProfitMonth = finances[i][0].split('-')[0];
        maxProfitYear = finances[i][0].split('-')[1];
      }
  
      if (profitChange < minProfit) {
        minProfit = profitChange;
        minProfitMonth = finances[i][0].split('-')[0];
        minProfitYear = finances[i][0].split('-')[1];
      }
    }
  
    return {
      maxProfit: maxProfit,
      maxProfitMonth: maxProfitMonth,
      maxProfitYear: maxProfitYear,
      minProfit: minProfit,
      minProfitMonth: minProfitMonth,
      minProfitYear: minProfitYear,
    };
  }
  
  console.log("Greatest Increase in Profits: " + greatestProfitChange(finances));

  
  

  