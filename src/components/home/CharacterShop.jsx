import Link from "next/link"
import "./CharacterShop.css"

const CharacterShop = () => {
  return (
    <section className="character-shop">
      <div className="character-decorations">
        <div className="character-blob blob-1"></div>
        <div className="character-blob blob-2"></div>
        <div className="character-blob blob-3"></div>
        <div className="star star-1">★</div>
        <div className="star star-2">★</div>
        <div className="star star-3">★</div>
        <div className="star star-4">★</div>
      </div>

      <div className="container">
        <div className="character-content">
          <div className="character-text">
            <h2 className="character-title">CHARACTER SHOP</h2>
            <p className="character-description">
              Discover our exclusive collection of character toys featuring beloved heroes and friends. From action
              figures to plush companions, find the perfect character toy that brings stories to life and sparks
              imagination.
            </p>
            <Link href="/category/characters" className="btn btn-primary btn-lg">
              Shop Now
            </Link>
          </div>

          <div className="character-image">
            <img src="/happy-child-playing-with-colorful-character-toys.jpg" alt="Character toys" className="character-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CharacterShop
