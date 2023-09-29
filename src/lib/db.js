const { DB_USER, DB_PASS, DB_NAME } = process.env;

export const connectionStr = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.8x5iwwj.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

// export const connectionStr = `mongodb+srv://dhruvnext:dhruvnext@cluster0.8x5iwwj.mongodb.net/productsDB?retryWrites=true&w=majority`;

// export const connectionStr = "mongodb+srv://"+username+":"+password+"@cluster0.8x5iwwj.mongodb.net/productsDB?retryWrites=true&w=majority";

// mongodb+srv://nextlearn:<password>@cluster0.8x5iwwj.mongodb.net/?retryWrites=true&w=majority
