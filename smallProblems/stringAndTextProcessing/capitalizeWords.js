function wordCap(str) {
  let arr = str.split(' ').map(word => {
    let innerArr = word.split('');
    innerArr[0] = innerArr[0].toUpperCase();

    return innerArr.join('');
  }).join(' ');
  console.log(arr);
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'