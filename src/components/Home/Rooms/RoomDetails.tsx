import { useParams } from "react-router-dom";
import { useGetAllRoomsQuery } from "../../../redux/api/Rooms/rooms.api";
import { getMatchedData } from "./getMatchedData";

const RoomDetails = () => {
    const {_id} = useParams();
    console.log(_id);
    const { data } = useGetAllRoomsQuery(undefined);

    const room = getMatchedData(_id as string, data?.data);
    console.log(room,'*************************');
 
 return (
 <div>
    <div className="mx-auto" >
    {/* gallery section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {room && room.images.map((image:string, index : number) => (
            <img
              key={index}
              className={`rounded-lg w-full ${index === 0 || index ===1? 'lg:h-[400px]' : 'lg:h-[200px]'}`}
              src={image}
              alt={`Room Image ${index + 1}`}
            />
          ))}
        </div>
        </div>

        <div>
        <h1 className="text-2xl font-bold   mt-10">{room.title}</h1>
        <p>{room.description}</p>
        </div>
{/* <div className="lg:flex lg:my-20">


    
      <div className="lg:max-w-[500px]">
        <img
          className="rounded-lg lg:w-[900px] lg:h-[400px]"
          src={room ? room.images[0] : 'https://source.unsplash.com/350x350/?men'}
          alt="image is not available"
        />
      </div>
      <div className="bg-white space-y-7 lg:w-[900px] lg:h-[400px] rounded-tr-lg rounded-br-lg p-10 shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)]">
        <div className="space-y-1">
          <h2 className="text-3xl font-medium text-gray-700 font-sans">
            {room ? room.title : "Location not available"}
          </h2>
        </div>
        <div>
          <p>{room ? room.description : "not available"}</p>
        </div>
        <div>
          <button className="text-sm font-bold text-[#0d87f8] overflow-hidden shadow-lg border border-[#0d87f8] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#0d87f8] before:hover:translate-x-0 before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-[#0d87f8] relative inline-block hover:text-black py-3 px-6 rounded-full">
            Reserve now
          </button>
        </div>
      </div>
    </div> */}
    <section className="lg:flex justify-between gap-x-5  ">
      {/* Profile Card */}
      <div className=" mx-auto max-w-[300px] max-h-[400px] md:w-[350px]  bg-white my-20 p-6 md:p-8 shadow-md rounded-2xl space-y-8">
        {/* Profile Image & Background */}
        <div className="relative">
          <img
            className="w-full h-full rounded-2xl bg-gray-500"
            src="https://source.unsplash.com/350x150/?northern lights"
            alt="image is not available"
          />
          <img
            className="w-[100px] h-[100px] absolute -bottom-10 left-1/2 -translate-x-1/2 rounded-full bg-gray-400 border border-white"
            src={room ? room.sellerId.imageLink : ''}
            alt="image is not available"
          />
        </div>
        {/* Profile Name & Role */}
        <div className="pt-8 text-center space-y-1-red-700">
          <h1 className="text-xl md:text-2xl">{room?.contactInfo?.name}</h1>
          <p className="text-gray-400 text-sm">{room?.contactInfo?.email}</p>
          <p className="text-gray-400 text-sm">{room?.contactInfo?.phone}</p>
        </div>
      </div>
      {/* Room Details */}
      <div className="lg:w-[900px] max-h-[400px]  bg-white my-20 p-6 md:p-8 shadow-md rounded-2xl   space-y-6 ">
        
        <div className="">
          <h1 className="font-bold text-xl">More Details about this house:</h1>
       <div className="flex justify-between my-5">
       <div>
          <p className="text-gray-600 "><span className="font-bold">Price: </span> ${room ? room.price : "N/A"}/night</p>
          <p className="text-gray-600 "><span className="font-bold">Bedrooms: </span> {room ? room.bedrooms : "N/A"}</p>
          <p className="text-gray-600 "><span className="font-bold">Bathrooms: </span> {room ? room.bathrooms : "N/A"}</p>
       
        </div>

        <div>
          <p className="text-gray-600"><span className="font-bold">Address:</span>  {room ? `${room.address.street}, ${room.address.city}, ${room.address.state}, ${room.address.zipcode}` : "N/A"}</p>
          <p className="text-gray-600"><span className="font-bold">Available From : </span> {room ? new Date(room.availableFrom).toLocaleDateString() : "N/A"}</p>
          <p className="text-gray-600"><span className="font-bold">Available To : </span>{room ? new Date(room.availableTo).toLocaleDateString() : "N/A"}</p>
        </div>
        
       </div>
       
        </div>

        <div className="">
        <h1 className="font-bold text-xl">What this place offers!</h1>

          <ul>
            {room?.amenities?.map((amenity :string, amenityIndex:number)  => (
              <li key={amenityIndex}>{amenity}</li>
            ))}
          </ul>
        </div>
        <button
          className="text-sm font-bold text-[#0d87f8] overflow-hidden shadow-lg border border-[#0d87f8] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#0d87f8] before:hover:translate-x-0 before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-[#0d87f8] relative inline-block hover:text-black py-3 px-6 rounded-full"
        >
          Reserve now
        </button>
      </div>

      
    </section>

  
   
 </div>
 );
};

export default RoomDetails;