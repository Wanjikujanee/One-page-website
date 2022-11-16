function MobileMenu() {
    return (
      <div className="block md:hidden px-4 py-3 text-white w-full bg-gray-800 border-t border-opacity-70 border-slate-700">
        <div className="flex items-center mb-3 pb-3 border-b border-slate-700">
          <img
            src="https://africaprime.com/wp-content/uploads/2020/04/ElonMusk.jpg"
            className="rounded-full w-8 h-8 cursor-pointer"
          />
          <h6 className="ml-5 cursor-pointer"></h6>
        </div>
        <div className="mobile-nav-icon">
          <ImHome size={20} />
          <h4 className="ml-5">Home</h4>
        </div>
        <div className="mobile-nav-icon">
          <HiBlog size={20} />
          <h4 className="ml-5">Blog</h4>
        </div>
        <div className="mobile-nav-icon">
          <CgContact size={20} />
          <h4 className="ml-5">Contact</h4>
        </div>
      </div>
    );
  }
  
  export default MobileMenu;