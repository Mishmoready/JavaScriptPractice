console.log("!!My body is ready!! 🍔🍟🧀");

// Object demonstration
const whoAmi = {
  firstName: "Moses",
  lastName: "Cook",
  age: 36,
  occupation: "Assistant Trainer",
  myFavoriteFood: {
    firstFavorite: "Korean Chicken",
    secondFavorite: "Pizza",
    thirdFavorite: "KFC",
  },
  myStatus: {
    weight: 125,
    height: 183,
    armSize: 16,
  },
  isBusy: false,
  toggleBusyness: function (busyStatus) {
    this.isBusy = busyStatus;
  },

  // Function to pass through the method
  myGoals: function (newWeight, newHeight, newArmSize) {
    this.myStatus.weight = newWeight;
    this.myStatus.height = newHeight;
    this.myStatus.armSize = newArmSize;
  },
};

console.log("This is who I am", whoAmi);

let query = "isBusy";
console.log("Do i feel like doing something:", whoAmi[query]);

console.log(`my current weight is ${whoAmi.myStatus.weight}`);

//Method to use from code line 24
whoAmi.myGoals(85, 183, 20);

console.log(`my new weight goal is ${whoAmi.myStatus.weight}`);
