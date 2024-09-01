import EmptyState from "../../components/shared/EmptyState";
import { Slot } from "../../types/booking.type";
import { IRoom } from "../../types/room.type";
import SlotTable from './SlotTable';


interface SlotInfoProps {
  slots: Slot[];
  room: IRoom;
}

const SlotInfo: React.FC<SlotInfoProps> = ({ slots, room }) => {
  return (
    <>
      {slots && slots.length > 0 ? (
        <div className="mt-5">
          <SlotTable slots={slots} room={room} />
        </div>
      ) : (
        <div>
          <EmptyState message="No slot available right now." />
        </div>
      )}
    </>
  );
};

export default SlotInfo;
