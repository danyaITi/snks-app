import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpen, setStateItem } from "../../redux/Fillter/slice";
import { Item, SortPropertyEnum } from "../../redux/Fillter/types";
import { RootState } from "../../redux/store";
import './Sort.scss'

export const sortItems = [
  { name: "цене(desc)", sortProperty: SortPropertyEnum.DPRICE },
  { name: "цене(asc)", sortProperty: SortPropertyEnum.APRICE },
];

type OutsideCkick = MouseEvent & {
  path: Node[];
};

const Sort: React.FC = React.memo(() => {
  const dispatch = useDispatch()
  const sortRef = useRef<HTMLDivElement>(null);

  const selected = useSelector((state:RootState)=> state.fillter.item)
  const open = useSelector((state: RootState)=> state.fillter.open)

  useEffect(() => {
    const clickOutside = (event: MouseEvent) => {
      const ev = event as OutsideCkick;
      if (sortRef.current && !ev.path.includes(sortRef.current)) {
        dispatch(setOpen(false))
      }
    };
    document.body.addEventListener("click", clickOutside);

    return () => {
      document.body.removeEventListener("click", clickOutside);
    };
  }, []);

  const funcItemName = (obj: { name: string; sortProperty: SortPropertyEnum }) => {
    dispatch(setStateItem(obj));
  }

return (
  <div className='sort-box' ref={sortRef}>
    <div className='sort-box__active'>
      Сортировка по:{" "}
      <span onClick={()=>dispatch(setOpen(!open))} className='sort-item__active'>{selected.name}</span>
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
