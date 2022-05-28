export const API_URL = "http://34.207.210.214:1337";

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur pulvinar nulla et feugiat. Aenean convallis nisi augue, eget viverra leo semper in. Nam velit dui, cursus sed dolor in, placerat consequat mi. Proin et sodales mauris, vel dignissim lacus. Sed quis magna nulla. Nam elementum, massa ut malesuada rutrum, ligula nisl ornare purus, vitae porta purus sapien in tortor. Maecenas at turpis maximus, tempus elit vitae, tempor ex. Suspendisse congue felis erat, eu sodales erat mollis id. Quisque ut nunc blandit, dignissim neque ut, ultricies libero.\n\nFusce euismod lectus dolor, ac hendrerit lorem auctor sed. Aliquam sodales imperdiet nibh. In at arcu ut nibh lacinia vestibulum. Curabitur eu faucibus tellus. Sed tempus est sit amet tellus porttitor interdum. Ut auctor lorem id pretium ultrices. Duis vitae volutpat erat, sit amet laoreet risus.\n\nVivamus placerat elementum augue ut lobortis. Nulla facilisi. In hac habitasse platea dictumst. Mauris sollicitudin rutrum massa ac interdum. Maecenas congue massa eu tellus egestas, non dapibus diam consequat. Quisque sit amet blandit turpis. Etiam maximus vehicula tortor, feugiat auctor nunc elementum eget. Etiam non lorem imperdiet, accumsan velit vitae, efficitur lectus. Aenean et tincidunt justo, non consectetur felis. In ullamcorper quam fringilla sem sollicitudin placerat. Integer elementum magna odio, nec egestas dui gravida id.";

export const products = [
  {
    _id: "1",
    name: "Drumkit Vol 1",
    description: loremIpsum,
    price: 30,
    onSale: true,
    salePrice: 10,
    categories: ["Drum Kits"],
    imageSrc: "drumkit-vol1",
  },
  {
    _id: "2",
    name: "Drumkit Vol 2",
    description: loremIpsum,
    price: 30,
    onSale: true,
    salePrice: 15,
    categories: ["Drum Kits"],
    imageSrc: "drumkit-vol2",
  },
  {
    _id: "3",
    name: "Drumkit Vol 3",
    description: loremIpsum,
    price: 40,
    onSale: false,
    salePrice: 0,
    categories: ["Drum Kits"],
    imageSrc: "drumkit-vol3",
  },
  {
    _id: "4",
    name: "Melodies Vol 1",
    description: loremIpsum,
    price: 30,
    onSale: false,
    salePrice: 0,
    categories: ["Melody Kits"],
    imageSrc: "melodies-vol1",
  },
  {
    _id: "5",
    name: "MIDI Vol 1",
    description: loremIpsum,
    price: 10,
    onSale: false,
    salePrice: 0,
    categories: ["MIDI Kits"],
    imageSrc: "midi-vol1",
  },
  {
    _id: "6",
    name: "MIDI Vol 2",
    description: loremIpsum,
    price: 15,
    onSale: false,
    salePrice: 0,
    categories: ["MIDI Kits"],
    imageSrc: "midi-vol2",
  },
  {
    _id: "7",
    name: "Vocals Vol 1",
    description: loremIpsum,
    price: 40,
    onSale: false,
    salePrice: 0,
    categories: ["Vocal Kits"],
    imageSrc: "vocals-vol1",
  },
];

export const routes = [
  { name: "Downloads", path: "/downloads" },
  { name: "Settings", path: "/settings" },
];

const allRoutes = [
  { name: "Checkout", path: "/checkout" },
  { name: "Downloads", path: "/downloads" },
  { name: "Error", path: "/error" },
  { name: "Home", path: "/" },
  { name: "Log In / Sign Up", path: "/login" },
  { name: "Product", path: "/product" },
  { name: "Settings", path: "/settings" },
];

export const defaultAuth = {
  user: undefined,
  accessToken: "",
};

export type CategoryTypes =
  | "All"
  | "Bundles"
  | "Drum Kits"
  | "Melody Kits"
  | "MIDI Kits"
  | "Preset Kits"
  | "Vocal Kits";
