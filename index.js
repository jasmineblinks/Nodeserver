const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const app = express();
// const port = process.env.PORT || 3003;
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const productData = [
  {
    id: uuidv4(),
    image:
      "https://images.pexels.com/photos/3782789/pexels-photo-3782789.jpeg?cs=srgb&dl=pexels-bella-zhong-3782789.jpg&fm=jpg",
    title: "Beautiful",
    product:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus arcu felis bibendum ut tristique et egestas. Proin libero nunc consequat interdum. Nulla facilisi etiam dignissim diam quis enim. Cum sociis natoque penatibus et magnis. Quam pellentesque nec nam aliquam. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Lorem ipsum dolor sit amet consectetur adipiscing. Bibendum est ultricies integer quis auctor elit.",
    price: 80000,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/pueneh/image/upload/v1644066944/qriwggq3qf5xfd1on7qd.jpg",
    title: "Beautiful",
    product:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus arcu felis bibendum ut tristique et egestas. Proin libero nunc consequat interdum. Nulla facilisi etiam dignissim diam quis enim. Cum sociis natoque penatibus et magnis. Quam pellentesque nec nam aliquam. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Lorem ipsum dolor sit amet consectetur adipiscing. Bibendum est ultricies integer quis auctor elit.",
    price: 80000,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/pueneh/video/upload/v1644492254/vxc3hagq16yhn7xbw4lr.webm",
    title: "Georgous",
    product:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus arcu felis bibendum ut tristique et egestas. Proin libero nunc consequat interdum. Nulla facilisi etiam dignissim diam quis enim. Cum sociis natoque penatibus et magnis. Quam pellentesque nec nam aliquam. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Lorem ipsum dolor sit amet consectetur adipiscing. Bibendum est ultricies integer quis auctor elit.",
    price: 80000,
  },
  {
    id: uuidv4(),
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?cs=srgb&dl=pexels-melvin-buezo-2529148.jpg&fm=jpg",
    title: "Beautiful",
    product:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus arcu felis bibendum ut tristique et egestas. Proin libero nunc consequat interdum. Nulla facilisi etiam dignissim diam quis enim. Cum sociis natoque penatibus et magnis. Quam pellentesque nec nam aliquam. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Lorem ipsum dolor sit amet consectetur adipiscing. Bibendum est ultricies integer quis auctor elit.",
    price: 80000,
  },
  {
    id: uuidv4(),
    image:
      "https://images.pexels.com/photos/3076787/pexels-photo-3076787.jpeg?cs=srgb&dl=pexels-bella-zhong-3076787.jpg&fm=jpg",
    title: "Beautiful",
    product:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus arcu felis bibendum ut tristique et egestas. Proin libero nunc consequat interdum. Nulla facilisi etiam dignissim diam quis enim. Cum sociis natoque penatibus et magnis. Quam pellentesque nec nam aliquam. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Lorem ipsum dolor sit amet consectetur adipiscing. Bibendum est ultricies integer quis auctor elit.",
    price: 80000,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/pueneh/video/upload/v1644492406/abbheghcd8lygupljwp6.webm",
    title: "Beautiful",
    product:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus arcu felis bibendum ut tristique et egestas. Proin libero nunc consequat interdum. Nulla facilisi etiam dignissim diam quis enim. Cum sociis natoque penatibus et magnis. Quam pellentesque nec nam aliquam. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Lorem ipsum dolor sit amet consectetur adipiscing. Bibendum est ultricies integer quis auctor elit.",
    price: 80000,
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/productData", (req, res) => {
  res.json(productData);
});

app.get("/productData/:id", (req, res) => {
  const productId = req.params.id;

  const product = productData.find((product) => product.id === productId);
  if (!product)
    return res.status(404).send("The product with the given ID was not found");
  res.json(product);
});

app.post("/productData", (req, res) => {
  const { title, product, content, price, image } = req.body;
  const newProduct = { id: uuidv4(), title, product, content, price, image };
  productData.push(newProduct);
  res.json(newProduct);
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
