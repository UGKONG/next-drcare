/* eslint-disable react-hooks/rules-of-hooks */
import Styled from "styled-components";
import Header from "../../components/Header";
import useAxios from "../../hooks/useAxios";
import useServerSideProps from "../../hooks/useServerSideProps";
import { Member, Request } from "../../public/types";

export default function 회원상세({ data }: { data: Member }) {
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
  try {
    const { data: res } = await useAxios.get("/member/" + id);
    const data = res.data;
    return useServerSideProps({ data });
  } catch {
    console.log("에러");
    return useServerSideProps({ data: null });
  }
};
