import Styled from "styled-components";
import Link from "next/link";
import { Menu } from "./interface";
import { useMemo } from "react";

type Props = { data: Menu; path: string };

const HeaderMenuApp = ({ data, path }: Props) => {
  const isActive = useMemo<boolean>(() => {
    if (path === "/") return data?.href === path;
    if (data?.href === "/") return false;
    return path.indexOf(data?.href) > -1;
  }, [data?.href, path]);

  return (
    <Link href={data?.href}>
      <Container className={isActive ? "active" : ""}>{data?.name}</Container>
    </Link>
  );
};

export default HeaderMenuApp;

const Container = Styled.a`
  padding: 10px 16px 8px;
  font-size: 13px;
  font-weight: 600;
  color: #999;
  cursor: pointer;
  border: 1px solid #eee;
  border-radius: 6px;
  margin-right: 8px;
  box-shadow: 1px 2px 3px rgb(0 0 0 / 25%);
  letter-spacing: 1px;

  &:hover {
    color: #698a78;
  }
  &.active {
    color: #fff;
    font-weight: 600;
    background-color: #338357;
    box-shadow: 1px 2px 3px rgb(0 0 0 / 40%);
    border: none;
  }
`;
