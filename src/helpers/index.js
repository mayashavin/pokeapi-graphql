import colorPalettes from '../assets/colorPalettes.json';

export const normalizeType = ({slot, type}) => ({ slot, name: type.name })

export const normalizeTypes = (types) => types.map(type => normalizeType(type))

export const sort = (list, field, desc = false) => list.sort((itemA, itemB) => desc ? itemB[field] - itemA[field] : itemA[field] - itemB[field])

export const getAvatarUrl = (id) => `https://pokeres.bastionbot.org/images/pokemon/${id}.png`

export const normalizeHeight = (height) => {
  const heightInMeter = normalizeMeasurement(height, 10, 'm');
  const ftRatioPerMeter = 3.28;
  const ftHeight = Math.floor(ftRatioPerMeter * height);
  const heightInFoot = normalizeMeasurement(ftHeight, 10, 'ft');
  return {
    value: height,
    in_meter: heightInMeter,
    in_feet: heightInFoot
  };
}

export const normalizeWeight = (weight) => {
  const weightInKg = normalizeMeasurement(weight, 10, 'kg');
  const weightToLbs = Math.floor(weight * 2.20462);
  const weightInLbs = normalizeMeasurement(weightToLbs, 10, 'lbs');
  return {
    value: weight,
    in_kg: weightInKg,
    in_lbs: weightInLbs
  }
}

export const normalizeMeasurement = (measurement, divider, unit) => {
  const remainder = measurement % divider;
  const quotient = Math.floor(measurement / divider);

  return `${quotient}${remainder > 0 ? `.${remainder}` : ''}${unit}`;
};

export const normalizeAbilities = (abilities) => abilities.map(({ is_hidden, slot, ability }) => ({
  is_hidden,
  slot,
  name: ability.name,
}))

export const themeColorBasedOnType = (type) => ({
  light: colorPalettes.light[type] || colorPalettes.default,
  dark: colorPalettes.dark[type] || colorPalettes.default,
})
