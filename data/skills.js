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
      difficultyExamples:
        `
          4 -
          7 -
          10 -
          13 -
          16 -
          19 -
          22 -
        `,
      criticalFailure: '',
      conditionalFailure: '',
      nearSuccess: '',
      success: '',
      criticalSuccess: '',
    }
  ],
  isSkillTree: true,
  traits: [
    {name: "repetitive trait", effect: {text: ""}}
    {name: "One off trait", effect: {text: ""}, costs: [2]},
    {name: "One off trait with requirement", effect: {text: ""}, requirements: "One off trait", costs: [5]}
  ],
};

export const animalHandling = {
  name: 'Animal Handling',
  description:
    "How familiar is the character with animals, particularly domestic ones. This skill should be used when dealing with an animal that has a chance of being controlled or calmed.",
  skillChecks: [
    {
      name: 'Befriend',
      primaryAttribute: ['Mind or Perception'],
      teamworkPossible: false,
      description:
        'coaxing animals to be friendly towards the character and potentially even taming them.',
      difficultyExamples:
        `
          4 - gain a loyal companion by giving your dog a treat every time you see them for a year
          7 - gain the trust of a stray by giving it food every day for a week
          10 - get a wild tomcat to keep your barn free of mice by setting out a bowl of milk each night
          13 - stop a she wolf from attacking when you are returning its lost pup
          16 - get the local crow population to look out for you by regularly feeding them nuts and berries
          19 - get a wild bear to safely camp with you for the night by sharing your dinner
          22 - get a board to stop mid charge by making soothing noises and offering ear scratches
        `,
      criticalFailure: 'the animal gets more agressive, not less (ex. the bear goes into a rage and attacks when you offer it a bowl of soup)',
      conditionalFailure: 'the animal does not respond to your desired friendship but doesn\'t become outright hostile (ex. the crows take your offered berries, they may even leave some trinkets in return but don\'t warn you when your house is being broken into)',
      nearSuccess: 'the animal warms to you but now in the way you hoped (ex. the stray dog begins following you everywhere at small distance, including attempting to enter buildings thinking you might feed it but not becoming overly friendly in the process)',
      success: 'the animal is less hostile, maybe even friendly, at least for a time or until the situation changes (ex. the boar aborts its charge but doesn\'t hesitate to attack again when your party menber shoots an arrow in its general direction hoping to scare it off)',
      criticalSuccess: 'the animal\'s attitude towards you increases more than you\'d hoped for (ex. the she wolf regularly visits your camps while traveling in its territory, it might even warn you of danger or join you in a fight as thanks for saving its young)
    },
    {
      name: 'Ride/Drive',
      primaryAttribute: ['Body, Perception, or Reflexes'],
      teamworkPossible: false,
      description:
        'charging on a warhorse or getting the donkey pulling your cart to willingly traverse a swaying bridge the ride/drive skill is used to determine what animals will obey your command while you are ride them or drive the vehicle they\'re hooked up to.',
      difficultyExamples:
        `
          4 - riding a trained pony at a walk from one villiage to another
          7 - getting the donkey pulling your cart to continue up the hill instead of stopping to eat a fallen apple
          10 - staying on your mount when it is startled by a branch that looks like a snake
          13 - participating in a formation calvary charge
          16 - staying mounted and controlling your steed after it's been shot with an arrow
          19 - controlling a wounded elephant in battle
          22 - convincing an untrained rhino to charge your enemy with you on its back
        `,
      criticalFailure: 'the animal fails to obey your command and causes some hardship (ex. your mount started by what it thought was a snake throws you and kicks you by accident on the way down)',
      conditionalFailure: 'the animal fails to obey your command but does something generally unharmful (ex. the elephant rampages through the battlefield but mostly damaging your enemy and doesn\'t attempt to throw you)',
      nearSuccess: 'the animal does some of what you asked for but not entirely (ex. the rhino trots off away from danager but doesn\'t seem to be bothered by your presense and lets you ride it)',
      success: 'the animal does exactly as commanded',
      criticalSuccess: 'the animal exceeds your expectations (ex. your steed takes the arrow in stride, it doesn\'t throw you and continues its charge), in combat a critical success on a ride check to get your mount to move means you can get them to move without rolling for an additional round for every 3 additional succeses you rolled.',
    },
    {
      name: 'Train/Command',
      primaryAttribute: ['Mind or Perception'],
      teamworkPossible: true,
      description:
        'training and commanding animals to act as the character wishes.',
      difficultyExamples:
        `
          4 - teach your own dog to sit while you hold a treat
          7 - teach a domestic horse to carry a rider
          10 - command an unknown dog to sit
          13 - command a circus animal to do a trick it hasn\'t practiced
          16 - teach a wild horse to let you ride it
          19 - command a charging stalion you don\'t know to stop
          22 - teach a shark to follow your ship as you sail
        `,
      criticalFailure: 'the animal doesn\'t learn or follow the command and becomes more stuborn or tries to do something unwanted (ex. the horse you\'re training becomes obstinant and has a higher ride difficutly in the future)',
      conditionalFailure: 'the animal doesn\'s learn or follow the command but still attempts to please you (ex. the circus animal confused by the new command reverts to one of its practiced tricks)',
      nearSuccess: 'the animal learns or performs the command but not exactly as desired (ex. the wild horse is happy for you to ride it but doesn\'t listen to your directions while on its back)',
      success: 'the animal learns or performs the expected activity',
      criticalSuccess: 'the animal exceeds all expectations on the training or command (ex. the shark you\'ve trained to follow your ship actively attacks sailors from other vessles you\'re battling against but leaves your sailers alone)',
    }
  ],
  isSkillTree: true,
  traits: [
    {name: "Animal Specialist", effect: {text: "Choose one type of animal (horse, dog, hawk, etc.) and gain a bonus die to all Animal Handling skills checks when working with only that animal type. The same animal type cannot be chosen twice."}},
    {name: "Something about my Smell", effect: {text: "Gain +1 to all Befriend skill checks."}},
    {name: "Born to the Saddle", effect: {text: "Gain +1 to all Ride/Drive skill checks."}},
    {name: "Animal Whisperer", effect: {text: "Gain +1 to all Train/Command skill checks."}},
    {name: "Smell\'s like my Trainer", effect: {text: "When attempting to interact with a trained animal you may spend one permenant willpower to reroll one die in your Animal Handling skill check"}, costs: [2]},
    {name: "One with Nature", effect: {text: "When attempting to interact with a wild animal you may spend one permenant willpower to reroll one die in your Animal Handling skill check"}, costs: [3]},
    {name: "Animal\'s are Easy", effect: {text: "Your Smell\'s like my Trainer and One with Nature traits now only require the expenditure of a temporary willpower"}, requirements: "Smell\'s like my Trainer or One with Nature", costs: [5]}
    {name: "People are the problem", effect: {text: "When attempting to interact with an animal and no other people are in the area may add an additional skilled bonus die to your Animal Handling skill check"}, costs: [8]},
  ],
};

export const awareness = {
  name: 'Awareness',
  description: 'The quintessential perception skill, is used when looking for loot or information as well as noticing threats both passively and when actively looking for them.',
  skillChecks: [
    {
      {
        name: 'Alertness',
        primaryAttribute: ['Perception'],
        teamworkPossible: false,
        description:
          'when there\'s something the character may not notice they should be asked to make this check to see if they become aware of it.',
        difficultyExamples:
          `
            4 - notice the door to your office open and close while you're working
            7 - notice the guard standing quietly in the corner when you enter a mid sized room
            10 - notice your bedroom window is open even though you closed it before you went to sleep
            13 - notice the rogue like figure your arguing with pulling a knife
            16 - notice a trip wire in a dimly lit hallway
            19 - notice a seriese of small holes in the wall, just large enough for darts to fly out of
            22 - notice that a cricket in a guarden is actively listening in to your conversation
          `,
        criticalFailure: 'You are completely unaware of the thing to notice, if it attacks you are surprised and flat footed otherwise you will not notice it unless it is pointed out to you',
        conditionalFailure: 'You fail to notice the importance of the thing but may see it as something less interesting or fail to notice it entirely (ex. you notice the guard in the corner but take them for a common observer, failing to realize they are a potential threat, you notice the quiet cricket and find it fastinating and bring it with you where it can listen in on your conversation more easily); if it is dangerous you are surprised when it acts',
        nearSuccess: 'You notice the thing but misinterpret the importance (ex. you think a trip wire a spider web and may choose to brush it away or you notice the cricket and decide it grosses you out but without realizing it\'s actively watching you); if it\'s dangerous you are surprised',
        success: 'You notice the thing',
        criticalSuccess: 'The GM may give you additional details around what this thing is, or if it\'s dangerous give you time to act first based on how well you critically succeeded.',
      },
      {
        name: 'Investigate',
        primaryAttribute: ['Perception'],
        teamworkPossible: true,
        description:
          'the character looks for clues or information in an area related to a specific topic declared by the player.',
        difficultyExamples:
          `
            4 - look for signs that the owner of a house is ok when there's a massive puddle of blood in the middle of the kitchen
            7 - attempt to determine who ate the stolen cookie when a child has crumbs on their face
            10 - find hints of an upcoming war by talking to the sellers at a local market (the price of cheese has gone up)
            13 - induce that the butler couldn't have done it because he has a smudge of butter on his cuff and even though the crime happened in the kitchen there's no way a butler wouldn't have thoroughly cleaned his person if he had any hint he might need to
            16 - get some basic concept of what a mad alchemist had been working on by flipping through his journals filled with pictures of his nightmares
            19 - dust a recently cleaned magical sigal to determine what order the symbols on it need to be pressed to activate
            22 - identify a tastelest, odorless, colourless poison in a glass of water when there's no obviously poisoned person nearby
          `,
        criticalFailure: 'You do not find the clue you\'re looking for but you may find a false clue leading you in the wrong direction',
        conditionalFailure: 'you may not have identified the meaning of a clue but while searching you might have found something unexpected that the GM provides you, alternatively you may notice but fail to understand the importance of a clue and make a connection later',
        nearSuccess: 'you realize something but don\'t put everything together; the GM should help point you in the right direction giving perhapse a partial clue or a hint as to where to find the next one',
        success: 'you find the most obvious clue to what you\'re looking for',
        criticalSuccess: 'you may find additional clues or get additional information about the clue(s) found based on how great your critical success',
      },
      {
        name: 'Search',
        primaryAttribute: ['Perception'],
        teamworkPossible: true,
        description:
          'the character searches an area for money, valuables, other specific items of interest, or hiding characters.',
        difficultyExamples:
          `
            4 - searching for a mug in a tavern
            7 - looking for crackers in your own pantry
            10 - searching for an accountant's ledger in a desk
            13 - searching for a hidden latch to a secret door
            16 - searching for a mobserts second ledger in their office
            19 - searching for a needle in a haystack
            22 - searching for a specific fish in the sea
          `,
        criticalFailure: 'You don\'t find anything helpful but may have triggered a trap (ex. you don\'t notice any mugs because you\'re looking under teh table, you do upset a woman and her friends when they notice you and think you\'re trying to look up their skirts)',
        conditionalFailure: 'You don\'t find the specific item you were looking for but find something still of interest (ex. you have no idea how to open the door but while searching you find a book of forbidin occult lore on the bookshelf)',
        nearSuccess: 'You find the thing you\'re looking for but trigger a trap or other side effect (ex. you find the crackers but the box is empty)',
        success: 'You find what you sought',
        criticalSuccess: 'You may find more than you where looking for or you find a better version of what you hopped (ex. you find the hidden compartment with the second ledger in it, the compartment also contains a bag filled with enough money to live on for a week - year depending on how much the difficulty was surpassed)'
    },
      {
        name: 'Sense Motive',
        primaryAttribute: ['Perception', 'Mind'],
        teamworkPossible: false,
        description: 'you attempt to get a read on a character you are interacting with or observing for at least one minute.',
        difficultyExamples:
          `
            4 - the red faced yelling man is hostile
            7 - the child is lying about eating the stolen cookie
            10 - the bartender does know at least something about the character you've asked about that they denied knowledge of
            13 - the criminal you've paid for information is sending you into an ambush
            16 - the pirate ship's quartermaster secretly wants the captain dead and might help you escape
            19 - the cutpurse you're chasing has a heart of gold and would help you if you asked
            22 - the door is a mimic
          `,
        criticalFailure: 'you get the wrong feeling from about the character\'s motive (ex. you can absolutely trust the criminal you\'re buying information from)',
        conditionalFailure: 'you don\'t get a specific read on the target one way or another (ex. the red faced man is just drunk and boisterous, he\'s not hostile)',
        nearSuccess: 'you may get a feeling like this person is hiding something or holding something back but you can\'t put your finger on what it might be (ex. you feel like there''s something up with teh quarter master but don\'t identify his hatred for the captain in particular)',
        success: 'you get the feeling about the person the GM had in mind',
        criticalSuccess: 'you get additional information based on what you might expect, how much depends on your level of critical success (ex. the child is lying about the stolen cookie but they\re also scared to get caught, with a high enough skill check you may notice they flinch slightly when you raise your fist to pick up your ale)',
      },
      {
      name: 'Size Up',
      primaryAttribute: ['Perception', 'Mind'],
      teamworkPossible: true,
      description: 'you attempt to get a read on specific strengths and weaknesses of a character you are observing for at least one minute.',
      difficultyExamples:
        `
          4 - you want to learn how skilled a boxer the man fighting in the ring is
          7 - you want to figure out how good a card player the three individuals playing cards are
          10 - you want to decern how sneaky a man is while watching him move through a crowd
          13 - you want to know if you're stronger than the thug bosting about his acomplishments at the tavern
          16 - you want to get a feel for the guard's martial skills by watching him interact with passing merchants
          19 - you want to know how smart the dutchess is by watching her quietly observe other at court
          22 - you want to know how fast the cutpurse who fakes a limp is in case you want to chase him
        `,
      criticalFailure: 'you are get the wrong idea about the target (ex. you\'re firmly convinced the dealer is a lousy card player and proceed to lose your spending money to him)',
      conditionalFailure: 'you have a hard time getting a read on the target (ex. that man seems just as likely to be the best thief in the city as he is a common cobbler)',
      nearSuccess: 'you get a sense for the target\'s skill but not the extent of it (ex. the guard seems like he\'s had some formal training in combat but you couldn\'t say if he was a novice or an expert)',
      success: 'you get the character\'s base skill level or stat that you were looking for (ex. the dutchess is watching all the most important people with interest, you believe she has a +1 mind stat)',
      criticalSuccess: 'you get additional information based on what you might expect, how much depends on your level of critical success (ex. the success told you the boxer had a melee combat rank of skilled with enough additional successes you are able to learn they have novice proficiency in personal defense and two ranks in the flurry of blows trait)'
    }
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

export const artisan = {
  name: 'Artisan',
  isTemplate: true,
  variants: [ 'Artist', 'Carpenter', "Chemist", "Cooking", "Mason", "Smith", "Woodworker" ],
  skillChecks: [
    {
      name: 'Craft',
      primaryAttribute: ['Boady', 'Mind', 'Perception'],
      teamworkPossible: false,
      description:
        'Create a finished product from a set of materials; GM should determine how long crafting an item takes on average, long crafted creations may be broken down into component pieces (ex. building a house may be several skill checks each spanning many days for example, one for framing, one to put up the walls, and another for putting up the roof)',
      difficultyExamples:
        `
          4 - Crafting stakes from straight sticks (Woodworker)
          7 - Building a simple boundry fense (Carpenter)
          10 - Baking bread or making a soup your family would be content with as dinner (Cook)
          13 - Building an arched entryway from pieces of stone you need cut to size (Mason)
          16 - Crafting a fitted suit of mail that allows ease of moment without compromising protection (Smith)
          19 - Painting a portrait that any lord would be happy to hang in their hall (Artist)
          22 - Mixing a chemical concoction almost impossible to come by in your setting (Chemist)
        `,
      criticalFailure: 'The final product is ruined, destroying at least some of the materials in the preocess and potentially harming the crafter or environment around them (A chemist trying to create a smoke powder sets it off in the process, filling a city block with thick choaking smog and destroying all of the components for the entire batch).',
      conditionalFailure: 'The product is of poor quality with obvious flaws, or the product failed to be created but at least some of the material may be reused (A smith crafts a sabre that\'s likely to be servisable for a single fight before it risks breaking when it contacts its target or another blade)',
      nearSuccess: 'The product has a flaw, takes significantly longer or more material to craft than expected, but generally will fulfill its purpose (A carpenter splits their trim boards when putting a door on a house, they spend several extra hours and additional material but the end product is functional and only allows the smallest of drafts through)',
      success: 'The product is a textbook example of what was being tried for (A tavern owner produces dozens of uniform loaves of bread up to the standards of their high end customers)',
      criticalSuccess: 'The product is of slightly higher quality, required fewer materials, or was faster to create the level of each based on the number of additional successes rolled (An artist hired to paint a wall length mural originally planned to spend 3 months on the project but finished a full 2 weeks early with 4 extra successes)',
    },
    {
      name: 'Forge/Duplicate',
      primaryAttribute: ['Boady', 'Mind', 'Perception'],
      teamworkPossible: false,
      description:
        'Craft a product that exactly matches another, forging requires first a successful craft check to match the quality of the work and then a forge/duplicate check to ensure the final product matches the desired item to duplicate.',
      difficultyExamples:
        `
          4 - making a poisened loaf of bread appear to be from the seedy tavern with inconsistant loaves (Cooking)
          7 - building a segment of fense to exactly match the adjoining segments (Carpentry)
          10 - putting an extra level on a stone tower and making it appear to have been built all at one time (Mason)
          13 - crafting a dagger to appear as if a specific town smith forged it (Smith)
          16 - carving a wooden ring and painting it gold to have it, visually, look the same as the real ring on display in a glass box (Woodworker)
          19 - painting an exact duplicate of a famous painting (Artist)
          22 - making a bottle of perfume that smells the same as another with a secret recipie (Chemist)
        `,
      criticalFailure: 'The product is clearly not the item it was meant to appear as but a cursory examination will review that it was meant to be, potentially giving your deception away.',
      conditionalFailure: 'The product won\'t fool anyone as a copy but doesn\'t appear as if it was intended to be, it rather comes across as simply of a similar style',
      nearSuccess: 'The product would likely decieve a passive observer or scrutiny of someone not intimately familiar with the real thing',
      success: 'Only a thurough investigation by someone well aquainted with the original could tell that this product isn\'t it',
      criticalSuccess: 'The difficulty to identify this item as a forgery goes up based on the number of additional successes as determined by the GM.',
    },
    {
      name: 'Improve/Identify',
      primaryAttribute: ['Boady', 'Mind', 'Perception'],
      teamworkPossible: false,
      description:
        'Correct a subpar product or identify the composition of a completed one',
      difficultyExamples:
        `
          4 - determine that a door is made out of a specific kind of wood (Carpenter)
          7 - identify the ingredients in a common  tincture (Chemist)
          10 - remove imperfections from and reinforce a spear shaft (Woodworker)
          13 - add fullers to a sword that\'s too top heavy to improve the balance (Smith)
          16 - determine what ingredient was used to create a specific paint color (Artist)
          19 - taste the subtle difference in a stew to recognize it as poisoned (Cook)
          22 - strengthen the integrity of an already masterwork defensive wall (Mason)
        `,
      criticalFailure: 'Not only does your improvement or identify attempt fail but you damage or set off the original',
      conditionalFailure: 'You\'ve not improved or identified the product but you haven\'t made it worse either, you may even have learned something along the way',
      nearSuccess: 'You\'ve successfully imporved or identified the item but you\'ve failed to fix a flaw or notice an important detail in composition or craftsmanship',
      success: 'The product is improved or identified as attempted',
      criticalSuccess: 'The task is completed faster or even more effectively than expected, the level of which varries based on level of critical success',
    },
    {
      name: 'Repair',
      primaryAttribute: ['Boady', 'Mind', 'Perception'],
      teamworkPossible: false,
      description:
        'Fix damage to an product',
      difficultyExamples:
        `
          4 - remove damaged brissles from a paintbrush (Artist)
          7 - replace fallen bricks on a freestanding wall with fresh mortor (Mason)
          10 - bring a dull axe back to razor sharpness (Smith)
          13 - extract only the vinegar from a solution being inhibited by it (Chemist)
          16 - salvage a wedding cake after a child grabbed a chunk with their hand (Cook)
          19 - make snapped arrows shafts servisable for one shot (Woodworker)
          22 - exactly restore a burned ornate chapple so no one would know it was ever damaged (Carpenter)
        `,
      criticalFailure: 'The product is worse after your attempt than before',
      conditionalFailure: 'The product is no better or worse than before you attempted to fix it',
      nearSuccess: 'The product may be better than it was but it\'s still damaged',
      success: 'The targeted defect is repaired as well as expected',
      criticalSuccess: 'The repair is done faster than hoped for or with fewer materials consumed depending on the number of additional successes',
    }
  ],
  isSkillTree: true,
  traits: [
    {name: "Bodger", effect: {text: "Gain +1 to your {variant} Repair skill checks"}},
    {name: "Copy Cat", effect: {text: "Gain +1 to your {variant} Forge/Duplicate skill checks"}},
    {name: "Crafter", effect: {text: "Gain +1 to your {variant} Craft skill checks"}},
    {name: "Discerning Artisan", effect: {text: "Gain +1 to your {variant} Improve/Identify skill checks"}},
    {name: "One off trait", effect: {text: ""}, costs: [2]},
    {name: "One off trait with requirement", effect: {text: ""}, requirements: "One off trait", costs: [5]}
  ],
  variantTraits: {
    variant: [

    ]
  }
};

export default [
  awareness
]
