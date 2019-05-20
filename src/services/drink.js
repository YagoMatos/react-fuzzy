const maxBetweenDregree = (a, b, c) => {
  return Math.max(a, Math.max(b, c));
};

const minBetweenDregree = (a, b, c) => {
  return Math.min(a, Math.min(b, c));
};

export const drinkValue = (soft, weak, strong) => {
  let value = 0;

  if (weak === 1) {
    return (value = '15,00'); //palate: 'Fraco' };
  }
  if (soft === 1) {
    return (value = '20,00'); //palate: 'Suave'};
  }
  if (strong === 1) {
    return (value = '25,00'); //palate: 'Forte'};
  }
};

export const drinkPalate = (soft, weak, strong) => {
  let palate = 0;

  if (weak === 1) {
    return (palate = 'Fraco');
  }
  if (soft === 1) {
    return (palate = 'Suave');
  }
  if (strong === 1) {
    return (palate = 'Forte');
  }
};

export const drinkStrongDegree = (run, ice, softDrink) => {
  const degreeA = minBetweenDregree(ice.pertinence, softDrink.strong, run.soft);
  const degreeB = minBetweenDregree(
    ice.pertinence,
    softDrink.strong,
    run.strong
  );
  const degreeC = minBetweenDregree(ice.pertinence, softDrink.soft, run.soft);
  const degree = maxBetweenDregree(degreeA, degreeB, degreeC);
  return degree;
};

export const drinkWeakDegree = (run, ice, softDrink) => {
  const degreeA = minBetweenDregree(ice.pertinence, softDrink.weak, run.weak);
  const degreeB = minBetweenDregree(ice.pertinence, softDrink.weak, run.soft);
  const degreeC = minBetweenDregree(ice.pertinence, softDrink.soft, run.weak);
  const degree = maxBetweenDregree(degreeA, degreeB, degreeC);
  return degree;
};

export const drinkSoftDegree = (run, ice, softDrink) => {
  const degreeA = minBetweenDregree(ice.pertinence, softDrink.strong, run.weak);
  const degreeB = minBetweenDregree(ice.pertinence, softDrink.soft, run.soft);
  const degreeC = minBetweenDregree(ice.pertinence, softDrink.weak, run.strong);
  const degree = maxBetweenDregree(degreeA, degreeB, degreeC);
  return degree;
};
