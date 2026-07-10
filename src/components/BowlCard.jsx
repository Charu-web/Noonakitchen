import { ShoppingCart } from "lucide-react";

const BowlCard = ({
  image,
  name,
  category,
  price,
  description,
}) => {
  return (
    <div className="bg-[#f8aa00] rounded-[30px] overflow-hidden border border-[#3d2d0d] hover:scale-[1.02] transition">

      <img
        src={image}
        alt={name}
        className="w-full h-[240px] object-cover"
      />

      <div className="p-5">

        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-black text-xl font-bold">
              {name}
            </h3>

            <p className="text-xs uppercase text-black/70">
              {category}
            </p>
          </div>

          <span className="text-2xl font-bold text-black">
            {price}
          </span>
        </div>

        <p className="text-sm text-black mt-4 leading-6">
          {description}
        </p>

        <button className="w-full mt-5 bg-black text-white py-3 rounded-full flex items-center justify-center gap-2">
          <ShoppingCart size={18} />
          Add to Order
        </button>

      </div>
    </div>
  );
};

export default BowlCard;