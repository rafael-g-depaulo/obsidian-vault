export type Attb = 'STR' | 'DEX' | 'CON' | 'INT' | 'SEN' | 'PRE'

const AttbFullnames: { [key in Attb]: string } = {
  STR: 'Strength',
  DEX: 'Dexterity',
  CON: 'Constituition',
  INT: 'Inteligence',
  SEN: 'Sensibility',
  PRE: 'Presence',
}

export const getAttbName = (stat: Attb) =>
  AttbFullnames[stat] ?? `ERROR INVALID ATTRIBUTE"${stat}"`
