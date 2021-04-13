const age = 83;
const isFemale = true;
const driverStatus = 'bob';
const name = 'Sarah';
const totalAmount = 50;

if (age >= 18) {
    console.log('Je mag naar binnen!');
} else if (age < 18) {
    console.log('Je bent nog geen 18 jaar, dus helaas mag je niet naar binnen!');
}

if (isFemale) {
    console.log('Mooi, je bent een vrouw!');
} else {
    console.log('Helaas, je bent geen vrouw!');
}

if (driverStatus === 'bob') {
    console.log('Goeie reis!');
} else {
    console.log('Sleutels inleveren aub!');
}

if (age > 18 && age < 25) {
    console.log('Je krijgt 50% korting!');
} else if (age === 18 || age >= 25) {
    console.log('Je krijgt 50% korting op je eerste drankje!');
} else if (age < 18) {
    console.log('Je krijgt geen korting en je mag trouwens ook niet naar binnen!');
}

if (name === 'Sarah' || name === 'Bram') {
    console.log('Je krijgt een gratis biertje!');
} else {
    console.log('Een fijne avond!')
}

if (totalAmount > 25 && totalAmount <= 50) {
    console.log('Je krijgt gratis 5 (vega)bitterballen!');
} else if (totalAmount > 50 && totalAmount <= 100) {
    console.log('Je krijgt een gratis portie nachos!');
} else if (totalAmount > 100) {
    console.log('Je krijgt een gratis fles champagne!');
}