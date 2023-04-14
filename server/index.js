import express from 'express';

const app = express();
const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
    console.log('Server is running on port 5002');
});
