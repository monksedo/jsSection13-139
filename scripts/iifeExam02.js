///////////////////////////////////////////////////////////////////////
// Block and IIFEs
//

{
    const a = 100;
    let b = 200;
    let c = a + b;
    console.log('a + b = ' + c);
}
console.log('a + b = ' + c); // c is not accessible outside of the block;