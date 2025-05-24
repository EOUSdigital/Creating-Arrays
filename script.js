//TODO Module 3 - Lesson 02.01: Creating Arrays

//TODO ✅ Step 1: Theoretical Overview – Creating Arrays

//? 📦 Arrays can be created in multiple ways:

//* 🔹 1. Array Literal (most common)

const fruits = ['apple', 'banana', 'cherry'];

//  - Easiest, fastest, most readable
//  - Preferred in almost all real-world cases

//* 🔹 2. Array Constructor

const numbers = new Array(1, 2, 3);

//  - Less readable
//  - Often used when building from a loop or size

//* 🔹 3. Empty Array

const empty = [];
const buffer = new Array();                     // same thing

//  - Useful for collecting data dynamically

//* 🔹 4. Fixed Length Array

const filled = new Array(5).fill(0);

//  - Good for initializing defaults or game boards

//* 🔹 5. Dynamic Array Building

const tasks = [];
tasks.push('Read');
tasks.push('Code');

//  - Real-world scenario: building a list as users add things.

//* 💬 Challenge 1.

// Create an array using a literal ([]).

const placesToVisit = ['Paris', 'Rome', 'Berlin'];

//  ✔️ This is the most standard and readable way to define an array
//  ✅ Use this in 95% of situations

placesToVisit[0];

//  This gives us instant access to values by index — great for travel apps, UI cards, itinerary generators, etc.

//* 💬 Challenge 2.

// Create an array using new Array().

const justArray = new Array(1, 3, 5, 10, 30);

//  ✔️ This creates an array with the explicit values passed in.
//  ✅ It is exactly like writing [1, 3, 5, 10, 30].

//* 💬 Challenge 3.

// Create an array with 3 default values(.fill()).

const defaultValues = new Array(3).fill(0);

//  ✔️ This is a great way to create:
//  - Placeholder values
//  - Grid-based UI defaults
//  - Predefined form states

// ✅ We used .fill() correctly — this is a go-to method in real-world apps.


//TODO 📘 Step 2 – Real-World Analogy for Array Creation

//? 🧰 Imagine: We are organizing storage bins
//  Each bin can hold items in order, just like an array.
//  Let’s explore how different ways of creating arrays match real-life decisions.

//* 🔹 1. Array Literal ([]) → You pack a box manually

const snacks = ['chips', 'soda', 'cookies'];

//  🧠 Analogy:
//  “I know exactly what goes in this box.”

//  ✅ You list everything right there — easy, visible, intentional.
//  🟢 Most common when you already know what you need.

//* 🔹 2. new Array(...) → You buy an empty organizer tray

const tray = new Array(3);                      // has space, but nothing inside yet

//  🧠 Analogy:
//  “I don’t know what’s going in the slots yet, but I want 3 of them.”

//  ✅ You’re planning to fill it later.
//  ⚠️ Initially undefined — not really useful until populated.

//* 🔹 3. .fill() → You fill each slot with a default

const tray2 = new Array(3).fill('empty');

//  🧠 Analogy:
//  “Put a label in every drawer that says ‘empty’ — I’ll update them later.”

//  ✅ Perfect when you want consistent default values.
//  🟢 Useful for grids, game boards, form placeholders, etc.

//* 🔹 4. Dynamic .push() → You add as needed

const log = [];
log.push('event1');
log.push('event2');

//  🧠 Analogy:
//  “Each time something happens, drop it in the box.”

//  ✅ Ideal for building lists from user input or events.

//* 🧠 Developer Mindset:
//? Real Thought                                    Dev Strategy
//  “I know all the values now.”                    Use literal [] ✅
//  “I know how many I need, but not what yet.”     Use new Array(length)
//  “I want default filler in every slot.”          Use .fill()
//  “The list grows over time.”                     Use .push()

//! Example

const dailyLife = new Array(1).fill('eating');


//TODO 🧩 Challenge: Simulate a 6-Slot Schedule and Fill 2 Random Parts

//?  🧠 Goal:
//  1. Create a schedule array with 6 empty slots
//  2. Randomly pick 2 unique time slots
//  3. Fill those 2 with random task names (e.g., 'Workout', 'Call', 'Code')
//  4. Print the schedule with an emoji for each.

//! ✅ Step-by-Step Plan

//* ✅ Step 1: Create the schedule

const timetable = new Array(6).fill('empty');

//* ✅ Step 2: Create a task list

const toDo = ['Wake up', 'Wash up', 'Make bed', 'Breakfast', 'Morning exercise', 'Study JavaScript'];

//* ✅ Step 3: Randomly assign 2 unique tasks
//  1. Use Math.floor(Math.random() * 6).
//  2. Use a while loop or a Set to avoid duplicates.

const usedIndexes = new Set();

while (usedIndexes.size < 2) {
    const randomIndex = Math.floor(Math.random() * 6);
    if (!usedIndexes.has(randomIndex)) {
        const randomTask = toDo[Math.floor(Math.random() * toDo.length)];
        timetable[randomIndex] = randomTask;
        usedIndexes.add(randomIndex);
    }
};

//* ✅ Step 4: Print each slot with status

timetable.forEach(toDo => {
    const condition = toDo === ' ' ? '❌' : '✅';
    console.log(`${condition} ${toDo}`);
});

//TODO 🧩 Challenge: “Smart Backpack Inventory”

//* Let’s make a backpack manager that lets us:

//  🎒 Add or remove items
//  📦 View how many items are packed
//  🔁 Automatically reverse the list
//  🔍 Check if a specific item is inside

//! Solution:

//* Step 1:
const backpack = ['water', 'map', 'compass'];

//* Step 2:

backpack.push('fire cracker');
backpack.unshift('beanie');

console.log(`📦 Total items: ${backpack.length}`);


//* Step 3:

backpack.reverse();
console.log('🎒 Backpack contents:', backpack);

const newBackpack = backpack.splice(0, 1);
console.log('🎒 Backpack contents:', backpack);

//* Step 4:

if (backpack.includes('map')) {
    console.log('✅ map is packed!');
} else {
    console.log('❌ map is missing!');
};

const itemToCheck = 'laptop';

if (backpack.includes(itemToCheck)) {
    console.log(`✅ ${itemToCheck} is in the backpack!`);
} else {
    console.log(`❌ ${itemToCheck} is not in the backpack!`);
};


//* Step 5:

backpack.push('flashlight');
console.log('🎒 Backpack contents:', backpack);


//TODO 🧩 Challenge: “Are You Ready to Travel?”

//* 🧠 Scenario:

//  We are packing for a trip. You must have 3 required items:
//  - 'passport'
//  - 'ticket'
//  - 'wallet'

//  We will check a user’s backpack to see:
//  - ✅ If each required item is packed
//  - ❌ If any are missing

//* ✅ Challenge Steps:
//  1. Create an array backpack with any items (some required, some not)
//  2. Create an array requiredItems with the 3 needed ones
//  3. Loop through requiredItems
//  4. For each, check:
//  - If it is included in backpack, log ✅
//  - If not, log ❌

const packingTrip = ['passport', 'ticket', 'wallet', 'cap', 'jumper', 'umbrella', 'trousers', 'shoe', 'socks', 'knife'];
const itemsToCheck = ['passport', 'ticket', 'wallet'];

function checkPackingList(packingTrip, itemsToCheck) {
    let missingItems = 0;
    itemsToCheck.forEach(item => {
        if (packingTrip.includes(item)) {
            console.log(`✅ ${item} are in the backpack!`);
        } else {
            console.log(`❌ ${item} are not in the backpack!`);
        };
    });
    
    if (missingItems === 0) {
        console.log('🟢 You are ready to travel!');
    } else {
        console.log('🔴 You are missing essential items!');
    };
};

checkPackingList(packingTrip, itemsToCheck);

//! Forbidden Items

const forbiddenItems = ['knife', 'explosives', 'scissors'];

function isItemAllowed(packingTrip, forbiddenItems) {
    let prohibitedItems = 0;
    forbiddenItems.forEach(banned => {
        if (packingTrip.includes(banned)) {
            console.log(`🔴 ${banned} are in the backpack!`);
            prohibitedItems++;
        } else {
            console.log(`🟢 ${banned} are not in the backpack!`);
        };
    });

    if (prohibitedItems >= 1) {
        console.log('🔴 You are not allowed to travel!');
    } else {
        console.log('🟢 You are allowed to travel!');
    };
};

isItemAllowed(packingTrip, forbiddenItems);


//TODO  Step 3 – Practical Examples (Creating & Modifying Arrays)

//  Now that you’ve mastered .includes(), .push(), .unshift(), .splice(), and logic checks…
//  Let’s apply your skills to real-world scenarios where you’ll dynamically create, modify, and control arrays.

//* ✅ Objective of Step 3
//  We will practice:
//  - 🔄 Creating arrays
//  - ➕ Adding items
//  - ❌ Removing specific items
//  - 🔍 Checking if an item exists
//  - 🪄 Transforming an array using logic

//* 🧩 Real-Life Scenario: “Packing Checklist” App

//  Imagine we are building a small checklist system for someone preparing for an event:

//? 🎯 Tasks to Practice:
//  1. Create an empty array checklist.
//  2. Add 3 tasks using .push()
//  3. Remove the first task using .shift()
//  4. Add a task to the beginning using .unshift()
//  5. Check if 'sunscreen' is on the list
//  6. Log final checklist in readable format

//! Solution

//* Step 1

const checklist = [];

//* Step 2

checklist.push('goals');
checklist.push('budget');
checklist.push('location');

//* Step 3

checklist.shift();

//* Step 4

checklist.unshift('date');

//* Step 5

if (checklist.includes('sunscreen')) {
    console.log('✅ sunscreen is on the list.');
} else {
    console.log('❌ sunscreen is not on the list.');
};

//* Step 6

console.log('📝 Final checklist:');
checklist.forEach(item => console.log('•', item));

