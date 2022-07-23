import Styled from "styled-components";
import Header from "../cmn/Header";
import { GroupSchedule } from "../cmn/interface";

const ScheduleApp = ({ data }: { data: GroupSchedule[] }) => {
  return (
    <>
      <Header />
      <Container>
        스케줄 <br />
        {JSON.stringify(data)}
      </Container>
    </>
  );
};

export default ScheduleApp;

const Container = Styled.main`
  
`;

export const getServerSideProps = () => {
  const tempData: GroupSchedule[] = [
    {
      CLASS_SQ: 1984,
      CENTER_SQ: 2,
      ROOM_SQ: 29,
      CLASS_NAME: "\uc624\uc804A (\ub9ac\ud3ec\uba38)",
      MANAGER_SQ: 1858,
      CLASS_DT: "2022-06-21 00:00:00",
      START_TIME: "09:30",
      END_TIME: "10:30",
      ALLOWANCE: 30000,
      REAL_ALLOWANCE: 0,
      RESERVATION_COUNT: 4,
      WAITING_COUNT: 4,
      MEMO: "",
      CLASS_MEMO: "",
      CREATEDBY: 1458,
      CREATED: "2022-04-18 12:33:57",
      MODIFIEDBY: 0,
      MODIFIED: "0000-00-00 00:00:00",
      RESERV_LIST: null,
      WAITING_LIST: null,
      RESERV_COUNT: null,
      WAIT_COUNT: null,
      TRAINER_NM: "\uc774\ud55c\uc6b8",
      PHONE_NO: "010-4649-1014",
    },
    {
      CLASS_SQ: 2002,
      CENTER_SQ: 2,
      ROOM_SQ: 29,
      CLASS_NAME: "\uc624\uc804A (\ub9ac\ud3ec\uba38)",
      MANAGER_SQ: 1858,
      CLASS_DT: "2022-06-21 00:00:00",
      START_TIME: "10:30",
      END_TIME: "11:30",
      ALLOWANCE: 30000,
      REAL_ALLOWANCE: 0,
      RESERVATION_COUNT: 4,
      WAITING_COUNT: 4,
      MEMO: "",
      CLASS_MEMO: "",
      CREATEDBY: 1458,
      CREATED: "2022-04-18 12:34:30",
      MODIFIEDBY: 0,
      MODIFIED: "0000-00-00 00:00:00",
      RESERV_LIST: null,
      WAITING_LIST: null,
      RESERV_COUNT: null,
      WAIT_COUNT: null,
      TRAINER_NM: "\uc774\ud55c\uc6b8",
      PHONE_NO: "010-4649-1014",
    },
    {
      CLASS_SQ: 2511,
      CENTER_SQ: 2,
      ROOM_SQ: 29,
      CLASS_NAME: "\uc624\ud6c4A (\ub9ac\ud3ec\uba38)",
      MANAGER_SQ: 1775,
      CLASS_DT: "2022-06-21 00:00:00",
      START_TIME: "18:30",
      END_TIME: "19:30",
      ALLOWANCE: 30000,
      REAL_ALLOWANCE: 0,
      RESERVATION_COUNT: 4,
      WAITING_COUNT: 4,
      MEMO: "",
      CLASS_MEMO: "",
      CREATEDBY: 1458,
      CREATED: "2022-05-16 10:12:19",
      MODIFIEDBY: 0,
      MODIFIED: "0000-00-00 00:00:00",
      RESERV_LIST: null,
      WAITING_LIST: null,
      RESERV_COUNT: null,
      WAIT_COUNT: null,
      TRAINER_NM: "\uc774\uc218\ud638",
      PHONE_NO: "010-6630-6688",
    },
    {
      CLASS_SQ: 2515,
      CENTER_SQ: 2,
      ROOM_SQ: 29,
      CLASS_NAME: "\uc624\ud6c4A (\ub9ac\ud3ec\uba38)",
      MANAGER_SQ: 1775,
      CLASS_DT: "2022-06-21 00:00:00",
      START_TIME: "19:30",
      END_TIME: "20:30",
      ALLOWANCE: 30000,
      REAL_ALLOWANCE: 0,
      RESERVATION_COUNT: 4,
      WAITING_COUNT: 4,
      MEMO: "",
      CLASS_MEMO: "",
      CREATEDBY: 1458,
      CREATED: "2022-05-16 10:12:45",
      MODIFIEDBY: 0,
      MODIFIED: "0000-00-00 00:00:00",
      RESERV_LIST: null,
      WAITING_LIST: null,
      RESERV_COUNT: null,
      WAIT_COUNT: null,
      TRAINER_NM: "\uc774\uc218\ud638",
      PHONE_NO: "010-6630-6688",
    },
  ];

  return {
    props: {
      data: tempData,
    },
  };
};
