export const getToken = (req) => req.header('authorization').replace('Bearer', '').trim();
