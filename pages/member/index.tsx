/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useRouter } from "next/router";
import Styled from "styled-components";
import Header from "../../components/Header";
import useAxios from "../../hooks/useAxios";
import useServerSideProps from "../../hooks/useServerSideProps";
import { Member } from "../../public/types";

type Props = { list: Member[] };

export default function 회원({ list }: Props) {
  const router = useRouter();

  const memberClick = (id: number) => {
    router.push("/member/" + id);
  };
  return (
    <>
      <Header />
      <Container>
        회원 리스트
        <br />
        <MemberList>
          {list.map((item, i) => (
            <MemberItem key={i} onClick={() => memberClick(item.USER_SQ)}>
              {JSON.stringify(item)}
            </MemberItem>
          ))}
        </MemberList>
      </Container>
    </>
  );
}

const Container = Styled.main`

`;
const MemberList = Styled.ul`
  
`;
const MemberItem = Styled.li`
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;

export const getServerSideProps = async () => {
  try {
    const { data: res } = await useAxios.get("/member");
    const list = res.data;
    return useServerSideProps({ list: list });
  } catch {
    console.log("에러");
    return useServerSideProps({ list: [] });
  }
};
