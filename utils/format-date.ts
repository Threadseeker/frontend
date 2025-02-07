import dayjs from "dayjs";

export default function (date: string) {
  return dayjs(date).format("YYYY-MM-DD");
}
