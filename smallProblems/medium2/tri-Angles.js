function triangle(angle1, angle2, angle3) {
  let arr = [angle1, angle2, angle3];
  let oneEighty = angle1 + angle2 + angle3;
  arr.forEach(angle => {
    if (angle === 0) {
      oneEighty = 0;
    }
  });
  if (oneEighty !== 180) {
    console.log('invalid');
  } else {
    // eslint-disable-next-line no-lonely-if
    if (angle1 === 90 || angle2 === 90 || angle3 === 90) {
      console.log('right');
    } else if (angle1 < 90 && angle2 < 90 && angle3 < 90) {
      console.log('acute');
    } else {
      console.log('obtuse');
    }
  }
}

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"