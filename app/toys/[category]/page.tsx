import { notFound } from "next/navigation"
import CategoryContent from "./CategoryContent"

interface Toy {
  id: string
  name: string
  image: string
  category: string
}

interface CategoryPageProps {
  params: {
    category: string
  }
}

// Sample toy data for different categories
const toysData: Record<string, Toy[]> = {
  "educational-toys": [
    {
      id: "1",
      name: "Rainbow Building Blocks",
      image: "/product images/Educational Toys/Educational Toys/1.png",
      category: "Educational Toys"
    },
    {
      id: "2", 
      name: "Learning Puzzle Set",
      image: "/product images/Educational Toys/Educational Toys/2.png",
      category: "Educational Toys"
    },
    {
      id: "3",
      name: "STEM Activity Kit",
      image: "/product images/Educational Toys/Educational Toys/3.png",
      category: "Educational Toys"
    },
    {
      id: "4",
      name: "Alphabet Learning Toy",
      image: "/product images/Educational Toys/Educational Toys/4.png",
      category: "Educational Toys"
    },
    {
      id: "5",
      name: "Shape Sorting Cube",
      image: "/product images/Educational Toys/Educational Toys/5.png",
      category: "Educational Toys"
    },
    {
      id: "6",
      name: "Counting Bears Set",
      image: "/product images/Educational Toys/Educational Toys/6.png",
      category: "Educational Toys"
    },
    {
      id: "7",
      name: "Magnetic Letter Board",
      image: "/product images/Educational Toys/Educational Toys/7.png",
      category: "Educational Toys"
    },
    {
      id: "8",
      name: "Science Experiment Kit",
      image: "/product images/Educational Toys/Educational Toys/8.png",
      category: "Educational Toys"
    },
    {
      id: "9",
      name: "Musical Learning Toy",
      image: "/product images/Educational Toys/Educational Toys/9.png",
      category: "Educational Toys"
    },
    {
      id: "10",
      name: "Interactive Learning Tablet",
      image: "/product images/Educational Toys/Educational Toys/10.png",
      category: "Educational Toys"
    }
  ],
  "dolls-plush": [
    {
      id: "9",
      name: "Cuddly Teddy Bear",
      price: 32.99,
      image: "/cute-teddy-bear-plush-toy.jpg",
      category: "Dolls & Plush"
    },
    {
      id: "10",
      name: "Stuffed Animal Collection",
      price: 28.99,
      image: "/plush-toys-and-stuffed-animals-display.jpg",
      category: "Dolls & Plush"
    },
    {
      id: "11",
      name: "Baby Doll with Accessories",
      price: 45.99,
      image: "/cute-teddy-bear-plush-toy.jpg",
      category: "Dolls & Plush"
    },
    {
      id: "12",
      name: "Soft Bunny Plush",
      price: 21.99,
      image: "/plush-toys-and-stuffed-animals-display.jpg",
      category: "Dolls & Plush"
    },
    {
      id: "13",
      name: "Unicorn Pillow Pet",
      price: 26.99,
      image: "/cute-teddy-bear-plush-toy.jpg",
      category: "Dolls & Plush"
    },
    {
      id: "14",
      name: "Animal Friends Set",
      price: 38.99,
      image: "/plush-toys-and-stuffed-animals-display.jpg",
      category: "Dolls & Plush"
    }
  ],
  "action-figures": [
    {
      id: "15",
      name: "Space Astronaut Hero",
      price: 39.99,
      image: "/space-astronaut-action-figure-toy.jpg",
      category: "Action Figures"
    },
    {
      id: "16",
      name: "Superhero Adventure Set",
      price: 49.99,
      image: "/space-astronaut-action-figure-toy.jpg",
      category: "Action Figures"
    },
    {
      id: "17",
      name: "Robot Transformer",
      price: 35.99,
      image: "/space-astronaut-action-figure-toy.jpg",
      category: "Action Figures"
    },
    {
      id: "18",
      name: "Dinosaur Explorer",
      price: 42.99,
      image: "/space-astronaut-action-figure-toy.jpg",
      category: "Action Figures"
    },
    {
      id: "19",
      name: "Knight & Castle Set",
      price: 55.99,
      image: "/space-astronaut-action-figure-toy.jpg",
      category: "Action Figures"
    }
  ],
  "outdoor-toys": [
    {
      id: "20",
      name: "Soccer Ball & Goal Set",
      price: 34.99,
      image: "/happy-children-playing-with-toys-in-colorful-toy-s.jpg",
      category: "Outdoor Toys"
    },
    {
      id: "21",
      name: "Flying Disc Ultimate",
      price: 12.99,
      image: "/colorful-toy-shop-interior-with-happy-children-pla.jpg",
      category: "Outdoor Toys"
    },
    {
      id: "22",
      name: "Basketball Hoop Mini",
      price: 45.99,
      image: "/happy-children-playing-with-toys-in-colorful-toy-s.jpg",
      category: "Outdoor Toys"
    },
    {
      id: "23",
      name: "Sidewalk Chalk Set",
      price: 8.99,
      image: "/colorful-toy-shop-interior-with-happy-children-pla.jpg",
      category: "Outdoor Toys"
    },
    {
      id: "24",
      name: "Jump Rope Premium",
      price: 15.99,
      image: "/happy-children-playing-with-toys-in-colorful-toy-s.jpg",
      category: "Outdoor Toys"
    }
  ],
  "creative-kits": [
    {
      id: "25",
      name: "Ultimate Art Studio",
      price: 52.99,
      image: "/colorful-toy-shop-interior-with-happy-children-pla.jpg",
      category: "Creative Kits"
    },
    {
      id: "26",
      name: "Craft & Create Box",
      price: 29.99,
      image: "/happy-children-playing-with-toys-in-colorful-toy-s.jpg",
      category: "Creative Kits"
    },
    {
      id: "27",
      name: "Paint by Numbers Kit",
      price: 18.99,
      image: "/colorful-toy-shop-interior-with-happy-children-pla.jpg",
      category: "Creative Kits"
    },
    {
      id: "28",
      name: "Clay Modeling Set",
      price: 24.99,
      image: "/happy-children-playing-with-toys-in-colorful-toy-s.jpg",
      category: "Creative Kits"
    },
    {
      id: "29",
      name: "Friendship Bracelet Maker",
      price: 16.99,
      image: "/colorful-toy-shop-interior-with-happy-children-pla.jpg",
      category: "Creative Kits"
    }
  ],
  "games-puzzles": [
    {
      id: "30",
      name: "Rainbow Building Blocks",
      price: 34.99,
      image: "/colorful-building-blocks.png",
      category: "Games & Puzzles"
    },
    {
      id: "31",
      name: "Ocean Adventure Puzzle",
      price: 19.99,
      image: "/kids-playing-with-building-blocks-and-puzzles.jpg",
      category: "Games & Puzzles"
    },
    {
      id: "32",
      name: "Memory Match Game",
      price: 15.99,
      image: "/colorful-building-blocks.png",
      category: "Games & Puzzles"
    },
    {
      id: "33",
      name: "Strategy Board Game",
      price: 28.99,
      image: "/kids-playing-with-building-blocks-and-puzzles.jpg",
      category: "Games & Puzzles"
    },
    {
      id: "34",
      name: "3D Wooden Puzzle",
      price: 22.99,
      image: "/colorful-building-blocks.png",
      category: "Games & Puzzles"
    },
    {
      id: "35",
      name: "Card Game Family Fun",
      price: 12.99,
      image: "/kids-playing-with-building-blocks-and-puzzles.jpg",
      category: "Games & Puzzles"
    }
  ]
}

const categoryTitles: Record<string, string> = {
  "educational-toys": "Educational Toys",
  "dolls-plush": "Dolls & Plush",
  "action-figures": "Action Figures",
  "outdoor-toys": "Outdoor Toys",
  "creative-kits": "Creative Kits",
  "games-puzzles": "Games & Puzzles"
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params
  const toys = toysData[category]
  const categoryTitle = categoryTitles[category]

  if (!toys || !categoryTitle) {
    notFound()
  }

  return <CategoryContent toys={toys} categoryTitle={categoryTitle} />
}

// Required for static site generation with dynamic routes
export function generateStaticParams() {
  return [
    { category: 'educational-toys' },
    { category: 'dolls-plush' },
    { category: 'action-figures' },
    { category: 'outdoor-toys' },
    { category: 'creative-kits' },
    { category: 'games-puzzles' }
  ]
}