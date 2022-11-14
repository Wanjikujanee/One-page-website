import Pic from './pic.jpg'
import Long from './long.jpg'
import Ll from './ll.jpg'
import Jacket from './jacket.jpg'
import Group from './Group 3.png'
import Gret from './gret.jpg'
import Guu from './guu.jpg'
import Looo from './looo.jpg'
import Blue from './blue.jpg'
import Men from './men.jpg'
import Lonhu from './lonhu.jpg'
import Shirt from './shirt.jpeg'
import Yellow from './yellow.jpg'



function App() {

  return (
    <>
    <nav class="bg-pink-600 shadow-lg">
		<div class="max-w-6xl mx-auto px-4">
			<div class="flex justify-between">
				<div class="flex space-x-7">

					<div class="flex items-center space-x-1">
						<a
							href=""
							class="py-4 px-2 text-white font-semibold hover:text-pink-200 transition duration-300"
							>Home</a
						>
						<a
							href=""
							class="py-4 px-2 text-white font-semibold hover:text-pink-200 transition duration-300"
							>About</a
						>
						<a
							href=""
							class="py-4 px-2 text-white font-semibold hover:ttext-pink-200 transition duration-300"
							>Blog</a
						>
						<a
							href=""
							class="py-4 px-2 text-white font-semibold hover:text-pink-200 transition duration-300"
							>Contact</a
						>
					</div>
          <div class="md:hidden ">
	{/* <button class="outline-none mobile-menu-button">
		<svg
			class="w-6 h-6 text-white"
			x-show="!showMenu"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
		<path d="M4 6h16M4 12h16M4 18h16"></path>
		</svg>
	</button> */}
</div>
<div class="hidden mobile-menu">
	<ul class="display: none">

		<li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-pink-600 font-semibold">Home</a></li>
		<li><a href="#services" class="block text-sm px-2 text-white py-4 transition duration-300">About</a></li>
		<li><a href="#about" class="block text-sm px-2 text-white py-4transition duration-300">Blog</a></li>
		<li><a href="#contact" class="block text-sm px-2 text-white  py-4 transition duration-300">Contact </a></li>
	</ul>
</div>
				</div>
			</div>
		</div>
	</nav>
    
      <div class=" relative bg-none	background-image: none;">
        <img  src={Pic} alt="pic.jpg"/> 
        <h1 class="absolute text-5xl text-pink-600 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-center"  > Best trends that speaks</h1>
        <h2 class="absolute text-2xl text-pink-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded" > Get Started</h2>
       </div>
    <div className="flex flex-col md:flex-row w-screen my-auto items-center mt-16 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" >
      <h1 className="text-4xl text-center text-pink-400">
        Items for sale
      </h1>
    </div>

    <div class="p-10 gap-5 flex flex-wrap -mx-1 lg:-mx-4">
    {/* first card   */}
    <div class="max-w-sm rounded overflow-hidden shadow-lg display: block">
  <img class="h-80 w-96"src={Long} alt="long.jpg"/>
  <div class="px-6 py-4">
    <p class="text-gray-700 text-base-sm">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  </div>
  {/* second card  */}
  <div class="max-w-sm rounded overflow-hidden shadow-lg display: block ">
  <img class="h-80"src={Ll} alt="ll.jpg"/>
  <div class="px-6 py-4">
    <p class="text-gray-700 text-base-sm">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
 </div>
  {/* third card  */}
 <div class="max-w-sm rounded overflow-hidden shadow-lg display: block">
  <img class="h-80"src={Jacket} alt="jacket.jpg"/>
  <div class="px-6 py-4">
    <p class="text-gray-700 text-base-sm">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  
  </div>
  </div>
  </div>

  <div class="p-10 gap-5 flex flex-wrap -mx-1 lg:-mx-4" >
    {/* first card  */}
    <div class="max-w-sm rounded overflow-hidden shadow-lg display: block">
  <img class="h-80 w-96"src={Long} alt="long.jpg"/>
  <div class="px-6 py-4">
    <p class="text-gray-700 text-base-sm">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  </div>
  {/* second card  */}
  <div class="max-w-sm rounded overflow-hidden shadow-lg display: block ">
  <img class="h-80"src={Ll} alt="ll.jpg"/>
  <div class="px-6 py-4">
    <p class="text-gray-700 text-base-sm">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
 </div>
  {/* third card  */}
 <div class="max-w-sm rounded overflow-hidden shadow-lg display: block">
  <img class="h-80"src={Jacket} alt="jacket.jpg"/>
  <div class="px-6 py-4">
    <p class="text-gray-700 text-base-sm">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  
  </div>
  </div>
  <div class="container  md:container md:mx-auto p-2rem h-150 flex w-90 items-center py-2 bg-blue-200">
<div>
      <img class="h-50 w-50" src={Group} alt="Group 3.jpg"/></div>
      <div class="leading-tight">
 <h1 class="text-3xl font-light top-2 mb-1">MOST POPULAR 
SUMMER COLLECTION</h1>
<h2>Lorem ipsum dolor sit amet
, consecteturadipiscing elit.
Quisque a tellus ac erat rhoncus
 lacinia.</h2>
 <h3 class="bottom-3 text-1xl text-white bg-black w-fit">Learn More</h3>
</div>
    </div>
    <div className="flex flex-col md:flex-row w-screen my-auto items-center mt-16 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" >
      <h1 className="text-4xl text-center text-black">
      EXCLUSSIVE COLLECTION
      </h1>
    </div>
    <div class="p-5 gap-9 flex flex-wrap -mx-1 lg:-mx-4" >
    {/* first pic */}
    <div class=" h-[250px] w-64 max-w-sm rounded overflow-hidden shadow-lg display: block">
  <img class="h-30 w-30"src={Gret} alt="gret.jpg"/>
  </div>
  {/* second pic */}
  <div class=" h-[250px] w-64  max-w-sm rounded overflow-hidden shadow-lg display: block">
  <img class="h-50 w-50"src={Guu} alt="guu.jpg"/>
  </div>
  {/* fifth pic */}
  <div class="h-[250px] w-64  max-w-sm rounded overflow-hidden shadow-lg display: block">
  <img class="h-50 w-50"src={Blue} alt="blue.jpg"/>
  </div>
   {/* fifth pic */}
   <div class="h-[250px] w-64  max-w-sm rounded overflow-hidden shadow-lg display: block">
  <img class="h-50 w-50"src={Looo} alt="looo.jpg"/>
  </div>
</div>
<div class="p-5 gap-9 flex flex-wrap -mx-1 lg:-mx-4" >
    {/* first pic */}
    <div class=" h-[250px] w-64 max-w-sm rounded overflow-hidden shadow-lg display: block">
  <img class="h-30 w-30"src={Men} alt="men.jpg"/>
 
  </div>
  {/* second pic */}
  <div class=" h-[250px] w-64  max-w-sm rounded overflow-hidden shadow-lg display: block">
  <img class="h-50 w-50"src={Lonhu} alt="lonhu.jpg"/>
  </div>
  {/* fifth pic */}
  <div class="h-[250px] w-64  max-w-sm rounded overflow-hidden shadow-lg display: block">
  <img class="h-50 w-50"src={Yellow} alt="yellow.jpg"/>
  </div>
   {/* fifth pic */}
   <div class="h-[250px] w-64  max-w-sm rounded overflow-hidden shadow-lg display: block">
  <img class="h-50 w-50"src={Shirt} alt="shirt.jpeg"/>
  </div>
</div>
 
  </div>

  </>

  );
}
export default App;
