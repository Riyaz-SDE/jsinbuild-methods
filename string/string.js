// Length property
    let x = `qwerty`
    console.log(x.length); 
    console.log(x[x.length-1]); //y
// charAt
    console.log(x.charAt(2)); //3
// searching
// ---------       |         |         |
    //   012345678911234567892123456789312345678 
    let y = `this code has code undefined value code`
    console.log(y.indexOf('This'));console.log(y.lastIndexOf('This')); //-1 case sensitive

    console.log(y.indexOf(`code`));console.log(y.lastIndexOf(`code`)); //5,35
    console.log(y.indexOf(`code`,5));console.log(y.lastIndexOf(`code`,35)); 
    //5,35 first iterate forward if doesnt then check first in reverse order
    console.log(y.indexOf(`code`,6));console.log(y.lastIndexOf(`code`,34)); // 14,14
    console.log(y.indexOf(`code`,-1));console.log(y.lastIndexOf(`code`,-1)); // always 5,-1 if negative
    console.log(y.indexOf(``));console.log(y.lastIndexOf(``)); // 0 ,30
    console.log(y.indexOf());console.log(y.lastIndexOf()); // 19,19
// subString() vs slice()
    // slice takes negative number but subString take it has 0
    const s = `the morning is upon us`
    console.log(s.slice(12),s.substring(12)); //is upon us 
    console.log(s.slice(-11),s.substring(-11));//is upon us,all
    console.log(s.slice(23),s.substring(23));//''
    console.log(s.slice(13,16),s.substring(13,16));//s u
    console.log(s.slice(16,13),s.substring(16,13));//'',s u
    console.log(s.slice(-8,-4),s.substring(-8,-4));//upon , ''
    console.log(s.slice(-8,4),s.substring(-8,4));//'',the
    console.log(s.slice(8,-4),s.substring(8,-4));// ing is upon,the morn

// split
    // s.split() // s
    // s.split(' ',2) // first 2 elements in array
    // s.split(' ',0) // []

// includes
    //s.includes('morning') //true
    // s.includes('morning',11/*(startfrom)*/) //false
// startsWith,endsWith
    const str = `Cast are more`
    console.log(str.startsWith('Cast')); // true
    console.log(str.startsWith('are')); // false
    console.log(str.startsWith('are'),4); // true
    console.log(str.endsWith('more')); // true
    console.log(str.endsWith('mor')); // false
    console.log(str.endsWith('are',9/*length */)); // true
//concat,repeat,trimstart,trim,trimEnd
    let coc = str.concat(" ",str)
    console.log(coc);
    let r = 'abc'
    r.repeat(0);r.repeat(2) //'',abcabc
    // /*r.repeat(1/0) */;r.repeat(-1) // error
    // padStart(),padEnd()
    // string.padStart(padlength,padString)
    console.log('abc'.padStart(10));console.log('abc'.padEnd(10));// -------abc,abc-------
    console.log('abc'.padStart(10,'foo'));console.log('abc'.padEnd(10,'foo'));// foofoofabc,abcfoofoof;
    console.log('abc'.padStart(10,'12345678'));console.log('abc'.padEnd(10,'12345678'));// 1234567abc,abc1234567;
// localcompare
    // b.localcompare('a','eng',{sensitive:'base})
    // a placed after b so return 1
    // a.localCompare('b') return -1
// search
    // string.search(regex) // return index or -1
// match , matchAll
    let words = `the rain in SPAIN stays mainly in the plain`
    words.match('ain') // [ain,index:5,input:words,groups:undefined]
    words.match('/ain/g') // [ain,ain,ain]
    words.match('/ain/gi') // [ain,AIN,ain,ain]
    words.match('/w/') // null
    // matchall is similar method  except it will give all match and return iterator

// replace,replaceAll
    let txt = 'Mr Blue has a blue house and a blue car';
    console.log(txt.replace('blue','red'));
    console.log(txt.replace('blue',(match) => {return match.toUpperCase()}));
    console.log(txt.replace('/blue/gi',(match) => {return match.toUpperCase()}));

// charCodeAt (UTF-16) 0->65535 , charPointAt (UNICODE) 0->65535-> more
    let code = "hi 👋"
                // ^-- 2 byte character
    console.log(code.charCodeAt(0),code.codePointAt(0),code.length);
    console.log(code.charCodeAt(1),code.codePointAt(1));
    console.log(code.charCodeAt(2),code.codePointAt(2));
    console.log(code.charCodeAt(3)/*broken char */,code.codePointAt(3));
    console.log(code.charCodeAt(4)/*broken char */,code.codePointAt(4)/*broken char */);
// fromCharCode , FromCodePoint are opposite to At
    console.log(String.fromCharCode(79),String.fromCodePoint(79));
    console.log(String.fromCharCode(55357),String.fromCodePoint(55357));
    console.log(String.fromCharCode(128075),String.fromCodePoint(128075));
    console.log(String.fromCharCode( 104,105,32,55357,56395),String.fromCodePoint( 104,105,32,55357,56395));
//normalize