import africaHabitant from '../../assets/partners/africaHabitant.png';
import afripark from '../../assets/partners/afripark.png';
import chamberOfTourism from '../../assets/partners/chamber-of-tourism.png';
import dianaFossey from '../../assets/partners/diana-fossey.png';
import rtta from '../../assets/partners/rtta.png';
import visitRwanda from '../../assets/partners/visit-rwanda.png';

const Partners = () => {
  const name = 'partber image';
  return (
    <div className="md:w-[1000px] md:mx-auto">
      <h2 className="py-3 text-xl text-center font-semibold lg:font-extrabold lg:text-3xl lg:py-4">
        Our partners
      </h2>
      <div className="flex flex-wrap items-center gap-2 my-10">
        <div className="bg-white shadow-md rounded-md overflow-hidden w-48 mx-auto">
          <img
            src={africaHabitant}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-sm font-semibold text-center">
              African habitant explorer
            </h3>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-md overflow-hidden w-48 mx-auto">
          <img
            src={afripark}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-sm font-semibold text-center">africanparks</h3>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-md overflow-hidden w-48 mx-auto">
          <img
            src={visitRwanda}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-sm font-semibold text-center">Visit Rwanda</h3>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-md overflow-hidden w-48 mx-auto">
          <img
            src={dianaFossey}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-sm font-semibold text-center">
              Diana fossey gorilla fund
            </h3>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-md overflow-hidden w-48 mx-auto">
          <img src={rtta} alt={name} className="w-full h-full object-cover" />
          <div className="p-4">
            <h3 className="text-sm font-semibold text-center">RTTA</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
