import SubscriptionButton from "@/components/SubscriptionButton";
import { checkSubscription } from "@/lib/subscription";
import Image from "next/image";
import React from "react";

type Props = {};

const SettingsPage = async (props: Props) => {
  const isPro = await checkSubscription();
  return (
    <div className="py-8 mx-auto max-w-7xl">
      <h1 className="text-3xl font-bold">Settings</h1>
      {isPro ? (
        <p className="text-xl text-secondary-foreground/60">
          You are a pro user!
        </p>
      ) : (
        <p className="text-lg text-secondary-foreground/60 mt-1">
          You are a free user
        </p>
      )}

      <div className="bg-[#F5F5F7] h-[180px] w-[423px] rounded-xl p-5 flex flex-row items-center justify-between mt-[12px]">
        <div>
          <p className="text-black font-black text-[16px]">Upgrade to activate your link</p>
          <p className="text-black font-normal text-[14px] w-[397px] mt-2">Upgrade your account to start creating more 10 content course. Try it risk free with our 30-day money back guarantee.</p>

          <SubscriptionButton isPro={isPro} />
        </div>

        <div>
          <Image
            src="/bolt.png"
            width={125}
            height={125}
            alt="premium"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
