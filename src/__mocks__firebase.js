export const mockFirestore = {
    collection: jest.fn().mockReturnThis(),
    get: jest.fn().mockReturnThis(),
    docs: [{ data: jest.fn() }],
};

export const initializeApp = jest.fn();
export const firestore = jest.fn(() => mockFirestore);