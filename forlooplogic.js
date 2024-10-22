// const char = "abc"
// let result = Math.floor(Math.random()*char.length ) 
// console.log(result);

const char = "ABCDEFGHIJKLMNOPQRSUTVWXYZabcdefghijklmnopqrstuvwxyz"
let pass =""
let length = 8

for (let i = 0; i < length; i++){
    const result  = Math.floor(Math.random()*char.length);
    pass += char[result]
}

console.log("Password:", pass);

// str[result]: This is more modern and concise but not available in very old versions of JavaScript (pre-ECMAScript 5).
// str.charAt(result): This has been part of JavaScript for a long time and works even in older environments.


// useCallback se memoization mein rakh liya gya 
// useCallback is a React Hook that lets you cache a function definition between re-renders.
// mtlb ek function mein saari memory ko rakh liya hai or jb bhi jrurate hogi or jitne ki toh waha se utha lenge or baki ko chor denge.
// cache matlb memory
//The useCallback ensures the function is memoized and only recreated if length, numberAllowed, or charAllowed change.

// useEffect hook
//  