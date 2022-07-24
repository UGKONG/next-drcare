import { NextApiRequest, NextApiResponse } from "next";
import useAxios from "../../../hooks/useAxios";
import fail from "../../../hooks/useFail";
import success from "../../../hooks/useSuccess";
import { Member } from "../../../public/types";

export default function api(req: NextApiRequest, res: NextApiResponse) {
  const id = Number(req?.query?.id);
  useAxios.get("/member").then(({ data }) => {
    if (!data?.result || !data?.data) {
      return res.status(404).send(fail("조회 실패"));
    }
    const find = data?.data?.find((x: Member) => x?.USER_SQ === id);
    if (!find) return res.status(404).send(fail("조회 실패"));
    res.send(success(find));
  });
}
