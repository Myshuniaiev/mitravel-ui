import { title } from "./primitives";

export const Greetings = () => {
  return (
    <div className="inline-block max-w-l text-center justify-center">
      <span className={title()}>Book&nbsp;</span>
      <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
      <br />
      <span className={title()}>tours anywhere & anytime.</span>
    </div>
  );
};
