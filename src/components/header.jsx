function Header() {
    return (
        <>
        <header className="bg-black w-screen text-white flex justify-around items-center" > 
            <h1 className="underline font-bold text-5xl ">Logo</h1>
            <div className="w-1/4 flex justify-between">
                <a href="#">MEN</a>
                <a href="#">WOMEN</a>
                <a href="#">OTHERS</a>
            </div>
        </header>
        </>
    );
}

export default Header;