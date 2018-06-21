function orbitalPeriod(arr) {
  const standardGravitationalParam = 398600.4418;
  const earthRadius = 6367.4447;

  arr.map(object => {
    const semiMajorAxis = object.avgAlt + earthRadius;

    object.orbitalPeriod = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(semiMajorAxis, 3) / standardGravitationalParam)
    );

    delete object.avgAlt;
  });

  return arr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));