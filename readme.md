# NSS IIFE Sandwich Maker Exercise

### Project Description 

This assignment displays a minimally styled `html` sandwich order form that allows the user to select all the ingredients for a custom deli sandwich. 

#### Order Form for Sandwich
![Sandwich Maker Screengrab](https://raw.githubusercontent.com/SMITHsharon/sandwichMaker/master/screen/sandwich%20maker%20screen%20shot%201.png)

#### Completed Order Form
![Sandwich Maker Screengrab](https://raw.githubusercontent.com/SMITHsharon/sandwichMaker/scripts/screen/sandwich%20maker%20screen%20shot%202.png)

### Project Specs
- The "sandwich" is processed via a `JavaScript` Sandwich module. 
- Individual related modules (for bread, meat, cheese, veggies, and condiments) are implemented using `IIFE` syntax, to augment `SandwichMaker`. 
- Ingredient choices are stored as JS objects that contain the ingredients as keys and their cost as the value, e.g., `{"turkey": 0.90, "bacon": 1.50}`
- Ingredient objects cannot be accessed by the other modules except through an accessor `(getter)` method.
- Each `IIFE` exposes, in its public interface, a method named `add{ingredient}` (e.g. `addMeatChoice` or `addVeggiesChoice`) that accepts a single argument. That argument's value is the ingredient selected by the user.
- The final sandwich order and its cost are written to an empty DOM element. 


### Technologies Used
- `html`
- `css`
- `JavaScript`


### How To View The Sandwich Form 
#### (Node must be installed on your machine):
```
git clone https://github.com/SMITHsharon/sandwichMaker.git
cd sandwich
npm install http-server -g
http-server -p 8080
```

This will show in your browser at: `http://localhost:8080`

### Contributor
[Sharon Smith](https://github.com/SMITHsharon)

