"use client";

import { useState } from "react";
import { Button } from "@nextui-org/button";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { increment, decrement } from "@/features/counter/counterSlice";

export const Counter = () => {
  const dispatch = useAppDispatch();
  const counterValue = useAppSelector((state: any) => state.counter.value);

  return (
    <div>
      <h1>Counter: {counterValue}</h1>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
    </div>
  );
};
