"use client"

import styles from "./BrandLogos.module.css"
import { 
  FrogLeafLogo, 
  DinoRexLogo, 
  CloudFrogLogo, 
  FriendsDimensionsLogo, 
  BabyLogoLogo 
} from "@/components/BrandLogos"

const brands = [
  { name: "Frog Leaf", Logo: FrogLeafLogo, bgColor: "#f0f9f4" },
  { name: "Dino Rex", Logo: DinoRexLogo, bgColor: "#f0fdf4" },
  { name: "Cloud Frog", Logo: CloudFrogLogo, bgColor: "#ecfeff" },
  { name: "Friends Dimensions", Logo: FriendsDimensionsLogo, bgColor: "#fef3c7" },
  { name: "Baby Logo", Logo: BabyLogoLogo, bgColor: "#f3f4f6" }
]

export default function BrandLogos() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Top Brands</h2>
        <div className={styles.logoGrid}>
          {brands.map((brand) => {
            const LogoComponent = brand.Logo;
            return (
              <div key={brand.name} className={styles.logoCard} style={{ backgroundColor: brand.bgColor }}>
                <div className={styles.logoWrapper}>
                  <LogoComponent className={styles.logo} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}