const kimtest = {
  roomId: 'it',
  inventory: [],
  rooms: [
    {
      name: 'IT',
      id: 'it',
      img: `
       
      `,
      desc: `
        You're in IT. You see several desks and computers, a large white board wall, and a broken window. You see exists to the north, east, and west.
      `,
      items: [
        { name: 'window', desc: 'This window is cracked from the inside, as though an angry programmer shot it.' },
        { name: 'white board', desc: 'The white board is covered in illegible scrawls. You can make out a few words: cloud, loop, and a lot of question marks.' }
      ],
      exits: [
        { dir: 'west', id: 'roland' },
        
        { dir: 'north', id: 'hallway' }
        { dir: 'east', id: 'elevator' }
      ]
    },
    {
      name: 'Roland's Office',
      id: 'roland',
      img: `
   
      `,
      desc: `
        I don't know how you got here, but you definitely don't belong here. 
      `,
      items: [
        
      ]
    },
     {
      name: 'Freight Elevator',
      id: 'elevator',
      img: `
   
      `,
      desc: `
      Wow it's loud here.
      `,
      items: [
        
      ]
    },
    {
      name: 'Hallway Outside IT',
      id: 'hallway',
      img: '',
      desc: `
        You hear someone yelling.
      `,
    },
  ],
};
