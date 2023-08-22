function Header() {
  return (
    <>
      <header className="flex justify-around items-center">
        <a href="/">
          <h1 className="underline font-bold text-5xl ">EcomSite</h1>
        </a>
        <div className="w-2/5 flex justify-between font-semibold text-2lg">
          <a
            className="hover:underline hover:text-lg"
            href="/category/men's%20clothing"
          >
            MEN
          </a>
          <a
            className="hover:underline hover:text-lg"
            href="/category/women's%20clothing"
          >
            WOMEN
          </a>
          <a
            className="hover:underline hover:text-lg"
            href="/category/jewelery"
          >
            JEWELERY
          </a>
          <a
            className="hover:underline hover:text-lg"
            href="/category/electronics"
          >
            OTHERS
          </a>
        </div>
        {/* <a href="#" className="font-bold">Cart</a> */}
      </header>
    </>
  );
}

export default Header;
