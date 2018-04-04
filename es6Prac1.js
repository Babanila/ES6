
// Rest operators
function person(firstName, lastName, ...colors) {
    let phrase = colors.length === 0 ? 'no colors' :
        colors.length === 1 ? 'the color ' + colors[0]:
            'the colors ' + colors.join(' and ');

    console.log(firstName, lastName, 'likes', phrase + '.');
}

person('John', 'Doe');

person('Markus', 'Strongman', 'yellow');

person('Jenny', 'Lee', 'pink', 'blue');

person('Ola', 'Williams', 'pink', 'blue', 'purple');


/*
// Rest operators
function person(firstName, lastName, ...colors) {
    let phrase = colors.length
    if(phrase === 0){
        console.log(firstName, lastName, 'likes no color.');
    }else if(phrase === 1){
        console.log(firstName, lastName, 'likes '+ colors + '.');
    }
    else if(phrase === 2){
        console.log(firstName, lastName, 'likes ' + colors.join(' and ') + '.');
    }
    else
    console.log(firstName, lastName, 'likes ' + colors.join(', ' ) + '.');
}

person('John', 'Doe');

person('Markus', 'Strongman', 'yellow');

person('Jenny', 'Lee', 'pink', 'blue');

person('Ola', 'Williams', 'pink', 'blue', 'purple');

*/