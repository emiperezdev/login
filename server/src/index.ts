import 'express-async-errors';
import app from "./start/app";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`>>> Listening on port ${PORT}...`));
