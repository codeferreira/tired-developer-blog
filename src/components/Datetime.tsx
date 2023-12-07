import { LOCALE } from "@config";

export interface Props {
  datetime: string | Date;
  size?: "sm" | "lg";
  className?: string;
  readingTime?: string;
}

export default function Datetime({
  datetime,
  size = "sm",
  className,
  readingTime,
}: Props) {
  return (
    <div className={`flex items-center opacity-80 ${className}`}>
      <span className="sr-only">Posted on:</span>
      <span className={`italic ${size === "sm" ? "text-sm" : "text-base"}`}>
        <FormattedDatetime datetime={datetime} />
        <span> ({readingTime})</span>
      </span>
    </div>
  );
}

const FormattedDatetime = ({ datetime }: { datetime: string | Date }) => {
  const myDatetime = new Date(datetime);

  const date = myDatetime.toLocaleDateString(LOCALE, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const time = myDatetime.toLocaleTimeString(LOCALE, {
    hour: "2-digit",
    minute: "2-digit",
  });

  return <>{date}</>;
};
