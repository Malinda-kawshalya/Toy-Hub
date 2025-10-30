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
  "baby-toys": [
    {
      id: "1",
      name: "Soft Baby Rattle",
      image: "/product images/Baby Toys/1.png",
      category: "Baby Toys"
    },
    {
      id: "2", 
      name: "Cuddly Baby Bear",
      image: "/product images/Baby Toys/2.png",
      category: "Baby Toys"
    },
    {
      id: "3",
      name: "Musical Baby Mobile",
      image: "/product images/Baby Toys/3.png",
      category: "Baby Toys"
    },
    {
      id: "4",
      name: "Baby Stacking Rings",
      image: "/product images/Baby Toys/4.png",
      category: "Baby Toys"
    },
    {
      id: "5",
      name: "Soft Activity Cube",
      image: "/product images/Baby Toys/5.png",
      category: "Baby Toys"
    },
    {
      id: "6",
      name: "Baby Teething Toy",
      image: "/product images/Baby Toys/6.png",
      category: "Baby Toys"
    },
    {
      id: "7",
      name: "Colorful Baby Ball",
      image: "/product images/Baby Toys/7.png",
      category: "Baby Toys"
    },
    {
      id: "8",
      name: "Baby Push Walker",
      image: "/product images/Baby Toys/8.png",
      category: "Baby Toys"
    },
    {
      id: "9",
      name: "Soft Baby Book",
      image: "/product images/Baby Toys/9.png",
      category: "Baby Toys"
    },
    {
      id: "10",
      name: "Baby Activity Mat",
      image: "/product images/Baby Toys/10.png",
      category: "Baby Toys"
    },
    {
      id: "11",
      name: "Baby Shape Sorter",
      image: "/product images/Baby Toys/11.png",
      category: "Baby Toys"
    },
    {
      id: "12",
      name: "Baby Musical Toy",
      image: "/product images/Baby Toys/12.png",
      category: "Baby Toys"
    },
    {
      id: "13",
      name: "Baby Comfort Toy",
      image: "/product images/Baby Toys/13.png",
      category: "Baby Toys"
    },
    {
      id: "14",
      name: "Baby Plush Set",
      image: "/product images/Baby Toys/14.png",
      category: "Baby Toys"
    },
    {
      id: "15",
      name: "Baby Sensory Toy",
      image: "/product images/Baby Toys/15.png",
      category: "Baby Toys"
    },
    {
      id: "16",
      name: "Baby Learning Cube",
      image: "/product images/Baby Toys/16.png",
      category: "Baby Toys"
    },
    {
      id: "17",
      name: "Baby Activity Center",
      image: "/product images/Baby Toys/17.png",
      category: "Baby Toys"
    },
    {
      id: "18",
      name: "Baby Rocking Toy",
      image: "/product images/Baby Toys/18.png",
      category: "Baby Toys"
    },
    {
      id: "19",
      name: "Baby Pull Toy",
      image: "/product images/Baby Toys/19.png",
      category: "Baby Toys"
    },
    {
      id: "20",
      name: "Baby Bath Toys",
      image: "/product images/Baby Toys/20.png",
      category: "Baby Toys"
    },
    {
      id: "21",
      name: "Baby Musical Rattle",
      image: "/product images/Baby Toys/21.png",
      category: "Baby Toys"
    },
    {
      id: "22",
      name: "Baby Soft Blocks",
      image: "/product images/Baby Toys/22.png",
      category: "Baby Toys"
    },
    {
      id: "23",
      name: "Baby Swing Toy",
      image: "/product images/Baby Toys/23.png",
      category: "Baby Toys"
    },
    {
      id: "24",
      name: "Baby Comfort Blanket",
      image: "/product images/Baby Toys/24.png",
      category: "Baby Toys"
    }
  ],
  "educational-toys": [
    {
      id: "1",
      name: "Rainbow Building Blocks",
      image: "/product images/Educational Toys/1.png",
      category: "Educational Toys"
    },
    {
      id: "2", 
      name: "Learning Puzzle Set",
      image: "/product images/Educational Toys/2.png",
      category: "Educational Toys"
    },
    {
      id: "3",
      name: "STEM Activity Kit",
      image: "/product images/Educational Toys/3.png",
      category: "Educational Toys"
    },
    {
      id: "4",
      name: "Alphabet Learning Toy",
      image: "/product images/Educational Toys/4.png",
      category: "Educational Toys"
    },
    {
      id: "5",
      name: "Shape Sorting Cube",
      image: "/product images/Educational Toys/5.png",
      category: "Educational Toys"
    },
    {
      id: "6",
      name: "Counting Bears Set",
      image: "/product images/Educational Toys/6.png",
      category: "Educational Toys"
    },
    {
      id: "7",
      name: "Magnetic Letter Board",
      image: "/product images/Educational Toys/7.png",
      category: "Educational Toys"
    },
    {
      id: "8",
      name: "Science Experiment Kit",
      image: "/product images/Educational Toys/8.png",
      category: "Educational Toys"
    },
    {
      id: "9",
      name: "Musical Learning Toy",
      image: "/product images/Educational Toys/9.png",
      category: "Educational Toys"
    },
    {
      id: "10",
      name: "Interactive Learning Tablet",
      image: "/product images/Educational Toys/10.png",
      category: "Educational Toys"
    }
  ],
  "model-cars": [
    {
      id: "1",
      name: "Racing Car Model",
      image: "/product images/Model Cars/1.png",
      category: "Model Cars"
    },
    {
      id: "2",
      name: "Classic Sports Car",
      image: "/product images/Model Cars/2.png",
      category: "Model Cars"
    },
    {
      id: "3",
      name: "Police Car Set",
      image: "/product images/Model Cars/3.png",
      category: "Model Cars"
    },
    {
      id: "4",
      name: "Fire Truck Model",
      image: "/product images/Model Cars/5.png",
      category: "Model Cars"
    },
    {
      id: "5",
      name: "Monster Truck",
      image: "/product images/Model Cars/66.png",
      category: "Model Cars"
    },
    {
      id: "6",
      name: "Vintage Car Collection",
      image: "/product images/Model Cars/7.png",
      category: "Model Cars"
    },
    {
      id: "7",
      name: "Formula Racing Car",
      image: "/product images/Model Cars/8.png",
      category: "Model Cars"
    },
    {
      id: "8",
      name: "Off-Road Vehicle",
      image: "/product images/Model Cars/9.png",
      category: "Model Cars"
    },
    {
      id: "9",
      name: "City Car Set",
      image: "/product images/Model Cars/10.png",
      category: "Model Cars"
    }
  ],
  "outdoor-toys": [
    {
      id: "1",
      name: "Soccer Ball & Goal Set",
      image: "/product images/Outdoor Toys/1.png",
      category: "Outdoor Toys"
    },
    {
      id: "2",
      name: "Flying Disc Ultimate",
      image: "/product images/Outdoor Toys/2.png",
      category: "Outdoor Toys"
    },
    {
      id: "3",
      name: "Basketball Hoop Mini",
      image: "/product images/Outdoor Toys/33.png",
      category: "Outdoor Toys"
    },
    {
      id: "4",
      name: "Sidewalk Chalk Set",
      image: "/product images/Outdoor Toys/4.png",
      category: "Outdoor Toys"
    },
    {
      id: "5",
      name: "Jump Rope Premium",
      image: "/product images/Outdoor Toys/5.png",
      category: "Outdoor Toys"
    },
    {
      id: "6",
      name: "Beach Ball Set",
      image: "/product images/Outdoor Toys/6.png",
      category: "Outdoor Toys"
    },
    {
      id: "7",
      name: "Water Blaster Fun",
      image: "/product images/Outdoor Toys/7.png",
      category: "Outdoor Toys"
    },
    {
      id: "8",
      name: "Bubble Maker Machine",
      image: "/product images/Outdoor Toys/8.png",
      category: "Outdoor Toys"
    },
    {
      id: "9",
      name: "Kite Flying Set",
      image: "/product images/Outdoor Toys/9.png",
      category: "Outdoor Toys"
    },
    {
      id: "10",
      name: "Sand & Beach Toys",
      image: "/product images/Outdoor Toys/10.png",
      category: "Outdoor Toys"
    }
  ],
  "puzzles": [
    {
      id: "1",
      name: "Animal Jigsaw Puzzle",
      image: "/product images/Puzzeles/1.png",
      category: "Puzzles"
    },
    {
      id: "2",
      name: "3D Puzzle Castle",
      image: "/product images/Puzzeles/2.png",
      category: "Puzzles"
    },
    {
      id: "3",
      name: "Wooden Brain Teaser",
      image: "/product images/Puzzeles/3.png",
      category: "Puzzles"
    },
    {
      id: "4",
      name: "Number Puzzle Mat",
      image: "/product images/Puzzeles/4.png",
      category: "Puzzles"
    },
    {
      id: "5",
      name: "World Map Puzzle",
      image: "/product images/Puzzeles/5.png",
      category: "Puzzles"
    },
    {
      id: "6",
      name: "Shape Matching Puzzle",
      image: "/product images/Puzzeles/6.png",
      category: "Puzzles"
    },
    {
      id: "7",
      name: "Dinosaur Puzzle Set",
      image: "/product images/Puzzeles/7.png",
      category: "Puzzles"
    },
    {
      id: "8",
      name: "Ocean Life Puzzle",
      image: "/product images/Puzzeles/8.png",
      category: "Puzzles"
    },
    {
      id: "9",
      name: "Space Adventure Puzzle",
      image: "/product images/Puzzeles/9.png",
      category: "Puzzles"
    },
    {
      id: "10",
      name: "Alphabet Puzzle Board",
      image: "/product images/Puzzeles/10.png",
      category: "Puzzles"
    }
  ],
  "rc-items": [
    {
      id: "1",
      name: "RC Racing Car",
      image: "/product images/Rc items/1.png",
      category: "RC Items"
    },
    {
      id: "2",
      name: "RC Helicopter",
      image: "/product images/Rc items/2.png",
      category: "RC Items"
    },
    {
      id: "3",
      name: "RC Monster Truck",
      image: "/product images/Rc items/3.png",
      category: "RC Items"
    },
    {
      id: "4",
      name: "RC Drone with Camera",
      image: "/product images/Rc items/4.png",
      category: "RC Items"
    },
    {
      id: "5",
      name: "RC Boat",
      image: "/product images/Rc items/5.png",
      category: "RC Items"
    },
    {
      id: "6",
      name: "RC Rock Crawler",
      image: "/product images/Rc items/6.png",
      category: "RC Items"
    },
    {
      id: "7",
      name: "RC Stunt Car",
      image: "/product images/Rc items/7.png",
      category: "RC Items"
    },
    {
      id: "8",
      name: "RC Airplane",
      image: "/product images/Rc items/8.png",
      category: "RC Items"
    },
    {
      id: "9",
      name: "RC Off-Road Vehicle",
      image: "/product images/Rc items/9.png",
      category: "RC Items"
    },
    {
      id: "10",
      name: "RC Tank",
      image: "/product images/Rc items/10.png",
      category: "RC Items"
    }
  ],
  "teddys": [
    {
      id: "1",
      name: "Classic Teddy Bear",
      image: "/product images/Teddys/1.png",
      category: "Teddys"
    },
    {
      id: "2",
      name: "Giant Cuddly Bear",
      image: "/product images/Teddys/2.png",
      category: "Teddys"
    },
    {
      id: "3",
      name: "Mini Teddy Collection",
      image: "/product images/Teddys/4.png",
      category: "Teddys"
    },
    {
      id: "4",
      name: "Teddy with Bow",
      image: "/product images/Teddys/5.png",
      category: "Teddys"
    },
    {
      id: "5",
      name: "Brown Teddy Bear",
      image: "/product images/Teddys/6.png",
      category: "Teddys"
    },
    {
      id: "6",
      name: "Teddy Bear Family",
      image: "/product images/Teddys/7.png",
      category: "Teddys"
    },
    {
      id: "7",
      name: "Colorful Teddy Set",
      image: "/product images/Teddys/8.png",
      category: "Teddys"
    },
    {
      id: "8",
      name: "Soft Teddy Companion",
      image: "/product images/Teddys/9.png",
      category: "Teddys"
    },
    {
      id: "9",
      name: "Premium Teddy Bear",
      image: "/product images/Teddys/10.png",
      category: "Teddys"
    },
    {
      id: "10",
      name: "Teddy with Heart",
      image: "/product images/Teddys/15.png",
      category: "Teddys"
    }
  ]
}

const categoryTitles: Record<string, string> = {
  "baby-toys": "Baby Toys",
  "educational-toys": "Educational Toys",
  "model-cars": "Model Cars",
  "outdoor-toys": "Outdoor Toys",
  "puzzles": "Puzzles",
  "rc-items": "RC Items",
  "teddys": "Teddys"
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
    { category: 'baby-toys' },
    { category: 'educational-toys' },
    { category: 'model-cars' },
    { category: 'outdoor-toys' },
    { category: 'puzzles' },
    { category: 'rc-items' },
    { category: 'teddys' }
  ]
}