function doubleAfter5Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x * 2);
        }, 5000);
    });
}

async function addAsync(x) {
    const a = await doubleAfter5Seconds(10);
    const b = await doubleAfter5Seconds(20);
    const c = await doubleAfter5Seconds(30);
    return x + a + b + c;
}



doubleAfter5Seconds(10).then((sum) => {
    console.log(sum);
});


addAsync(10).then((sum) => {
    console.log(sum);
});