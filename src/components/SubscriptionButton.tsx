"use client";
import React from "react";
import { Button } from "./ui/button";
import axios from "axios";
import Image from "next/image";

type Props = { isPro: boolean };

const SubscriptionButton = ({ isPro }: Props) => {
  const [loading, setLoading] = React.useState(false);
  const handleSubscribe = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/stripe");
      window.location.href = response.data.url;
    } catch (error) {
      console.log("billing error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button className="mt-4" disabled={loading} onClick={handleSubscribe}>
      <Image src="/icons/white_bolt.png" width={15} height={17} alt="back" />
      {isPro ? "Manage Subscriptions" : "Go Premium"}
    </Button>
  );
};

export default SubscriptionButton;
