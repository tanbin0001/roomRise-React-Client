import { Link } from "react-router-dom";
import { useGetAllRoomsQuery } from "../../../redux/api/Rooms/rooms.api";
import moment from 'moment';

const Rooms = () => {
  const { data } = useGetAllRoomsQuery(undefined);
  console.log(data);
  const formatAvailabilityDateRange = (availableFrom :Date, availableTo:Date) => {
    const fromDate = moment(availableFrom).format('MMM D');
    const toDate = moment(availableTo).format('MMM D');
    return `${fromDate} - ${toDate}`;
  };
  
  return (
    <div className="  ">
      <div className="grid grid-cols-4 gap-3 ">
        
        {data &&
          data?.data?.map((room : any) => (
          <Link to={`/rooms/${room._id}`}>
            <div
              key={room._id}  
              className="px-4 py-8 shadow-lg max-w-[350px] font-sans rounded-xl space-y-6 mx-auto bg-white"
            >
              <div className="flex justify-center w-full h-48 lg:h-[280px] relative">
                <div className="flex justify-between items-center left-4 right-4 top-4 absolute"></div>
                <img key={room._id}
                  className="rounded-lg bg-black/40 w-full h-full"
                  src={room.images[0]}
                  alt={`Image of ${room.title}`}
                />
              </div>
              <div className="te w-[85%] mx-auto font-semibold space-y-2">
                <h6 className="text-xs md:text-base">{room.title}</h6>
                <p className="text-gray-500 text-xs md:text-sm font-semibold">
                  {formatAvailabilityDateRange(room.availableFrom, room.availableTo)}
                </p>
                <p className="text-gray-500 text-xs md:text-sm font-semibold">
                  {room.dateRange}
                </p>
                <p className="text-sm md:text-sm text-gray-500">
                  <span className="font-bold text-black">${room.price}</span>{" "}
                  night
                </p>
              </div>
            </div>
          </Link>
          ))}
      </div>
    </div>
  );
};

export default Rooms;
