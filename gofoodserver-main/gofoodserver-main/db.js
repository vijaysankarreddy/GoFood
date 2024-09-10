const mongoose = require('mongoose');

const dbUser = process.env.REACT_APP_DB_USER;
const dbPass = process.env.REACT_APP_DB_PASS;
const dbName = process.env.REACT_APP_DB_NAME;

const mongoURI = `mongodb+srv://divyendu:Ballia123@cluster0.rn4qsyi.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0`

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log("connected");
        let fetched_data=await mongoose.connection.db.collection("food_items");
        let data=await fetched_data.find({}).toArray();
        let foodCat=await mongoose.connection.db.collection("foodCategory");
        let catdata=await foodCat.find({}).toArray();
        global.food_items=data;
        global.foodCategory=catdata;
    } catch (err) {
        console.log("Error in mongoDB function: ", err); // Modified log statement
    }
}

module.exports = mongoDB;
mongoDB().catch(err => console.error(err));