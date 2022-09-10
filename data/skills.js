const teamworkSkillCheck = 'Multiple character\'s can work together allowing for one skill check that uses the best proficiency and attribute bonus, and the sum of additional successes gained from traits of all characters involved (max twice the additional success bonuses of the character with the most additional success bonus).';

export const example = {
  name: 'example',
  skillChecks: [
    {
      name: 'skill check foo',
      primaryAttribute: ['Perception'],
      teamworkPossible: false,
      description:
        '',
      difficulty:
        '',
      requiredSuccesses: '',
      failure:
        '',
      nearSuccess: '',
      completeSuccess:
        '',
      additionalSuccesses:
        ''
    }
  ],
  isSkillTree: true,
  traits: [
    {name: "repetitive trait", effect: {text: ""}}
    {name: "One off trait", effect: {text: ""}, costs: [2]},
    {name: "One off trait with requirement", effect: {text: ""}, requirements: "One off trait", costs: [5]}
  ],
};

export const awareness = {
  name: 'Awareness',
  skillChecks: [
    {
      name: 'Alertness',
      primaryAttribute: ['Perception'],
      teamworkPossible: false,
      description:
        'when there\'s something the character may not notice they should be asked to make this check to see if they become aware of it.',
      difficulty:
        '5+ various phenomena or the stealth check total of a sneaking/hiding character.',
      requiredSuccesses: 'varies based on what it is they might be noticing.',
      failure:
        'the character fails to notice any signs of whatever they may have noticed, if they failed to notice danger they are surprised and flat footed when it acts and have their initiative reduced by 10.',
      nearSuccess: 'the character notices some clue that might lead them to further look for the item or or investigate the event that triggered this check. If the check was made to become aware of danger they are surprised and flat footed when it acts.',
      completeSuccess:
        'the character is aware of whatever caused the check to be made, if the check was made for some kind of danger they become aware of it at the last possible moment and are surprised when it acts.',
      additionalSuccesses:
        'for each additional success the character notices the danger or event sooner allowing for one additional round to react.'
    },
    {
      name: 'Investigate',
      primaryAttribute: ['Perception'],
      teamworkPossible: true,
      description:
        'the character looks for clues or information in an area related to a specific topic declared by the player.',
      difficulty: 'set by the GM based on how difficult the clues are to find.',
      requiredSuccesses:
        'if there\'s more than one potential clue the GM will set a number of required successes for various additional clues.',
      failure:
        'no clue was found, the character may not try again without additional help.',
      nearSuccess:
        'N/A, while this skill check does have required successes they are for determining additional found clues.',
      completeSuccess:
        'the easiest to find clue was discovered by the character(s).',
      additionalSuccesses:
        'the number of additional successes will determine how many additional clues are found or, if there are successes left over after all clues are found, will reduce the amount of time that was required to find them all.'
    },
    {
      name: 'Search',
      primaryAttribute: ['Perception'],
      teamworkPossible: true,
      description:
        'the character searches an area for money, valuables, other specific items of interest, or hiding characters.',
      difficulty:
        'set by the GM based on how difficult the items/characters that could be found are to find.',
      requiredSuccesses:
        'if there\'s more than one potential item/loot/character to find the GM will set a number of required successes for various additional searched for things.',
      failure:
        'no item was found, the character may not try again without additional help.',
      nearSuccess:
        'N/A, while this skill check does have required successes they are for determining additional found items/characters.',
      completeSuccess:
        'the easiest to find item/characters was discovered by the character. Add the character\'s secondary skill rank as extra successes for finding additional items/characters.',
      additionalSuccesses:
        'the number of additional successes will determine how many additional items/characters are found, if there are successes left over after all items/characters are found, will reduce the amount of time that was required to find them all.'
    },
    {
      name: 'Sense Motive',
      primaryAttribute: ['Perception', 'Mind'],
      teamworkPossible: false,
      description: 'you attempt to get a read on a character you are interacting with or observing for at least one minute.',
      difficulty: 'set by the GM based on the target\'s ability to hide their true motivations, and if they are trying to.',
      requiredSuccesses: 'varies by the motivation being hidden, most often equal to the difficulty.',
      failure: 'you misread a targets motivations, getting the wrong impression entirely.',
      nearSuccess: 'you are not sure you have read the target\'s motiviations well but are inclined to take them at face value.',
      completeSuccess: 'you get a feel for the target\'s true motivations though don\'t necessarly decern all the specifics of idenitfy what parts of what they\'ve said are lies and what is truth.',
      additionalSuccesses: 'the GM will provide additinal clerity based on the number of extra successes and may even offer to answer truthfully specific yes/no questions the character asks about what if certain statements are true or not.'
    },
    {
      name: 'Size Up',
      primaryAttribute: ['Perception', 'Mind'],
      teamworkPossible: true,
      description: 'you attempt to get a read on specific strengths and weaknesses of a character you are observing for at least one minute.',
      difficulty: 'set by the GM based on how obvious the target\'s abilities are and if they are trying to hide them.',
      requiredSuccesses: 5,
      failure: 'you misread a targets base abilities, getting the wrong impression entirely.',
      nearSuccess: 'you are unable to get a good read on any particular ability in question but can determine the targets highest and lowest attribute (select randomly on a tie).',
      completeSuccess: 'you get a feel for the target\'s attribute strenght order and how one attribute of the characters choice compares to their own (lower, higher, more than double, etc.)',
      additionalSuccesses: 'for each additional success the character may ask for an additional comparison on one attribute or skill proficiency, these must be limited to skills the character has observed the target performing or otherwise has reason to infer (you may be able to infer a target\'s melee combat skill based on the way they hold themselves and how they react when a thug got in their face but cannot infer their magical ability if you\'ve only observed them performing mundane tasks).'
    }
  ],
  isSkillTree: true,
  traits: [
    {name: "Combat Awareness", effect: {text: "Gain +1 ranged defense bonus"}},
    {name: "Fast Reflexes", effect: {text: "Gain +1 initiative"}},
    {name: "Inner Calm", effect: {text: "+1 defense when you take the Steady Oneself combat action"}},
    {name: "Defensive Camper", effect: {text: "While conscious characters attempting to sneak past or surprise you gain a difficulty penalty die to their skill checks"}, costs: [2]},
    {name: "Alert", effect: {text: "While conscious characters attempting to sneak past or surprise you gain a difficulty penalty die to their skill checks"}, costs: [3]},
    {name: "Always on Guard", effect: {text: "Being asleep or engaged in distracting or strenuous activity no longer prevents you from making alertness checks; this does not allow you to make such checks if your unconscious due to damage, poison, magic, or other exceptional effects"}, requirements: "Defensive Camper", costs: [5]},
    {name: "Master Observer", effect: {text: "When an unexpected combat begins you may take one action before initiative is rolled, when some action or event that leads to a limited action event triggers you may take one action before the count begins.  "}, costs: [8]}
  ],
};

export default [
  awareness
]
