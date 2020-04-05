import { connect } from 'mongoose';

const connectDB = async () => {
    const { connection } = await connect(
        process.env.MONGO_URI,
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        }
    );

    console.log(`MongoDB Connected: ${connection.host}`.cyan.underline.bold);
};

export default connectDB;
