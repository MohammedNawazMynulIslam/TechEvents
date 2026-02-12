import { Search } from "./Search";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
      <div>
        <p className="text-sm font-medium tracking-widest uppercase text-[var(--text-muted)] mb-2">
          Explore & Connect
        </p>
        <h1 className="font-extrabold text-4xl md:text-5xl gradient-text leading-tight">
          Discover Events
        </h1>
        <p className="text-base text-[var(--text-secondary)] mt-3 max-w-md">
          Find the most exciting tech conferences and meetups happening around the world.
        </p>
      </div>
      <Search />
    </div>
  );
};

export default Header;
