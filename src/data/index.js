export default {
  users: [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
    { id: '3', name: 'Carol' },
  ],
  comments: [
    {
      id: '1',
      author: '1',
      subject: 'My public key',
      body: '`eWFoTTNBZVBlZWw5aG9pdGg4ZWVuOXRob2U3b29qNHUK`',
      parent: null,
    },
    {
      id: '2',
      author: '2',
      subject: 'We should verify over another channel',
      body: '',
      parent: '1',
    },
    { id: '3', author: '1', subject: '', body: 'Agreed, call me', parent: '2' },
    {
      id: '4',
      author: '3',
      subject: 'Sneakernet ftw',
      body: 'I dropped off a USB drive with my key!',
      parent: null,
    },
    {
      id: '5',
      author: '2',
      subject: 'Okay',
      body: 'I have itnow.',
      parent: '3',
    },
    {
      id: '6',
      author: '1',
      subject: 'Test comment',
      body: 'Please ignore',
      parent: '4',
    },
    {
      id: '7',
      author: '3',
      subject: '',
      body: "I'll do this too",
      parent: '2',
    },
  ],
  favoriteComments: ['1'],
};
