
// Rest operators
function person(firstName, lastName, ...colors) {
    let phrase = colors.length === 0 ? 'no colors' :
        colors.length === 1 ? 'the color ' + colors[0]:
            'the colors ' + colors.join(' and ');
    console.log(`${firstName} ${lastName} likes ${phrase} .`);
}

person('John', 'Doe');

person('Markus', 'Strongman', 'yellow');

person('Jenny', 'Lee', 'pink', 'blue');

person('Ola', 'Williams', 'pink', 'blue', 'purple');

