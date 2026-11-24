const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];


// Showcases different way to iterate arrays 
// Map
//const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
       // document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// forEach
let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

// for loop
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;

const breakfastMenuPrice = ['Pancakes- $12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15'];

// Uses map but does not use the index
//const showBreakfastMenu = breakfastMenuPrice.map((item_price) => `<p> ${item_price}</p>`).join('');
//document.getElementById('breakfastMenuItems').innerHTML = showBreakfastMenu;

let breakfastMenuPrice1 = '';
breakfastMenuPrice.forEach((item_price) =>{
    breakfastMenuPrice1 += `<p> ${item_price}</p>`;});
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuPrice1;

