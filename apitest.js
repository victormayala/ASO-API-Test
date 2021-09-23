function fetchData() {
  fetch('https://www.academy.com/api/inventory?productId=9672998&storeId=172&storeEligibility=1&bopisEnabled=true&isSTSEnabled=true').then(response => {
    return response.json();
  }).then(data => {
    console.log(data.online);
    const html = data.online.map(prodInfo => {
      return `<p>Is Clearance?: ${prodInfo.isClearance} - Inventory Status: ${prodInfo.inventoryStatus}</p>`
    }).join("");
    document.querySelector('#here').innerHTML = html;
  }).catch(error => {});
}

fetchData();


// function fetchData() {
//   fetch('https://www.academy.com/api/inventory?productId=9672998&storeId=172&storeEligibility=1&bopisEnabled=true&isSTSEnabled=true').then(response => {
//     return response.json();
//   }).then(data => {
//     console.log(data.online);
//     const html = data.online.map(prodInfo => {
//       return `<p>Is Clearance?: ${prodInfo.isClearance} - Inventory Status: ${prodInfo.inventoryStatus}</p>`
//     }).join("");
//     document.querySelector('#here').innerHTML = html;
//   }).catch(error => {});
// }