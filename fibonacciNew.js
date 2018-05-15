// Creating Fibonacci using Memoization

// Output to the console
console.log(`Enter the value for n to see the Fibonacci sequence:`);

// Setting input format to utf8
process.stdin.setEncoding('utf8');

// Getting User Input from the console
process.stdin.on('data', (n) => {
        const memo = {};
        const f = (n) => {
            let value;
            (n in memo) ? value = memo[n] : ((n === 0 || n === 1) ? value = n : value = f(n-1) + f(n-2));
                    memo[n] = value;
            return value;
        }
        return (console.log(`The Fibonnacci of ${n} is ${f(n)}`));
});
