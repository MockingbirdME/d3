import Trait from './Trait.js';

const skillProficiencyLevels = [
  {
    name: 'Novice',
    text: 'The character may make skill checks using the <SKILL> skill without suffering an untrained penalty die.',
    cost: 2,
    requirements: {
      text: '1 other trait from this tree.'
    }
  },
  {
    name: 'Skilled',
    text: 'The character adds a skilled bonus die to the die pool of any skill checks they make using the <SKILL> skill.',
    cost: 3,
    requirements: {
      text: '5 other traits from this tree.'
    }
  },
  {
    name: 'Expert',
    text: 'When the character makes a skill check using <SKILL> skill increase the skill check result by 1 for each skilled bonus dice in the final result.',
    cost: 2,
    requirements: {
      text: '11 other traits from this tree.'
    }
  },
  {
    name: 'Master',
    text: 'The character adds an additional skilled bonus die to the die pool of any skill checks they make using the <SKILL> skill.',
    cost: 2,
    requirements: {
      text: '19 other traits from this tree.'
    }
  }
];

function requiredTraitsForSkillCheckCost(cost) {
  switch (cost) {
    case 2:
      return 2;
    case 3:
      return 5;
    case 5:
      return 8;
    case 8:
      return 12;
    default:
      return 1;
  }
}


export default class TraitTree {
  static generateDabblerTraitConfig(skillCheckName) {
    return {
      name: `${skillCheckName} Dabbler`,
      text: `The character may chose one non-luck penalty die in their die pool when they make a ${skillCheckName} skill check, remove that die from the pool before rolling.`,
      cost: 1
    };
  }

  static generateTraitConfig({name, effect, cost, requirements}) {
    return {
      name,
      text: effect?.text,
      cost,
      requirements: `${requirements ? `${requirements} and ` : ''}${requiredTraitsForSkillCheckCost(cost)} other traits from this tree.`
    };
  }

  constructor({name = 'Unknown Skill', isSkillTree = false, skillChecks = [], traits = []}) {
    this._traits = [];
    this._name = name;

    if (isSkillTree) {
      for (const skillProficiencyLevel of skillProficiencyLevels) {
        const {name: proficiencyLevel, text: baseText} = skillProficiencyLevel;

        this.addTrait({...skillProficiencyLevel, name: `${name} proficiency, ${proficiencyLevel}`, text: baseText.replace('<SKILL>', name)});
      }
    }

    for (const skillCheck of skillChecks) {
      this.addTrait(TraitTree.generateDabblerTraitConfig());
      for (const cost of [2, 5]) {
        const name = `${skillCheck.name} ${cost === 2 ? 'Specialist' : 'Savant'}`;
        effect = {
          text: `Gain ${cost === 2 ? 'one additional success on successful' : '+1 to'} ${skillCheck.name} skill checks.`
        }
        this.addTrait(TraitTree.generateTraitConfig({name, effect, cost}));
      }
    }

    for (const trait of [...skillChecks, recurringTraits]) {
      costs = trait.costs || [2, 3, 5, 8];
      for (const cost of costs) {
        this.addTrait(TraitTree.generateTraitConfig({...trait, cost}));
      }
    }
  }

  addTrait(traitConfig) {
    this._traits.push(new Trait(traitConfig));
  }
}
