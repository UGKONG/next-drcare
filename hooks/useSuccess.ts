import moment from "moment";

interface SuccessResponse<T> {
  result: boolean;
  msg: string;
  now: string;
  data: T | T[] | undefined | null;
}

const success = <T>(data: T): SuccessResponse<T> => {
  return {
    result: true,
    msg: "성공",
    now: moment().format("YYYY-MM-DD HH:mm:ss dddd"),
    data: data,
  };
};

export default success;
