const express = require("express")
const mongoose = require('mongoose')
const User = require('./models/user.model')
const Payment = require('./models/payment.model')
const Restaurant = require('./models/restaurant');
const MenuItem = require('./models/menu'); 
const Order = require('./models/orders'); 
const Cart = require('./models/cart'); 
const bcrypt = require('bcrypt');
const mongouri = "mongodb://localhost:27017/lab1db"
// app service 
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
    res.send('Hello World, the winner team');
});

app.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

app.get('/user/:id', async (req, res) => {
    try {
        const id = req.params.id;
        
        // validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid user ID format" });
        }

        // find user by id
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



app.post('/register',  async (req, res) => {


    try{
        let userParam = req.body;
        if (await User.findOne({ email: userParam.email })) {
            res.send( 'email "' + userParam.email + '" is already exist');
        }
        const user = new User(userParam);
        const bcrypt = require('bcrypt');
        const saltRounds = 10;
        userParam.password = await bcrypt.hash(userParam.password, saltRounds);
        // save user
         await user.save();
         res.send("user added successfully ")

    }catch(err)
    {
        res.status(500).send('server error: '+ err);
    }
    
});

app.post('/user/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).send('user not found');
        }
        const isMatch = await password === user.password;
        if (!isMatch) {
            return res.status(401).send('Invalid credentials');
        }

        const token = user.generateAuthToken();
        res.status(200).send({ user, token });
        console.log('Login successful');
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log('Login failed', error.message);
    }
});


app.post('/user/addPayment', async (req, res) => {
    try {
        const { email, card_number, cvc, exp_month, exp_year } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send('User not found');
        }
        const existingPayment = await Payment.findOne({ card_number, user: user._id });
        if (existingPayment) {
            return res.status(400).send('This payment already exists');
        }
        const payment = new Payment({
            card_number,
            cvc,
            exp_month,
            exp_year,
            user: user._id
        });

        
        await user.payments.push(payment);
        await user.save();

        res.status(201).send('Payment added successfully');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});





// Create Restaurant
app.post('/restaurants', async (req, res) => {
    const { name, description, address, logo, ownerId } = req.body;
    try {
        const restaurant = new Restaurant({ name, description, address, logo, ownerId });
        await restaurant.save();
        res.status(201).json(restaurant);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get All Restaurants
app.get('/restaurants', async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add Menu Item
app.post('/menu-items', async (req, res) => {
    const { restaurantId, name, description, price, category, image, availability } = req.body;
    try {
        const menuItem = new MenuItem({ restaurantId, name, description, price, category, image, availability });
        await menuItem.save();
        res.status(201).json(menuItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get Menu Items by Restaurant
app.get('/menu-items/:restaurantId', async (req, res) => {
    const { restaurantId } = req.params;
    try {
        const menuItems = await MenuItem.find({ restaurantId });
        res.status(200).json(menuItems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Place Order
app.post('/orders', async (req, res) => {
    const { userId, restaurantId, items, totalPrice } = req.body;
    try {
        const order = new Order({ userId, restaurantId, items, totalPrice });
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get User Orders
app.get('/orders/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const orders = await Order.find({ userId });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add to Cart
app.post('/cart', async (req, res) => {
    const { userId, restaurantId, items, totalPrice } = req.body;
    try {
        const cart = new Cart({ userId, restaurantId, items, totalPrice });
        await cart.save();
        res.status(201).json(cart);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get Cart by User
app.get('/cart/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const cart = await Cart.findOne({ userId });
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**  ----------------------------- START SERVER ----------------------------- **/

// Elkot elkot2227271
// Hazem hazem2227378

const port = 5000 ;
mongoose.set("strictQuery", false)
mongoose.connect("mongodb+srv://Elkot:elkot2227271@talabatk.evhrb.mongodb.net/?retryWrites=true&w=majority&appName=Talabatk")
.then(() => {
    console.log('connected to MongoDB')
    //listen on specific port 
    app.listen(port, () => console.log(`listening at http://localhost:${port}`))
}).catch((error) => {
    console.log('can not connect to mongodb  '+error)
})
