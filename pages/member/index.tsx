import { useRouter } from "next/router";
import Styled from "styled-components";
import Header from "../cmn/Header";
import { Member } from "../cmn/interface";

const MemberApp = ({ data }: { data: Member[] }) => {
  const router = useRouter();

  return (
    <>
      <Header />
      <Container onClick={() => router.push("/member/1")}>
        회원 리스트
        <br />
        {JSON.stringify(data)}
      </Container>
    </>
  );
};

export default MemberApp;

const Container = Styled.main`
  
`;

export const getServerSideProps = async () => {
  const tempData: Member[] = [
    {
      USER_SQ: 2574,
      CENTER_SQ: 2,
      USER_NM: "\uc11c\uc5ec\uc9c4",
      USERID: "28631254",
      PHONE_NO: "010-2863-1254",
      EMAIL: null,
      BIRTH_DT: null,
      REG_DT: "2022-07-21 09:43:55",
      UV_SQ: 0,
      VOUCHER_NAME: null,
      USE_LASTDATE: null,
      REMAINCOUNT: null,
      MEAS_DATE: "2022-07-21 09:48:13",
      POSE_DT: "2022-07-21 09:48:13",
      ROM_DT: "",
      TRAINER_NM: "",
      ISPAUSE: 0,
      TRAINER: null,
      ISUSE: 1,
    },
    {
      USER_SQ: 2567,
      CENTER_SQ: 2,
      USER_NM: "\uae40\ud604\uc9c42",
      USERID: "22169783",
      PHONE_NO: "010-2216-9783",
      EMAIL: null,
      BIRTH_DT: null,
      REG_DT: "2022-07-20 11:00:13",
      UV_SQ: 0,
      VOUCHER_NAME: null,
      USE_LASTDATE: null,
      REMAINCOUNT: null,
      MEAS_DATE: "2022-07-22 11:52:09",
      POSE_DT: "2022-07-22 11:52:09",
      ROM_DT: "",
      TRAINER_NM: "",
      ISPAUSE: 0,
      TRAINER: null,
      ISUSE: 1,
    },
    {
      USER_SQ: 2564,
      CENTER_SQ: 2,
      USER_NM: "\uae40\uc9c0\ud6042",
      USERID: "50695580",
      PHONE_NO: "010-5069-5580",
      EMAIL: null,
      BIRTH_DT: null,
      REG_DT: "2022-07-19 20:57:19",
      UV_SQ: 0,
      VOUCHER_NAME: null,
      USE_LASTDATE: null,
      REMAINCOUNT: null,
      MEAS_DATE: "2022-07-19 20:59:00",
      POSE_DT: "2022-07-19 20:59:00",
      ROM_DT: "",
      TRAINER_NM: "",
      ISPAUSE: 0,
      TRAINER: null,
      ISUSE: 1,
    },
    {
      USER_SQ: 2558,
      CENTER_SQ: 2,
      USER_NM: "\uc815\ud61c\uc9c43",
      USERID: "65326554",
      PHONE_NO: "010-6532-6554",
      EMAIL: null,
      BIRTH_DT: null,
      REG_DT: "2022-07-18 18:35:55",
      UV_SQ: 0,
      VOUCHER_NAME: null,
      USE_LASTDATE: null,
      REMAINCOUNT: null,
      MEAS_DATE: "2022-07-18 18:37:49",
      POSE_DT: "2022-07-18 18:37:49",
      ROM_DT: "",
      TRAINER_NM: "",
      ISPAUSE: 0,
      TRAINER: null,
      ISUSE: 1,
    },
    {
      USER_SQ: 2557,
      CENTER_SQ: 2,
      USER_NM: "\uc784\uc218\uc9c4",
      USERID: "72240193",
      PHONE_NO: "010-7224-0193",
      EMAIL: null,
      BIRTH_DT: null,
      REG_DT: "2022-07-18 18:10:54",
      UV_SQ: 0,
      VOUCHER_NAME: null,
      USE_LASTDATE: null,
      REMAINCOUNT: null,
      MEAS_DATE: "2022-07-18 18:12:38",
      POSE_DT: "2022-07-18 18:12:38",
      ROM_DT: "",
      TRAINER_NM: "",
      ISPAUSE: 0,
      TRAINER: null,
      ISUSE: 1,
    },
    {
      USER_SQ: 2556,
      CENTER_SQ: 2,
      USER_NM: "\uc774\ud615\ub85c",
      USERID: "95248833",
      PHONE_NO: "010-9524-8833",
      EMAIL: null,
      BIRTH_DT: null,
      REG_DT: "2022-07-18 18:04:55",
      UV_SQ: 0,
      VOUCHER_NAME: null,
      USE_LASTDATE: null,
      REMAINCOUNT: null,
      MEAS_DATE: "2022-07-21 20:03:45",
      POSE_DT: "2022-07-21 20:03:45",
      ROM_DT: "",
      TRAINER_NM: "",
      ISPAUSE: 0,
      TRAINER: null,
      ISUSE: 1,
    },
  ];

  return {
    props: {
      data: tempData,
    },
  };
};
