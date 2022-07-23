import Styled from "styled-components";
import Header from "../../components/Header";
import { Member, Request } from "../../public/interface";

export default function 회원상세({ data }: { data: Member }) {
  console.log(data);
  return (
    <>
      <Header />
      <Container>
        회원상세정보
        <br />
        {JSON.stringify(data)}
      </Container>
    </>
  );
}

const Container = Styled.main`
  
`;

export const getServerSideProps = async ({ params }: Request) => {
  const id = Number(params.id);

  const tempData: Member = {
    USER_SQ: id,
    CENTER_SQ: 2,
    CENTER_NM:
      "\ub2e5\ud130\ud544\ub77c\ud14c\uc2a4 \uc138\uc885\uace0\uc6b4\uc810",
    USER_NM: "\ubc15\uc9c0\uc740",
    USERID: "34513709",
    GENDER: "F",
    USERHEIGHT: null,
    PHONE_NO: "010-3451-3709",
    EMAIL: "",
    BIRTH_DT: "1994-08-01",
    REG_DT: "2022-06-02 02:43:50",
    MEAS_DATE: null,
    TRAINER: 0,
    TRAINER_NM: null,
    COMMENT:
      "22-05-16 : \uc2e0\uaddc ST2\ud68c + \uadf8\ub8f920 / \ub2f9\uc77c\ub4f1\ub85d 1\ud68cSVC/ \ud0a4165\r\n*\uccb4\uc9c0\ubc29,\uadfc\ub825\uad00\ub9ac / \ubaa9,\uc5b4\uae68\ubd88\ud3b8(1\uc77cPC\uc0ac\uc6a9\uc2dc\uac049\uc2dc\uac04) / 5\uac1c\uc6d4\uc804 \ud5c8\ub9ac\uc5d0 \uac15\ud55c \ub2f4, \ud604\uc7ac \ucee8\ub514\uc158 OK / \uc6b4\ub3d9\uacbd\ud5d8X / \r\n22-05-27 : \ud50c\ub7ab\ubc31 \uc758\uc2ec, \ud584\uc2a4\ud2b8\ub9c1 \ub2e8\ucd95\uc2ec\ud568(\ubc15\uc2a4\uc704\uc5d0\uc11c\ub3c4) - (\uc218\ud638T) ",
    USERIMAGE: "",
    ISUSE: 1,
  };

  return {
    props: { data: tempData },
  };
};
