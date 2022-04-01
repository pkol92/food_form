# Food form app

Demo: https://pkol92.github.io/food_form/

### Project launch
After cloning your current project, be sure to run npm install to install all dependencies.
You can start the project with the command:

npm start

### Project description
The App shows the form that contains the following fields:
- name - dish name (text field)
- preparation_time - preparation time (duration field, format 00:00:00)
- type - dish type (options: pizza, soup, sandwich)
- after selecting dish type, conditionally displays other fields:
* for pizza:
- no_of_slices - # of slices (number field)
- diameter - diameter (float field)
* for soup:
- spiciness_scale - spiciness scale (1-10)
* for sandwich:
- slices_of_bread - number of slices of bread required (number field)

All fields are required.

Data is submitted via POST request as a JSON to https://frosty-wood-6558.getsandbox.com:443/dishes and the form  support validation errors (if any).

### Stack of project
Technologies used: HTML, CSS, React, JavaScript.
