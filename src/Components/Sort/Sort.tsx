import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpen, setStateItem } from "../../redux/Fillter/slice";
import { SortPropertyEnum } from "../../redux/Fillter/types";
import { RootState } from "../../redux/store";
import './Sort.scss'


export const sortItems = [
  { name: "цене(desc)", sortProperty: SortPropertyEnum.DPRICE },
  { name: "цене(asc)", sortProperty: SortPropertyEnum.APRICE },
];

const Sort: React.FC = React.memo(() => {
  const dispatch = useDispatch()

  const selected = useSelector((state:RootState)=> state.fillter.item)
  const open = useSelector((state: RootState)=> state.fillter.open)

  const funcItemName = (obj: { name: string; sortProperty: SortPropertyEnum }) => {
      dispatch(setStateItem(obj));
      setOpen(false);
  }

  const openSortModal = () => {
      dispatch(setOpen(!open))
  }

return (
  <div className='sort-box'>
    <div className='sort-box__active'>
      Сортировка по:{" "}
      <span onClick={openSortModal} className='sort-item__active'>{selected.name}</span>
    </div>
    {open && (
      <ul className="sort-content">
        {sortItems.map((obj, i) => (
          <li onClick={() => funcItemName(obj)} key={i} className='sort-item'>
            {obj.name}
          </li>
        ))}
      </ul>
    )}
  </div>
);
})
export default Sort;
