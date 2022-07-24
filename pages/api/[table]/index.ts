/* eslint-disable react-hooks/rules-of-hooks */
import type { NextApiRequest, NextApiResponse } from "next";
import { Request } from "../../../public/interface";
import useDatabase from "../../../hooks/useDatabase";
import useSuccess from "../../../hooks/useSuccess";
import useFail from "../../../hooks/useFail";

export default function handler(
  req: NextApiRequest & Request,
  res: NextApiResponse
) {
  const tableName = req?.query?.table;
  let field: string[] = [];
  let keys = Object.keys(req?.query);
  keys.forEach((i) => i !== "table" && field.push(i));

  let whereArr = field?.map((key) => key + " = '" + req?.query[key] + "'");
  let sql = `
    SELECT * FROM ${tableName}
    WHERE 
    1=1 AND
    ${whereArr?.join(" AND ")} ${whereArr?.length > 0 ? "AND" : ""}
    1=1;
  `;

  useDatabase((db: any) => {
    db.query(sql, (err: any, result: any) => {
      db.end();
      if (err) {
        const send = useFail<any>(tableName + " 테이블 조회에 실패하였습니다.");
        res.status(404).json(send);
        return;
      }
      res.status(200).json(useSuccess<any>(result));
    });
  });
}
