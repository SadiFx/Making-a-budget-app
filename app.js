//Inner work
var budgetController = (function () {

    //Function constructor for each and every item of Expense
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    //Function constructor for each and every item of Income
    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    //Storing all the items into one place
    var allExpenses = [];
    var allIncome = [];

    //Starting value = 0;
    var totalExpenses = 0;

    // Storing all the values into one place (? not sure)
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function (tip, des, val) {
            var newItem, ID;

            //Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }


            //Create new item depending on exp or inc
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            //Add the new item into the array
            data.allItems[type].push(newItem);

            return newItem;
        }
    };



})();

//Display work
var UIcontroller = (function () {
    // All the HTML class strings
    var StringLibrary = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }
    return {
        //Sometimes, no comment is the best comment. 
        getInput: function () {
            return {
                type: document.querySelector(StringLibrary.inputType).value, // Income or Expense 
                description: document.querySelector(StringLibrary.inputDescription).value, //The name of the entry
                value: document.querySelector(StringLibrary.inputValue).value //Amount
            };
        },

        

        //Using this method, StringLibrary can now be used outside of the function 
        getStringLibrary: function () {
            return StringLibrary;
        },
    }
})();



//Handles input
var controller = (function (budgetCtrl, UIctrl) {

    //Keeping all the event listeners in one place

    var setupEventListeners = function () {

        /*Taking the UIcontroller strings into controller function
         This works because UI controller returned methods that are available in global scope. (?)*/
        var DOM = UIctrl.getStringLibrary();

        //When left mouse button is clicked
        document.querySelector(DOM.inputBtn).addEventListener('click', itemAdder);

        // When Enter key is pressed
        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                itemAdder();
            }
        });
    };

    var itemAdder = function () {
        var input, newItem;
        // 1. Get the filed input data.

        input = UIctrl.getInput();

        // 2. Add the item to the inner work controller.

        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        // 3. Add the item to the Display controller.

        // 4. Calculate the budget.

        // 5. Show the budget to the display.

    }
    /*The above event handler won't get executed because it's not an IIFE
    So the best choice is to create an INITIALIZATION FUNCTION*/
    return {
        init: function () {
            console.log("Nicely started")
            setupEventListeners();
        }
    };

})(budgetController, UIcontroller);


//Calling the INITIALIZATION FUNCTION
controller.init();