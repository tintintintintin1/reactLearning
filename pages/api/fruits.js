// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  var data = [
    {
      category: "Fruits",
      price: "$1",
      stocked: true,
      name: "Apple",
      image:
        "https://www.applesfromny.com/wp-content/uploads/2020/05/20Ounce_NYAS-Apples2.png",
    },
    {
      category: "Fruits",
      price: "$1",
      stocked: true,
      name: "Dragonfruit",
      image:
        "https://www.applesfromny.com/wp-content/uploads/2020/05/20Ounce_NYAS-Apples2.png",
    },
    {
      category: "Fruits",
      price: "$2",
      stocked: false,
      name: "Passionfruit",
      image:
        "https://www.applesfromny.com/wp-content/uploads/2020/05/20Ounce_NYAS-Apples2.png",
    },
    {
      category: "Vegetables",
      price: "$2",
      stocked: true,
      name: "Spinach",
      image:
        "https://www.applesfromny.com/wp-content/uploads/2020/05/20Ounce_NYAS-Apples2.png",
    },
    {
      category: "Vegetables",
      price: "$4",
      stocked: false,
      name: "Pumpkin",
      image:
        "https://www.applesfromny.com/wp-content/uploads/2020/05/20Ounce_NYAS-Apples2.png",
    },
    {
      category: "Vegetables",
      price: "$1",
      stocked: true,
      name: "Peas",
      image:
        "https://www.applesfromny.com/wp-content/uploads/2020/05/20Ounce_NYAS-Apples2.png",
    },
  ];
  try {
    // const result = await someAsyncOperation();
    res.status(200).json({ result: data });
  } catch (err) {
    res.status(500).json({ error: "failed to fetch data" });
  }
}
