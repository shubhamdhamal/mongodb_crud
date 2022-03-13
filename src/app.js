const mongoose = require('mongoose');
const {
    boolean
} = require('webidl-conversions');

mongoose.connect("mongodb://localhost:27017/CRUD", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("connection sucessfull.."))
    .catch((err) => console.log(err));


const DataSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Completed: {
        type: Boolean,
        required: true,
        default: false,

    },
    date: {
        type: Date,
        default: Date.now,
    }

});
//Create a collection named “Tasks”
const TaskCrud = new mongoose.model("task", DataSchema);
//Add 4 documents (tasks) in the collection with fields Description – A string and Completed – true or false -> Create
const taskList = new TaskCrud({
    title: "taskno1-create",
    Description: "hey this is the first docoment 1",
    Completed: false,
})
const taskList2 = new TaskCrud({
    title: "taskno2-create",
    Description: "hey this is the 2 docoment ",
    Completed: false,
})
const taskList3 = new TaskCrud({
    title: "taskno3-create",
    Description: "hey this is the 3 docoment ",
    Completed: false,
})
const taskList4 = new TaskCrud({
        title: "taskno4-create",
        Description: "hey this is the 4 docoment ",
        Completed: false,
    })
    //Add 4 documents (tasks) in the collection with fields Description – A string and Completed – true or false -> Create
    // TaskCrud.insertMany([taskList, taskList2, taskList3, taskList4])
    //     .then(() => {
    //         const result = TaskCrud.insertMany();
    //         console.log(result);
    //     })
    //     .catch(() => {
    //         console.log(err);
    //     })
    // ******************************//
    // ************************************************//
    // const getTask = TaskCrud.find();
    // getTask.then(() => {
    //     console.log(getTask);
    // })
    // TaskCrud.find({}, {
    //         _id: 0
    //     }).sort({
    //         title: 1
    //     })
    //     .then(() => {
    //             const result = TaskCrud.find()

//             console.log(result)
//         }
//         .catch(() => {
//             console.log(err)
//         })

// const getTask = async() => {
// const result = TaskCrud.find()
//     .select({
//         title: 1,
//         Description: 1,
//         Completed: 1
//     })
//     .then(() => {
//         console.log(result);
//     })
//     .catch(() => {
//         console.log(err);
//     })

// }
// getTask();


// const read = () => {
//     return TaskCrud.find()
//         .select({
//             title: 1,
//             Description: 1,
//             Completed: 1
//         })
//         .then(() => {
//             console.log(read);
//         })
//         .catch(() => {
//             console.log(err);
//         })
// }

//findng or read statement
// TaskCrud.find({}).select({
//         title: 1,
//         Description: 1,
//         Completed: 1
//     })
//     .exec()
//     .then(() => {
//         const result = TaskCrud.find();
//         console.log(result);
//     })
//     .catch(() => {
//         console.log(err);
//     })
//Read all the documents (tasks) which are not completed (Completed: false) and log them on the terminal -> Read
const read = async() => {
    const result = await TaskCrud.find()
        .select({
            title: 1,
            Description: 1,
            Completed: 1
        });
    console.log(result);
}

// read();

//Update the documents (tasks) which are not completed as completed i.e. (Completed: false -> true)-> Update

const update = async(_id) => {
        try {
            const result = await TaskCrud.findByIdAndUpdate({
                _id
            }, {
                $set: {
                    Completed: true
                },

            }, {
                useFindAndModify: false
            }, );
            console.log(result);
            console.log("Updated");
        } catch (err) {
            console.log(err);
        }
    }
    // update("622ba14282c938ff23da4793");
    // update("622ba14282c938ff23da4795");

//Delete a document (task) using it’s ID -> Delete
const drop = async(_id) => {
        try {
            const result = await TaskCrud.findByIdAndDelete({
                _id
            })
            console.log(result);
            console.log("deleted");
        } catch (err) {
            console.log(err);

        }
    }
    // drop("622ba170f4aac4943a7da0e6")