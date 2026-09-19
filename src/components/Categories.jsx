
import assets from "../assets/assets"; 


const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const BurgerIcon = ({ className }) => (
  <svg {...iconProps} className={className} aria-hidden="true">
    <path d="M4 10a8 5 0 0 1 16 0Z" />
    <path d="M3 13h18" />
    <path d="M5 16h14v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z" />
  </svg>
);

const FriesIcon = ({ className }) => (
  <svg {...iconProps} className={className} aria-hidden="true">
    <path d="M6 10l1.5 10h9L18 10" />
    <path d="M8 10V4M11 10V3M14 10V4M16.5 10V6" />
  </svg>
);

const PizzaIcon = ({ className }) => (
  <svg {...iconProps} className={className} aria-hidden="true">
    <path d="M12 21 3.5 6a17 17 0 0 1 17 0Z" />
    <circle cx="10" cy="9" r="1" />
    <circle cx="14" cy="11.5" r="1" />
  </svg>
);

const Sparkle = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#f5b301]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
    <path d="M4 4l5 3M10 2l1 5M18 9l4 1" />
  </svg>
);


const categories = [
  {
    id: "burgers",
    title: "Burgers",
    tagline: "Hot & Juicy",
    subtitle: "Juicy & Delicious",
    image: assets.burger,
    Icon: BurgerIcon,
    href: "#menu-burgers",
  },
  {
    id: "fries",
    title: "French Fries",
    tagline: "Crispy & Golden",
    subtitle: "Crispy & Golden",
    image: assets.french,
    Icon: FriesIcon,
    href: "#menu-fries",
  },
  {
    id: "coca",
    title: "Soft Drinks",
    tagline: "Hot & Cheesy",
    subtitle: "Fresh & Stone-Baked",
    image: assets.Coca_Cola,
    Icon: PizzaIcon,
    href: "#menu-drinks",
  },
];

/* ---------- one card ---------- */
const CategoryCard = ({ title, tagline, subtitle, image, Icon, href }) => (
  <section className="relative -top-28 flex flex-col overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_30px_rgba(0,0,0,0.12)]">
  
    <div
      className="bg-[var(--pimary-color)] px-4 pb-7 pt-7 text-center"
      style={{ borderRadius: "0 0 50% 50% / 0 0 70px 70px" }}
    >
      <p className="flex items-center justify-end gap- pr-1 font-['Kaushan_Script'] text-lg text-[#f5b301]">
        {tagline}
        <Sparkle />
      </p>

      <h3 className="mt-1 font-['Anton'] text-5xl leading-none tracking-wide text-white md:text-4xl lg:text-5xl xl:text-6xl">
        {title}
      </h3>

      <div className="mt-4 flex items-center justify-center gap-3 text-white">
        <span className="h-px w-14 bg-white/70 md:w-8 lg:w-14" />
        <Icon className="h-6 w-6" />
        <span className="h-px w-14 bg-white/70 md:w-8 lg:w-14" />
      </div>

      <p className="mt-3 text-base text-white/95">{subtitle}</p>
    </div>
     

    <div className="-mt-6 flex flex-1 items-center justify-center px-4">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="h-64 w-98 object-contain mix-blend-multiply lg:h-80"
      />
    </div>


    <div className="flex justify-center px-6 pb-8 pt-2">
      <a
        href={href}
        className="group inline-flex items-center gap-4 rounded-2xl border border-[#c4161c] px-8 py-3 text-base font-medium text-[#c4161c] transition-colors hover:bg-[#c4161c] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c4161c]"
      >
        View Menu
        <svg viewBox="0 0 24 24" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 12h16M14 6l6 6-6 6" />
        </svg>
      </a>
    </div>
  </section>
);

/* ---------- section ---------- */
const Categories = () => (
  <section id="categories" className="bg-neutral-50 px-4 py-16 md:py-20">
    <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3 md:gap-5 lg:gap-8">
      {categories.map(({ id, ...card }) => (
        <div key={id} className="mx-auto w-full max-w-md md:max-w-none">
          <CategoryCard {...card} />
        </div>
      ))}
    </div>
  </section>
);

export default Categories;
