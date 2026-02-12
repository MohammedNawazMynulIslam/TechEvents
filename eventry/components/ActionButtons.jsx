"use client"
import { addGoingEvent, addInterestedEvent } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

const ActionButtons = ({ eventId, interestedUserIds, fromDetails, goingUserIds }) => {
  const { auth } = useAuth()

  const isInterested = interestedUserIds.find(id => id === auth?.id)
  const isGoing = goingUserIds?.find(id => id === auth?.id)
  const [interested, setInterested] = useState(isInterested)
  const [going, setGoing] = useState(isGoing)
  const [isPending, startTransition] = useTransition();
  const router = useRouter()

  async function toggleInterest() {
    if (auth) {
      await addInterestedEvent(eventId, auth?.id)
      setInterested(!interested)
    }
    else {
      router.push("/login")
    }
  }

  const markGoing = async () => {
    if (auth) {
      router.push(`/payment/${eventId}`)
    } else {
      router.push("/login")
    }
  }

  return (
    <div className={`w-full flex gap-3 mt-4 ${fromDetails && "flex-1"}`}>
      <button
        className={`w-full flex items-center justify-center gap-2 ${interested ? 'btn-primary' : ''}`}
        onClick={() => startTransition(() => toggleInterest())}
      >
        <svg className="w-4 h-4" fill={interested ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
        {interested ? "Interested" : "Interested"}
      </button>
      <button
        disabled={auth && going}
        onClick={() => startTransition(() => markGoing())}
        className="w-full flex items-center justify-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        {going ? "Going ✓" : "Going"}
      </button>
    </div>
  );
};

export default ActionButtons;
