const maxBetweenDregree = (a, b, c) => {
  return Math.max(a, Math.max(b, c));
};

const minBetweenDregree = (a, b, c) => {
  return Math.min(a, Math.min(b, c));
};

export const drinkValue = (soft, weak, strong) => {
  // eslint-disable-next-line no-unused-vars
  let value = 0;

  // if all are the same
  if (soft === strong && strong === weak && strong !== 0) {
    return (value = '25,00'); //palate: 'Forte'};
  }

  // check some palate is the same
  if (soft === weak && weak !== 0) {
    return (value = '20,00'); //palate: 'Suave'};
  }

  if (strong === weak && weak !== 0) {
    return (value = '25,00'); //palate: 'Forte'};
  }

  if (strong === soft && soft !== 0) {
    return (value = '25,00'); //palate: 'Forte'};
  }

  // individual tests
  if (weak !== 0) {
    return (value = '15,00'); //palate: 'Fraco' };
  }
  if (soft !== 0) {
    return (value = '20,00'); //palate: 'Suave'};
  }
  if (strong !== 0) {
    return (value = '25,00'); //palate: 'Forte'};
  }

  // if is not cuba livre
  return (value = '30,00');
};

export const drinkPalate = (
  soft,
  weak,
  strong,
  iceQtd,
  runQtd,
  softQtd,
  softName
) => {
  // eslint-disable-next-line no-unused-vars
  let palate = 0;

  // if all are the same
  if (soft === strong && strong === weak && strong !== 0) {
    return (palate = 'Paladar do Drink: Forte');
  }

  // check some pertinence is the same
  if (soft === weak && weak !== 0) {
    return (palate = 'Paladar do Drink: Suave');
  }
  if (strong === weak && weak !== 0) {
    return (palate = 'Paladar do Drink: Forte');
  }
  if (strong === soft && soft !== 0) {
    return (palate = 'Paladar do Drink: Forte');
  }

  // individual tests
  if (weak !== 0) {
    return (palate = 'Paladar do Drink: Fraco');
  }
  if (soft !== 0) {
    return (palate = 'Paladar do Drink: Suave');
  }
  if (strong !== 0) {
    return (palate = 'Paladar do Drink: Forte');
  }

  // if is not cuba livre
  return notDrink(soft, weak, strong, iceQtd, runQtd, softQtd, softName);
};

const notDrink = (soft, weak, strong, iceQtd, runQtd, softQtd, softName) => {
  const resume = 'Não é Cuba Livre! Devido as quantidades inadequadas de: ';
  let qtd = {
    run: '',
    ice: '',
    soft: '',
  };

  if (strong === 0 && weak === 0 && soft === 0) {
    if (iceQtd < 20 || iceQtd > 20) {
      qtd.ice = '- Gelo -';
    }
    if (runQtd < 10 || runQtd > 30) {
      qtd.run = ' Run -';
    }
    if (softName === 'coke') {
      if (softQtd < 50 || softQtd > 60) {
        qtd.soft = ' Coca-Cola';
      }
    }
    if (softName === 'pepsi') {
      if (softQtd < 60 || softQtd > 70) {
        qtd.soft = ' Pespi';
      }
    }
  }
  return resume + qtd.ice + qtd.run + qtd.soft;
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
