import TraitTree from './Classes/TraitTree.js';

const testTraitTreeConfig = {
  name: 'Awareness',
  isSkillTree: true,
  recurringTraits: [
    {name: 'Alertness, Skill Focus', effect: {text: 'Increase the check\'s range by 1'}},
    {name: 'Investigate, Skill Focus', effect: {text: 'Increase the check\'s range by 1'}},
    {name: 'Search, Skill Focus', effect: {text: 'Increase the check\'s range by 1'}},
    {name: 'Sense Motive, Skill Focus', effect: {text: 'Increase the check\'s range by 1'}},
    {name: 'Size Up, Skill Focus', effect: {text: 'Increase the check\'s range by 1'}},
    {name: 'Combat Awareness', effect: {text: 'Gain +1 to your ranged defense bonus'}},
    {name: 'Fast Reflexes', effect: {text: 'Gain +1 to your initiative'}},
    {name: 'Inner Calm', effect: {text: ' Recover +1 defense when you take the Steady Oneself combat action'}}
  ],
  oneOffTraits: [
    {name: 'Defensive Camper', effect: {text: 'You may make an alertness check when not actively keeping watch provided you are conscious and not engaged in strenuous or overly distracting activity such as training or study.', cost: 2}},
    {name: 'Alert', effect: {text: 'While conscious characters attempting to sneak past or surprise you gain a difficulty penalty die to their skill checks', cost: 3}},
    {name: 'Always on Guard', effect: {text: 'Being asleep or engaged in distracting or strenuous activity no longer prevents you from making alertness checks; this does not allow you to make such checks if your unconscious due to damage, poison, magic, or other exceptional effects', cost: 5, requires: 'Defensive Camper'}},
    {name: 'Master Observer', effect: {text: 'When an unexpected combat begins you may take one action before initiative is rolled, when some action or event that leads to a limited action event triggers you may take one action before the count begins.', cost: 8}}
  ]
};

const testTraitTree = new TraitTree(testTraitTreeConfig);

console.log(JSON.stringify(testTraitTree, null, 2));
console.log(testTraitTree._traits.length);
