import moment from "moment";

interface FailResponse<T> {
  result: boolean;
  msg: string;
  now: string;
  data: T | T[] | undefined | null;
}

const fail = <T>(msg: string): FailResponse<T> => {
  return {
    result: false,
    msg: msg,
    now: moment().format("YYYY-MM-DD HH:mm:ss dddd"),
    data: null,
  };
};

export default fail;
