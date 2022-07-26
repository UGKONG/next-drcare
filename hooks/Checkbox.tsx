import React, { ChangeEvent, FC, useEffect, useState } from "react";
import Styled from "styled-components";

export default function ({
  ref = null,
  checked = false,
  onChange = function (e: ChangeEvent<HTMLInputElement> | boolean): void {
    console.log(e);
  },
  size = "S",
  style = {},
}) {
  const [_id, _setId] = useState<string>("");
  const [_checked, _setChecked] = useState<boolean>(checked);
  const [_size, _setSize] = useState<string>(size.toLowerCase());

  const makeId = () => {
    let date = new Date();
    let tempId: number = date.getTime();
    let random: number = Math.round(Math.random() * 1000);
    _setId("C_" + String(tempId) + String(random));
  };
  const _onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let isChecked: boolean = e.target.checked;
    _setChecked(isChecked);
    onChange(isChecked);
  };

  useEffect(makeId, []);
  useEffect(() => _setChecked(checked), [checked]);

  return (
    <Wrap size={_size} style={style}>
      <Input type="checkbox" id={_id} checked={_checked} onChange={_onChange} />
      <Label htmlFor={_id} size={_size} />
    </Wrap>
  );
}

const Wrap = Styled.div<{ size: string }>`
  display: inline-flex;
  margin: 0 5px;
  width: ${(x) => (x.size === "s" ? 40 : 50)}px;
  height: ${(x) => (x.size === "s" ? 24 : 28)}px;
`;
const Input = Styled.input`
  display: none;
  &:checked + label {
    background-color: #4bc64b;
    &::after {
      left: 18px;
    }
  }
`;
const Label = Styled.label<{ size: string }>`
  width: 100%;
  height: 100%;
  border: 1px solid #eee;
  background-color: #ddd;
  padding: 2px;
  border-radius: 100px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: ${(x) => (x.size === "s" ? 18 : 26)}px;
    height: calc(100% - 4px);
    background-color: #fff;
    border-radius: 100px;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
