$(document).ready(function () {
        // object containing the validation rules
        var bmiRules =
            {
                height: {
                    required: true,
                    min: 59,
                    max: 79,
                    number: true
                },
                weight: {
                    required: true,
                    min: 88,
                    max: 353,
                    number: true
                }
            }

        // object containing the error messages
        var bmiMessages =
            {
                height: {
                    required: "This value is required",
                    min: "You must be ovr 59 inches tall to calculate your BMI correctly",
                    max: "You cannot be taller than 79 inches to calculate your BMI correctly",
                    number: "Please enter a valid height"
                },
                weight: {
                    required: "This value is required",
                    min: "You cannot weigh less than 88 pounds to calculate your BMI correctly",
                    max: "You cannot weigh more than 353 pounds to calculate your BMI correctly",
                    number: "Please enter a valid number"
                }
            }

        // pass the configuration to the form's validate() method
        // needs submitHandler, rules and message properties
        $("#bmi-form").validate(
            {
                submitHandler: runMyCalculator,
                rules: bmiRules,
                messages: bmiMessages
            });

        // need function that does the stuff we want to do - i.e. does the math and updates the text
        function runMyCalculator() {
            // get value of height and weight and parse those as floats
            var height = $("#height").val();
            var weight = $("#weight").val();

            // do the math to find the value of the BMI
            var bmi = (weight/(height*height)) * 703;

            // always update page with bmi value, but make it a pretty one
            var bmiDisplay = bmi.toFixed(1);

            // determine the category and display that information
            if(bmi > 30) {
                $("#message").text(`Your BMI is ${bmiDisplay}. You are in the obese category`);
            } else if(bmi > 25) {
                $("#message").text(`Your BMI is ${bmiDisplay}. You are in the overweight category`);
            } else if(bmi > 18.5) {
                $("#message").text(`Your BMI is ${bmiDisplay}. You are in the normal category`);
            } else {
                $("#message").text(`Your BMI is ${bmiDisplay}. You are in the underweight category`);
            }
        }
    }
);