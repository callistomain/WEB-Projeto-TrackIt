import { Button } from "../../../components/Button";
import { HabitCardStyle } from "./HabitCardStyle";
import { Input } from '../../../components/Input';
import axios from 'axios';
import { useContext, useState } from 'react';
import { url } from '../../../constants/urls';
import { UserContext } from '../../../UserContext';
import { ThreeDots } from  'react-loader-spinner'
import styled from "styled-components";
import { colorGray } from "../../../constants/colors";

export default function HabitCreate({cancel, createInfo, setCreateInfo}) {
  const [loading, setLoading] = useState(false);
  const week = ["D", "S", "T", "Q", "Q", "S", "S"];
  const user = useContext(UserContext);

  function submitHandler(e) {
    e.preventDefault();
    
    const days = [];
    const arr = createInfo.days;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) days.push(i);
    }
    
    if (!days.length) return alert("Selecione algum dia.");
    
    setLoading(true);
    const name = createInfo.name;
    const obj = { name, days };

    const headers = {
      headers: { Authorization: "Bearer " + user.token }
    }

    axios.post(url.habits, obj, headers)
    .then(r => {
      cancel();
      setCreateInfo({
        name: "",
        days: new Array(7).fill(false)
      })
    })
    .catch(e => console.log(e));
  }

  function saveName(e) {
    const name = e.target.value;
    setCreateInfo(info => ({...info, name}));
  }

  function toggleDay(i) {
    const days = Array.from(createInfo.days);
    days[i] = !days[i];
    setCreateInfo(info => ({...info, days}));
  }

  return (
    <HabitCardStyle as={"form"} onSubmit={submitHandler}>

      <Input data-identifier="input-habit-name" onChange={saveName} value={createInfo.name} type="text" id="name" placeholder="nome do hábito" required disabled={loading}/>

      <ul className="days">
        {createInfo.days.map((e, i) => 
          <Day data-identifier="week-day-btn" key={i} onClick={() => toggleDay(i)} selected={e}> {week[i]} </Day>
        )}
      </ul>

      <div className="buttons">
        <button data-identifier="cancel-habit-create-btn" onClick={cancel} className="cancel" type="button">Cancelar</button>
        <Button data-identifier="save-habit-create-btn" disabled={loading}>
          {loading 
            ? <ThreeDots 
                height="inherit"
                width="80" 
                radius="9"
                color="white" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{justifyContent: "center"}}
                wrapperClassName=""
                visible={true}
              />
            : "Salvar"
          }
        </Button>
      </div>

    </HabitCardStyle>
  );
}

const Day = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid ${colorGray};
  border-radius: 5px;
  cursor: pointer;

  color: ${p => p.selected ? "white" : colorGray};
  background-color: ${p => p.selected ? colorGray : null};
`;