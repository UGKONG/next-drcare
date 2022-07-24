export interface Request {
  params: {
    [key: string]: string;
  };
  query: {
    [key: string]: string;
  };
  body: {};
}

export interface ServerSideResponse<T> {
  props: {
    data?: T | T[] | undefined | null;
  };
}

export interface ProgramName {
  main: string;
  sub: string;
}

export interface Menu {
  id: number;
  name: string;
  href: string;
}

export interface Member {
  USER_SQ?: number;
  CENTER_SQ?: number;
  CENTER_NM?: string;
  USER_NM?: string;
  USERID?: string;
  GENDER?: string | null;
  USERHEIGHT?: number | null;
  PHONE_NO?: string | null;
  EMAIL?: string | null;
  BIRTH_DT?: string | null;
  REG_DT?: string;
  MEAS_DATE?: string | null;
  TRAINER?: number | null;
  TRAINER_NM?: string | null;
  COMMENT?: string | null;
  USERIMAGE?: string | null;
  ISUSE?: 0 | 1;
  ISPAUSE?: 0 | 1;
  UV_SQ?: number | null;
  VOUCHER_NAME?: string | null;
  USE_LASTDATE?: string | null;
  REMAINCOUNT?: number | null;
  POSE_DT?: string | null;
  ROM_DT?: string | null;
}

export interface GroupSchedule {
  CLASS_SQ?: number;
  CENTER_SQ?: number;
  ROOM_SQ?: number;
  CLASS_NAME?: string;
  MANAGER_SQ?: number;
  CLASS_DT?: string;
  START_TIME?: string;
  END_TIME?: string;
  ALLOWANCE?: number;
  REAL_ALLOWANCE?: number;
  RESERVATION_COUNT?: number;
  WAITING_COUNT?: number;
  MEMO?: string;
  CLASS_MEMO?: string;
  CREATEDBY?: number;
  CREATED?: string;
  MODIFIEDBY?: number;
  MODIFIED?: string;
  RESERV_LIST?: any | null;
  WAITING_LIST?: any | null;
  RESERV_COUNT?: any | null;
  WAIT_COUNT?: number | null;
  TRAINER_NM?: string;
  PHONE_NO?: string;
}
