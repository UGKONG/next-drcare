import React, { useMemo, useRef } from "react";
import Styled from "styled-components";
import { ProgramName, Menu } from "../public/interface";
import HeaderMemu from "./HeaderMenu";
import { useRouter } from "next/router";

const HeaderApp = () => {
  const router = useRouter();
  const programName = useRef<ProgramName>({
    main: "Dr. Care Union",
    sub: "회원관리 프로그램",
  });
  const menuList = useRef<Menu[]>([
    { id: 1, name: "대시보드", href: "/" },
    { id: 2, name: "회원", href: "/member" },
    { id: 3, name: "스케줄", href: "/schedule" },
    { id: 4, name: "상품", href: "/voucher" },
    { id: 5, name: "통계", href: "/chart" },
    { id: 6, name: "회계", href: "/account" },
    // {id: 7, name: '라커', href: '/rocker'},
    { id: 8, name: "히스토리", href: "/history" },
    { id: 9, name: "설정", href: "/setting" },
  ]);

  const path = useMemo<string>(() => router?.pathname, [router]);

  return (
    <Container id="header">
      <Logo name={programName.current} />
      <Menus>
        {menuList?.current?.map((item) => (
          <HeaderMemu key={item?.id} data={item} path={path} />
        ))}
      </Menus>
    </Container>
  );
};

export default HeaderApp;

const Container = Styled.header`
  display: flex;
  align-items: center;
`;
const Logo = Styled.h1<{ name: ProgramName }>`
  font-family: 'Noto Sans KR', sans-serif;
  width: 280px;
  height: 90px;
  color: #186b3d;
  font-size: 28px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &::before {
    content: '${(x) => x?.name?.main}';
  }
  &::after {
    content: '${(x) => x?.name?.sub}';
    font-size: 13px;
    letter-spacing: 1px;
  }
`;
const Menus = Styled.section`
  display: flex;
`;
