// __mocks__/firebase.js
export const mockFirestore = {
    collection: jest.fn().mockReturnThis(),
    get: jest.fn(() => Promise.resolve({
      docs: [
        { data: () => ({ name: 'Character1', image: 'image_url_1', location: { x: 50, y: 100 } }) },
      ],
    })),
  };
  
  export const initializeApp = jest.fn();
  
  export const db = mockFirestore;
  
  export const firestore = jest.fn(() => db);  