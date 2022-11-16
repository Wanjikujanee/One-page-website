import React, { Components} from 'react';




function App() {

  return (
    <>
    <nav class="bg-pink-600 shadow-lg w-full">
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
							>Contact</a>
					</div>
				</div>
			</div>
		</div>
	</nav>
      <div class=" relative bg-none	background-image: none;">
      <img src="images/pic.jpg"/>
        <h1 class="absolute text-5xl text-pink-600 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-center"  > Best trends that speaks</h1>
        <h2 class="absolute text-2xl text-pink-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded p-3" > Get Started</h2>
       </div>
    <div className="flex flex-col justify-center items-center " >
      <h1 className="text-4xl text-center text-pink-400">
        New Arrival
      </h1>
    </div>
    <div class= "container w-full bg-white p-10 gap-5 flex last: flex-wrap -mx-1 lg:-mx-4">
    {/* first card   */}
    <div class="max-w-sm rounded overflow-hidden shadow-lg display: block">
  <img class="h-80 w-96 item-clip"src="images/long.jpg"/>
  <div class="px-6 py-4">
    <p class="text-gray-700 text-base-sm">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  </div>
  {/* second card  */}
  <div class="max-w-sm rounded overflow-hidden shadow-lg display: block ">
  <img class="h-80"src="images/ll.jpg" />
  <div class="px-6 py-4">
    <p class="text-gray-700 text-base-sm">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
 </div>
  {/* third card  */}
 <div class="max-w-sm rounded overflow-hidden shadow-lg display: block">
  <img class="h-80"src="images/jacket.jpg"/>
  <div class="px-6 py-4">
    <p class="text-gray-700 text-base-sm">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  
  </div>
  </div>
  </div>

  <div class="container w-full bg-white p-10 gap-5 flex flex-wrap -mx-1 lg:-mx-4 " >
    {/* first card  */}
    <div class="max-w-sm rounded overflow-hidden shadow-lg display: md:w-full">
  <img class="h-80 w-96"src="images/long.jpg"/>
  <div class="px-6 py-4">
    <p class="text-gray-700 text-base-sm">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  </div>
  {/* second card  */}
  <div class="max-w-sm rounded overflow-hidden shadow-lg display: block ">
  <img class="h-80"src="images/ll.jpg"/>
  <div class="px-6 py-4">
    <p class="text-gray-700 text-base-sm">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
 </div>
  {/* third card  */}
 <div class="max-w-sm rounded overflow-hidden shadow-lg display: block">
  <img class="h-80"src="images/jacket.jpg" />
  <div class="px-6 py-4">
    <p class="text-gray-700 text-base-sm">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  </div>
  {/* section4 */}
     <div class="container flex-justify-center w-full display-grid bg-blue-200 p-10 " >
  <div class="w-4/5 m-auto space-y-10  ">
    <div class="md:flex ">
      <div>
        <img class="flex-col" src="images/Group 3.png" />
      </div>
      <div class="leading-tight text-clip float-left">
 <h1 class="text-3xl font-light bottom-2rem mb-1 md:text-2xl">MOST POPULAR 
SUMMER COLLECTION</h1>
<h2 class="md:text-lg " > Lorem ipsum dolor sit amet
, consecteturadipiscing elit.
Quisque a tellus ac erat rhoncus
 lacinia. </h2>
</div>
    </div>
  </div>
</div>
    <div className="flex flex-col justify-center items-center w-full mt-4" >
      <h1 className="text-4xl text-center text-black">
      EXCLUSSIVE COLLECTION
      </h1>
    </div>
    <div class="p-5 gap-14 left-0 flex flex-wrap -mx-1 lg:-mx-4 md:w-100% lg:w-100%" >
    {/* first pic */}
    <div class="left-0 max-w-sm rounded overflow-hidden shadow-lg display: block">
  <img class="h-[250px] w-100"src="images/gret.jpg"/>
  <p class="text-gray-700 text-base-sm">
    Lorem ipsum     $250
    </p>
  </div>
  {/* second pic */}
  <div class=" max-w-sm rounded overflow-hidden shadow-lg display: block">
  <img class="h-[250px] w-full"src="images/guu.jpg"/>
  <p class="text-gray-700 text-base-sm">
    Lorem ipsum     $250
    </p>
  
  </div>
  {/* third pic */}
  <div class="max-w-sm rounded overflow-hidden shadow-lg display: block">
  <img class="h-[250px] w-full"src="images/blue.jpg"/>
  <p class="text-gray-700 text-base-sm">
    Lorem ipsum     $250
    </p>
  </div>
   {/* forth pic */}
   <div class="  right-0 max-w-sm rounded overflow-hidden shadow-lg display: block">
  <img class="h-[250px] w-full"src="images/looo.jpg"/>
  <p class="text-gray-700 text-base-sm">
    Lorem ipsum     $250
    </p>
  </div>
</div>
<div class="p-5 gap-14  left-0 flex flex-wrap -mx-1 lg:-mx-4 md:w-full" >
    {/* first pic */}
    <div class="left-0 max-w-sm rounded overflow-hidden shadow-lg display: block">
  <img class="h-[250px] w-100"src="images/gret.jpg"/>
  <p class="text-gray-700 text-base-sm">
    Lorem ipsum     $250
    </p>
  </div>
  {/* second pic */}
  <div class=" max-w-sm rounded relative overflow-hidden shadow-lg display: block">
  <img class="h-[250px] w-full"src="images/guu.jpg"/>
  <p class="text-gray-700 text-base-sm">
    Lorem ipsum     $250
    </p>
  
  </div>
  {/* third pic */}
  <div class="max-w-sm rounded overflow-hidden shadow-lg display: block">
  <img class="h-[250px] w-full"src="images/blue.jpg"/>
  <p class="text-gray-700 text-base-sm">
    Lorem ipsum     $250
    </p>
  </div>
   {/* forth pic */}
   <div class="  right-0 max-w-sm rounded overflow-hidden shadow-lg display: block">
  <img class="h-[250px] w-full"src="images/looo.jpg"/>
  <p class="text-gray-700 text-base-sm">
    Lorem ipsum     $250
    </p>
  </div>
</div>

  </div>



  
    

    
  </>


  );
}
export default App;
