import { useParams } from "react-router-dom";
import { useGetSingleRoomQuery } from "../../redux/features/admin/roomManagement.api";
import Loader from "../../components/shared/Loader";
import { useGetSlotsByRoomQuery } from "../../redux/features/admin/slotManagement.api";
import RoomInfo from "./RoomInfo";
import SlotInfo from './SlotInfo'
import Container from "../../components/shared/Container";
const RoomDetails = () => {
const { id } = useParams();
const { data:roomData, isLoading:isRoomLoading } = useGetSingleRoomQuery(id);
const {data:slotData, isLoading:isSlotsLoading} = useGetSlotsByRoomQuery(id)
const slots = slotData?.data;
const room = roomData?.data;
// const roomId = room?._id


  if (isRoomLoading || isSlotsLoading) {
    return <Loader></Loader>;
  }

  return (
    <div>
        <Container>
        <RoomInfo room={room}></RoomInfo>
      <SlotInfo slots={slots}  room={room} ></SlotInfo>
      </Container>
    </div>
  );
};

export default RoomDetails;
