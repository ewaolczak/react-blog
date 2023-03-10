const initialState = {
  posts: [
    {
      id: '1',
      title: 'First article title',
      shortDescription: 'Short description of the first article...',
      content: 'Main content of the first article',
      publishedDate: new Date('02-02-2022'),
      author: 'John Doe',
      category: 'Sport'
    },
    {
      id: '2',
      title: 'Second article title',
      shortDescription: 'Short description of the second article...',
      content: 'Main content of the second article',
      publishedDate: new Date('02-03-2022'),
      author: 'Amanda Clark',
      category: 'News'
    },
    {
      id: '3',
      title: 'Third article title',
      shortDescription: 'Short description of the third article...',
      content: 'Main content of the third article',
      publishedDate: new Date('02-04-2022'),
      author: 'Pablo Picasso',
      category: 'Movies'
    },
    {
      id: '4',
      title: 'Fourth article title',
      shortDescription: 'Short description of the fourth article...',
      content: 'Main content of the fourth article',
      publishedDate: new Date('02-02-2022'),
      author: 'Paris Hilton',
      category: 'News'
    }
  ],

  categories: ['Sport', 'News', 'Movies']
};

export default initialState;
