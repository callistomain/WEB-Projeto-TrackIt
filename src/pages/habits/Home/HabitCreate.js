import { Button } from "../../../components/Button";
import { HabitCardStyle } from "./HabitCardStyle";
import { Input } from '../../../components/Input';
import axios from 'axios';
import { useContext, useState } from 'react';
import { url } from '../../../constants/urls';
import { UserContext } from '../../../UserContext';
import { ThreeDots } from  'react-loader-spinner'

export default function HabitCreate({cancel}) {
  const [loading, setLoading] = useState(false);
  const user = useContext(UserContext);

  function eventHandler(e) {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const {D, S, T, Q, Qi, Sx, Sb} = form;
    const arr = [D, S, T, Q, Qi, Sx, Sb];
    const days = arr.filter(e => e.checked).map(e => e.value);

    const obj = {
      name: form[0].value,
      days
    }

    const headers = {
      headers: { Authorization: "Bearer " + user.token }
    }

    axios.post(url.habits, obj, headers)
    .then(r => {
      console.log(r);
      cancel();
    })
    .catch(e => console.log(e));
  }

  return (
    <HabitCardStyle as="form" onSubmit={eventHandler}>
      <Input type="text" placeholder="nome do hábito" required disabled={loading}/>
      <ul className="days">
        <li>
          <input type="checkbox" name="D" id="D" value={0} />
          <label htmlFor="D">D</label>
        </li>
        <li>
          <input type="checkbox" name="S" id="S" value={1} />
          <label htmlFor="S">S</label>
        </li>
        <li>
          <input type="checkbox" name="T" id="T" value={2} />
          <label htmlFor="T">T</label>
        </li>
        <li>
          <input type="checkbox" name="Q" id="Q" value={3} />
          <label htmlFor="Q">Q</label>
        </li>
        <li>
          <input type="checkbox" name="Qi" id="Qi" value={4} />
          <label htmlFor="Qi">Q</label>
        </li>
        <li>
          <input type="checkbox" name="Sx" id="Sx" value={5} />
          <label htmlFor="Sx">S</label>
        </li>
        <li>
          <input type="checkbox" name="Sb" id="Sb" value={6} />
          <label htmlFor="Sb">S</label>
        </li>
      </ul>
      <div className="buttons">
        <button className="cancel" type="button" onClick={cancel}>Cancelar</button>
        <Button disabled={loading}>
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

