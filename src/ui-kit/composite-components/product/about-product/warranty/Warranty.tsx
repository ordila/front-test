import React from "react";

import Wallet from "@/assets/icons/wallet.svg";
import Image from "next/image";
import Warranty from "@/assets/icons/warranty.svg";
import Location from "@/assets/icons/location.svg";
import Delivery from "@/assets/icons/delivery.svg";
import Truck from "@/assets/icons/truck.svg";

const ProductInfo = () => {
  return (
    <div className="space-y-6 uppercase">
      {/* Payment Section */}
      <section className="border-b pb-6">
        <div className="flex items-center gap-3 mb-2">
          <Image src={Wallet} alt="Wallet" width={20} height={20} />
          <h3 className="text-lg font-bold uppercase">Payment</h3>
        </div>
        <p className="text-sm text-gray-700 uppercase">
          Payment upon receipt of goods, payment by card at the branch, Google
          Pay, online card, cashless for legal entities, cashless for
          individuals, Apple Pay, Pay Online Visa, MasterCard
        </p>
      </section>

      {/* Warranty Section */}
      <section className="border-b pb-6">
        <div className="flex items-center gap-3 mb-2">
          <Image src={Warranty} alt="Wallet" width={20} height={20} />

          <h3 className="text-lg font-bold uppercase">Warranty</h3>
        </div>
        <p className="text-sm text-gray-700 uppercase">
          Warranty: 12 months official warranty from the manufacturer. Exchange
          or return goods within 14 days.
        </p>
      </section>

      {/* Delivery Section */}
      <section>
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-lg font-bold uppercase">Delivery</h3>
        </div>

        <div className="space-y-4 text-sm text-gray-700 ">
          <div className="flex justify-between">
            <div className="flex items-start gap-2">
              <Image src={Location} alt="Wallet" width={20} height={20} />

              <div>
                <p>Pickup from stores</p>
                <p className="text-xs text-gray-500">
                  Available tomorrow from 9:00
                </p>
              </div>
            </div>
            <span className="font-bold text-gray-800">For Free</span>
          </div>

          <div className="flex justify-between">
            <div className="flex items-start gap-2">
              <Image src={Truck} alt="Wallet" width={20} height={20} />

              <div>
                <p>Delivery of our store</p>
                <p className="text-xs text-gray-500">
                  Available tomorrow from 9:00
                </p>
              </div>
            </div>
            <span className="font-bold text-gray-800">$29.99</span>
          </div>

          <div className="flex justify-between">
            <div className="flex items-start gap-2">
              <Image src={Delivery} alt="Wallet" width={20} height={20} />

              <div>
                <p>Pickup from postal operators offices</p>
                <p className="text-xs text-gray-500">On demand</p>
              </div>
            </div>
            <span className="font-bold text-gray-800">For Free</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductInfo;
