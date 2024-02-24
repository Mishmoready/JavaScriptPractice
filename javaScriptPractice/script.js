console.log("!!My body is ready!! 🍔🍟🧀");

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
    armSize: 20,
  },
  isBusy: false,
  toggleBusyness: function (busyStatus) {
    this.isBusy = busyStatus;
  },
};

console.log("This is who I am", whoAmi);

var query = "isBusy";
console.log("Do i feel like doing something:", whoAmi[query]);
